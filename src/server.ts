/* SDK modules are dynamically imported inside request handlers to avoid ESM import-time
   issues when running tests (Jest transforms CommonJS). We declare placeholders here
   and will assign them with dynamic imports where needed. */
let Server: any;
let SSEServerTransport: any;
let CallToolRequestSchema: any;
let ListResourcesRequestSchema: any;
let ListToolsRequestSchema: any;
let ReadResourceRequestSchema: any;
import express, { type Request, type Response } from 'express';
import getRawBody from 'raw-body';
// simplified content-type handling — avoid importing 'content-type' to prevent missing @types issues
import { randomUUID } from 'node:crypto';
import { components } from './data/components.js';
import { utilities } from './data/utilities.js';
import { generateComponentCodeTool } from './tools/generateComponentCode.js';
import { getComponentDocsTool } from './tools/getComponentDocs.js';
import { getUsageGuideTool } from './tools/getUsageGuide.js';
import { getUtilityDocsTool } from './tools/getUtilityDocs.js';
import { listComponentsTool } from './tools/listComponents.js';
import { listUtilitiesTool } from './tools/listUtilities.js';
import { themeCustomizerTool } from './tools/themeCustomizer.js';
// helper to build dynamic capabilities payloads (tools + resources)
import { buildCapabilities } from './lib/capabilities.js';
import { listToolsHandler, callToolHandler, listResourcesHandler, readResourceHandler } from './handlers.js';

const startTime = Date.now();
export let ready = false;

export function setReady(value: boolean) {
  ready = value;
}

export function createApp() {
  const app = express();
  // Removed global JSON body parser so raw POST request bodies can be read by the SSE transport's `handlePostMessage`.
  // If you need JSON parsing for other endpoints, add per-route middleware (e.g. `app.post('/some', express.json(), handler)`).

  const servers = new Map<string, any>();

  // Health endpoint (readiness + liveness)
  app.get('/health', (req, res) => {
    res.status(ready ? 200 : 503).json({
      status: ready ? 'ok' : 'starting',
      ready,
      uptimeMs: Date.now() - startTime,
      connections: servers.size,
    });
  });

  // SSE endpoint for establishing connections
  app.get('/sse', async (req: Request, res: Response) => {
    try {
      // Dynamically import SDK modules here to avoid top-level ESM imports breaking Jest.
      // These imports are awaited inside the handler (which is async) so they don't block
      // module initialization in test environments that don't support ESM at import time.
      if (!Server || !SSEServerTransport || !ListToolsRequestSchema) {
        try {
          const sdkIndex = await import('@modelcontextprotocol/sdk/server/index.js');
          const sdkSse = await import('@modelcontextprotocol/sdk/server/sse.js');
          const sdkTypes = await import('@modelcontextprotocol/sdk/types.js');
          Server = sdkIndex.Server;
          SSEServerTransport = sdkSse.SSEServerTransport;
          CallToolRequestSchema = sdkTypes.CallToolRequestSchema;
          ListToolsRequestSchema = sdkTypes.ListToolsRequestSchema;
          ListResourcesRequestSchema = sdkTypes.ListResourcesRequestSchema;
          ReadResourceRequestSchema = sdkTypes.ReadResourceRequestSchema;
        } catch (_e) {
          // If dynamic import fails, let the handler continue; errors will be surfaced later
          console.error('Failed to dynamically import SDK modules:', _e);
        }
      }

      const acceptHeader = req.headers['accept'];
      // Allow missing Accept header (some clients do not send it). Only reject when Accept is present
      // but does not include `text/event-stream`.
      if (acceptHeader && !(String(acceptHeader).includes('text/event-stream'))) {
        res.status(406).send('Not Acceptable: missing text/event-stream in Accept header');
        return;
      }

      console.log('Got new SSE connection', {
        ip: req.ip,
        ua: req.headers['user-agent'],
      });

      const transport = new SSEServerTransport('/message', res);

      // Try to start the transport immediately so the client receives the endpoint event
      // and headers as soon as possible. If start() reports it's already started,
      // ignore that specific error (server.connect may start it internally).
      try {
        await transport.start();
      } catch (err: any) {
        const msg = String(err?.message ?? err);
        if (!/already started/i.test(msg)) {
          console.error('transport.start failed:', err);
          if (!res.headersSent) {
            res.status(500).end();
          }
          return;
        } else {
          // Known benign case: transport was already started by server.connect
          // suppressed debug log
        }
      }

      // Send an explicit absolute endpoint event so clients that require a full URL
      // (for example Zed) get the correct connect URL immediately, and prime the
      // SSE stream so some clients/proxies don't time out waiting for data.
      try {
        const proto = (req.headers['x-forwarded-proto'] as string) || (req.protocol as string) || 'http';
        const host = req.get('host') || (req.headers['host'] as string) || `localhost:${process.env.PORT || 3000}`;
        const absoluteEndpoint = `${proto}://${host}/message?sessionId=${transport.sessionId}`;

        const sseRes = (transport as any)._sseResponse;
        if (sseRes) {
          // Send explicit absolute endpoint event (in addition to the transport's relative event)
          try {
            sseRes.write(`event: endpoint\ndata: ${encodeURI(absoluteEndpoint)}\n\n`);
          } catch (e) {
            // If write fails, don't treat it as fatal; the transport will handle connection state.
            // suppressed debug log
          }

          // Try to flush headers if possible (some frameworks expose flushHeaders)
          if (typeof sseRes.flushHeaders === 'function') {
            try {
              sseRes.flushHeaders();
            } catch (_e) {
              // ignore flush errors
            }
          }

          // Prime the stream with a harmless comment so clients/proxies receive data quickly
          try {
            sseRes.write(': ready\n\n');
          } catch (_e) {
            // ignore write errors here
          }
        } else {
          console.warn('SSE response not available to send explicit endpoint; client may still receive relative endpoint.');
        }
      } catch (e) {
        console.error('Failed to send absolute endpoint / prime SSE stream:', e);
      }

      // Build dynamic capabilities for Server based on available tools and resources
      const availableTools = [
        listComponentsTool,
        generateComponentCodeTool,
        getComponentDocsTool,
        getUsageGuideTool,
        themeCustomizerTool,
        listUtilitiesTool,
        getUtilityDocsTool,
      ].filter(Boolean);

      // Use shared capability builder for a single, testable implementation
      const capabilities = buildCapabilities(availableTools, components, utilities);

      const server = new Server(
        {
          name: 'wa-mcp-server',
          version: '1.0.0',
        },
        {
          // pass the unified capabilities object built above
          capabilities: capabilities,
        }
      );

      // Register handlers for this server instance
      server.setRequestHandler(ListToolsRequestSchema, listToolsHandler);
      server.setRequestHandler(CallToolRequestSchema, callToolHandler);
      server.setRequestHandler(ListResourcesRequestSchema, listResourcesHandler);
      server.setRequestHandler(ReadResourceRequestSchema, readResourceHandler);

      servers.set(transport.sessionId, server);

      // Keepalive ping (SSE comment lines every 25s)
      const pingInterval = setInterval(() => {
        try {
          (transport as any)._sseResponse?.write(`: ping ${Date.now()}\n\n`);
        } catch (e) {
          console.error('Ping write failed', e);
        }
      }, 25000);

      server.onclose = () => {
        console.log('SSE connection closed');
        clearInterval(pingInterval);
        servers.delete(transport.sessionId);
      };

      transport.onerror = (err: any) => {
        console.error('Transport error', err);
      };

      // Start server.connect() asynchronously so the request handler can finish
      // and so we can send initial SSE data immediately. If connect throws an
      // 'already started' error we ignore that since we already started the transport.
      (async () => {
        try {
          await server.connect(transport);
        } catch (err: any) {
          const msg = String(err?.message ?? err);
          if (!/already started/i.test(msg)) {
            console.error('server.connect error:', err);
          } else {
            // benign: transport/server already started the SSE response
            // suppressed debug log
          }
        }
      })();
    } catch (error) {
      console.error('Error in SSE connection:', error);
      if (!res.headersSent) {
        res.status(500).end();
      }
    }
  });

  // POST endpoint for sending messages (HTTP POST transport support)
  // Supports two modes:
  // 1) Handshake (no sessionId): client POSTs to /sse without sessionId to obtain a sessionId/endpoint.
  // 2) Message delivery: client POSTs to /sse?sessionId=... to deliver JSON-RPC messages.
  // Read raw body to handle JSON parsing manually, avoiding middleware conflicts.
  app.post('/sse', async (req: Request, res: Response) => {
    console.log('Received POST to /sse');

    const sessionId = (req.query.sessionId as string) || '';

    // Handshake mode: create a new session and return an endpoint + sessionId
    // For compatibility with http-first clients (like mcp-remote), accept a JSON-RPC
    // handshake payload and reply with a JSON-RPC 2.0 response containing the
    // sessionId + endpoint if an `id` is present. If the handshake is not JSON-RPC
    // (no id), fall back to returning plain JSON.
    if (!sessionId) {
      // Read raw body and parse JSON manually.
      let message: any = undefined;
      let rawBody: string | undefined;
      try {
        const contentTypeHeader = (req.headers['content-type'] as string) || 'application/json';
        const match = /charset=([^;]+)/i.exec(contentTypeHeader);
        const encoding = match ? match[1].trim() : 'utf-8';
        rawBody = await getRawBody(req, { encoding });
      } catch {
        rawBody = undefined;
      }

      try {
        if (rawBody) {
          message = JSON.parse(String(rawBody));
        }
      } catch {
        message = undefined;
      }

      // If this is a JSON-RPC `initialize` request, perform the handshake flow.
      // Otherwise, treat this as a direct JSON-RPC call (tools/list, tools/call, resources/*)
      // and dispatch immediately without creating a new session endpoint.
      const method = message?.method;

      if (method === 'initialize') {
        // Proceed with handshake: create server instance and return session + capabilities.

        // create server instance and register handlers (same as SSE path)
        const newSessionId = randomUUID();

        // Dynamically import SDK server and types for the handshake path so we don't
        // force top-level ESM imports during module initialization (helps tests).
        let ServerHandshake: any;
        let typesHandshake: any;
        try {
          const sdkHandshake = await import('@modelcontextprotocol/sdk/server/index.js');
          typesHandshake = await import('@modelcontextprotocol/sdk/types.js');
          ServerHandshake = sdkHandshake.Server ?? (sdkHandshake as any).default?.Server ?? sdkHandshake;
        } catch (e) {
          console.error('Failed to dynamically import SDK modules for handshake:', e);
          // If imports fail, respond with an error below when trying to use the server.
        }

        // Build dynamic capabilities for handshake-created Server based on available tools and resources
        const toolDefinitions: Record<string, any> = {};
        const availableToolsHandshake = [
          listComponentsTool,
          generateComponentCodeTool,
          getComponentDocsTool,
          getUsageGuideTool,
          themeCustomizerTool,
          listUtilitiesTool,
          getUtilityDocsTool,
        ].filter(Boolean);

        for (const t of availableToolsHandshake) {
          if (t && t.name) {
            toolDefinitions[t.name] = {
              name: t.name,
              description: t.description ?? '',
              // expose a minimal safe representation of the input schema
              inputSchema: t.inputSchema ? t.inputSchema : {},
            };
          }
        }

        const resourceDefinitions: Record<string, any> = {};
        for (const c of components || []) {
          const uri = `wa://components/${c.tagName}`;
          resourceDefinitions[uri] = {
            uri,
            name: `${c.name} Documentation`,
            description: c.description ?? '',
            mimeType: 'application/json',
          };
        }
        for (const u of utilities || []) {
          const uri = `wa://utilities/${u.className}`;
          resourceDefinitions[uri] = {
            uri,
            name: `${u.name} Documentation`,
            description: u.description ?? '',
            mimeType: 'application/json',
          };
        }

        const server = new (ServerHandshake ?? (class {
          constructor() { /* noop fallback server used only to avoid crashes during import failure */ }
          setRequestHandler() { /* noop */ }
        }))(
          {
            name: 'wa-mcp-server',
            version: '1.0.0',
          },
          {
            capabilities: {
              tools: toolDefinitions,
              resources: resourceDefinitions,
            },
          }
        );

        // Register handlers for this server instance (same handlers we use elsewhere)
        if (typesHandshake) {
          server.setRequestHandler(typesHandshake.ListToolsRequestSchema, listToolsHandler);
          server.setRequestHandler(typesHandshake.CallToolRequestSchema, callToolHandler);
          server.setRequestHandler(typesHandshake.ListResourcesRequestSchema, listResourcesHandler);
          server.setRequestHandler(typesHandshake.ReadResourceRequestSchema, readResourceHandler);
        } else {
          // Fallback to the previously-bound (possibly dynamic) schemas if available,
          // or use the handlers directly (best-effort) to avoid breaking http-first flow.
          try {
            // If the SDK types were already loaded elsewhere, the following names might be set.
            // Attempt to use them if present in module scope.
            // @ts-ignore
            if (typeof ListToolsRequestSchema !== 'undefined' && ListToolsRequestSchema) {
              // @ts-ignore
              server.setRequestHandler(ListToolsRequestSchema, listToolsHandler);
              // @ts-ignore
              server.setRequestHandler(CallToolRequestSchema, callToolHandler);
              // @ts-ignore
              server.setRequestHandler(ListResourcesRequestSchema, listResourcesHandler);
              // @ts-ignore
              server.setRequestHandler(ReadResourceRequestSchema, readResourceHandler);
            }
          } catch (_e) {
            // If all else fails, continue without registering typed handlers.
          }
        }

        // Store server so subsequent POSTs with sessionId are routed to it
        servers.set(newSessionId, server);

        // Construct an absolute endpoint to return (helps clients behind proxies)
        try {
          const proto = (req.headers['x-forwarded-proto'] as string) || (req.protocol as string) || 'http';
          const host = req.get('host') || (req.headers['host'] as string) || `localhost:${process.env.PORT || 3000}`;
          // For http-first clients, they will POST to this same /sse endpoint with sessionId
          const endpoint = `${proto}://${host}/sse?sessionId=${newSessionId}`;

          const resultPayload = {
            sessionId: newSessionId,
            endpoint,
            // Echo negotiated protocol version (or default)
            protocolVersion: message?.params?.protocolVersion ?? '1',
            capabilities: {
              tools: toolDefinitions,
              resources: resourceDefinitions,
            },
            serverInfo: {
              name: 'wa-mcp-server',
              version: '1.0.0',
            },
          };

          // If the client sent a JSON-RPC request (has an id), reply with JSON-RPC 2.0
          const reqId = message?.id;
          if (reqId !== undefined) {
            const rpcResp = {
              jsonrpc: '2.0',
              id: reqId,
              result: resultPayload,
            };
            res.status(200).json(rpcResp);
            return;
          }

          // Fallback plain JSON response (if the client wasn't speaking JSON-RPC)
          res.status(200).json(resultPayload);
          return;
        } catch (e) {
          console.error('Failed to create handshake response:', e);
          res.status(500).send('Handshake failed');
          return;
        }
      } else if (method) {
        // Treat as a direct JSON-RPC call (tools/list, tools/call, resources/*).
        // Normalize the method and dispatch to handlers directly.
        const normalizeMethod = (m: string) => {
          switch (m) {
            case 'tools/list':
            case 'listTools':
              return 'listTools';
            case 'tools/call':
            case 'callTool':
              return 'callTool';
            case 'resources/list':
            case 'listResources':
              return 'listResources';
            case 'resources/read':
            case 'readResource':
              return 'readResource';
            default:
              return m;
          }
        };

        const canonical = normalizeMethod(method);
        try {
          let result: any;
          if (canonical === 'listTools') {
            result = await listToolsHandler();
          } else if (canonical === 'callTool') {
            const callParams = message?.params ?? {};
            result = await callToolHandler({ params: callParams } as any);
          } else if (canonical === 'listResources') {
            result = await listResourcesHandler();
          } else if (canonical === 'readResource') {
            result = await readResourceHandler({ params: message?.params } as any);
          } else {
            // Treat notification methods (notifications/*) as a no-op for compatibility.
            // Some clients send "notifications/initialized" or similar fire-and-forget messages.
            // Respond with a successful, empty result so HTTP-first clients don't treat this as an error.
            if (typeof method === 'string' && /^notifications[\/.]/i.test(method)) {
              if (message?.id !== undefined) {
                // If the caller surprisingly included an id, reply with a JSON-RPC 2.0 response.
                res.status(200).json({ jsonrpc: '2.0', id: message.id, result: {} });
              } else {
                // Normal notification (no id) — return a simple success payload to be permissive.
                res.status(200).json({});
              }
              return;
            }
            throw new Error(`Unknown method: ${method}`);
          }

          // If caller included an id, respond with JSON-RPC envelope; otherwise return raw result for compatibility
          if (message?.id !== undefined) {
            res.status(200).json({ jsonrpc: '2.0', id: message.id, result });
          } else {
            res.status(200).json(result);
          }
          return;
        } catch (err: any) {
          console.error('Error handling direct JSON-RPC call:', err);
          if (message?.id !== undefined) {
            res.status(500).json({ jsonrpc: '2.0', id: message.id, error: { message: String(err?.message ?? err) } });
          } else {
            res.status(500).json({ error: String(err?.message ?? err) });
          }
          return;
        }
      } else {
        // No body and no session -> nothing to do
        res.status(400).send('Missing sessionId or valid JSON-RPC body');
        return;
      }
    }

    // Message delivery mode: route incoming message (raw body) to the appropriate handler.
    const server = servers.get(sessionId);

    if (!server) {
      res.status(404).send('Session not found');
      return;
    }

    // Read raw body (the transport's handlePostMessage expects raw body handling)
    let body: Buffer | string;
    try {
      // Default to application/json and utf-8 if not provided.
      // Accept variants like "application/json; charset=utf-8".
      const contentTypeHeader = (req.headers['content-type'] as string) || 'application/json';
      const mime = contentTypeHeader.split(';')[0].trim().toLowerCase();
      if (mime !== 'application/json') {
        throw new Error(`Unsupported content-type: ${contentTypeHeader}`);
      }
      const match = /charset=([^;]+)/i.exec(contentTypeHeader);
      const encoding = match ? match[1].trim() : 'utf-8';
      body = await getRawBody(req, {
        encoding,
      });
    } catch (err: any) {
      console.error('Failed to read request body:', err);
      res.status(400).end(String(err));
      return;
    }

    // Parse JSON-RPC message and dispatch to our handlers directly.
    // This avoids requiring a full transport to be attached for http-first clients.
    let message: any;
    try {
      message = JSON.parse(String(body));
    } catch (err) {
      console.error('Invalid JSON body:', err);
      res.status(400).end('Invalid JSON');
      return;
    }

    const id = message.id;
    const method = message.method;
    const params = message.params;

    try {
      let result: any;
      // Map JSON-RPC method names to our handler functions.
      // Accept both legacy names (e.g. 'listTools') and canonical MCP names (e.g. 'tools/list').
      if (method === 'listTools' || method === 'tools/list') {
        result = await listToolsHandler();
      } else if (method === 'callTool' || method === 'tools/call') {
        // Normalize params shape for the call handler
        const callParams = params ?? {};
        result = await callToolHandler({ params: callParams } as any);
      } else if (method === 'listResources' || method === 'resources/list') {
        result = await listResourcesHandler();
      } else if (method === 'readResource' || method === 'resources/read') {
        result = await readResourceHandler({ params } as any);
      } else {
        // Handle notifications (fire-and-forget) gracefully instead of throwing.
        if (typeof method === 'string' && /^notifications[\/.]/i.test(method)) {
          if (id !== undefined) {
            // If an id was provided (unexpected for a notification), acknowledge with JSON-RPC envelope.
            res.status(200).json({ jsonrpc: '2.0', id, result: {} });
          } else {
            // Typical notification (no id) — respond with an empty object for compatibility.
            res.status(200).json({});
          }
          return;
        }
        throw new Error(`Unknown method: ${method}`);
      }

      if (id !== undefined) {
        // Respond with a JSON-RPC 2.0 response
        res.status(200).json({
          jsonrpc: '2.0',
          id,
          result,
        });
      } else {
        // No id => compatibility mode for clients like the inspector:
        // Some clients send a request without an `id` and expect the result
        // directly rather than treating it as a fire-and-forget notification.
        // Return the handler result directly to maximize compatibility.
        res.status(200).json(result);
      }
    } catch (err: any) {
      console.error('Error handling JSON-RPC message:', err);
      res.status(500).json({
        jsonrpc: '2.0',
        id,
        error: {
          message: String(err?.message ?? err),
        },
      });
    }
  });

  // POST endpoint for sending messages (callback from clients that follow endpoint event)
  app.post('/message', async (req: Request, res: Response) => {
    console.log('Received message');
    const sessionId = req.query.sessionId as string;
    const server = servers.get(sessionId);

    if (!server) {
      res.status(404).send('Session not found');
      return;
    }

    const transport = server.transport as any;
    await transport.handlePostMessage(req, res);
  });

  // attach servers map for tests to inspect/use
  (app as any).__servers = servers;

  // Return the app and servers map so callers (tests) can start the HTTP server
  // themselves. This also closes the createApp() function.
  return { app, servers } as { app: express.Express; servers: Map<string, any> };
}