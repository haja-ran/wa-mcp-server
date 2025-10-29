/* SDK modules are dynamically imported inside request handlers to avoid ESM import-time
   issues when running tests (Jest transforms CommonJS). We declare placeholders here
   and will assign them with dynamic imports where needed. */
let Server: any;
let SSEServerTransport: any;
let CallToolRequest: any;
let CallToolRequestSchema: any;
let ListResourcesRequestSchema: any;
let ListToolsRequestSchema: any;
let ReadResourceRequest: any;
let ReadResourceRequestSchema: any;
import express, { Request, Response } from 'express';
import getRawBody from 'raw-body';
 // simplified content-type handling — avoid importing 'content-type' to prevent missing @types issues
import { randomUUID } from 'node:crypto';
import { components } from './data/components.js';
import { utilities } from './data/utilities.js';
import { generateComponentCodeTool } from './tools/generateComponentCode.js';
import { getComponentDocsTool } from './tools/getComponentDocs.js';
import { getUtilityDocsTool } from './tools/getUtilityDocs.js';
import { listComponentsTool } from './tools/listComponents.js';
import { listUtilitiesTool } from './tools/listUtilities.js';
import { themeCustomizerTool } from './tools/themeCustomizer.js';
// helper to build dynamic capabilities payloads (tools + resources)
import { buildCapabilities, buildHandshakeResult } from './lib/capabilities.js';

const startTime = Date.now();
let ready = false;

// Global handlers (will be registered per server instance)
const listToolsHandler = async () => {
  return {
    tools: [
      listComponentsTool,
      generateComponentCodeTool,
      getComponentDocsTool,
      themeCustomizerTool,
      listUtilitiesTool,
      getUtilityDocsTool,
    ],
  };
};

const callToolHandler = async (request: any) => {
  const { name, arguments: args } = request.params;

  const toolHandlers: Record<string, (args: any) => Promise<any>> = {
    listComponents: async (args) => await (listComponentsTool as any).handler(args),
    generateComponentCode: async (args) => await (generateComponentCodeTool as any).handler(args),
    getComponentDocs: async (args) => await (getComponentDocsTool as any).handler(args),
    themeCustomizer: async (args) => await (themeCustomizerTool as any).handler(args),
    listUtilities: async (args) => await (listUtilitiesTool as any).handler(args),
    getUtilityDocs: async (args) => await (getUtilityDocsTool as any).handler(args),
  };

  if (toolHandlers[name]) {
    return await toolHandlers[name](args);
  } else {
    throw new Error(`Unknown tool: ${name}`);
  }
};

const listResourcesHandler = async () => {
  const componentResources = components.map(c => ({
    uri: `wa://components/${c.tagName}`,
    name: `${c.name} Documentation`,
    description: c.description,
    mimeType: 'application/json',
  }));

  const utilityResources = utilities.map(u => ({
    uri: `wa://utilities/${u.className}`,
    name: `${u.name} Documentation`,
    description: u.description,
    mimeType: 'application/json',
  }));

  return { resources: [...componentResources, ...utilityResources] };
};

const readResourceHandler = async (request: any) => {
  const uri = request.params.uri;
  if (uri.startsWith('wa://components/')) {
    const tagName = uri.replace('wa://components/', '');
    const component = components.find(c => c.tagName === tagName);
    if (!component) {
      throw new Error(`Resource not found: ${uri}`);
    }
    return {
      contents: [
        {
          uri,
          mimeType: 'application/json',
          text: JSON.stringify(component, null, 2),
        },
      ],
    };
  } else if (uri.startsWith('wa://utilities/')) {
    const className = uri.replace('wa://utilities/', '');
    const utility = utilities.find(u => u.className === className);
    if (!utility) {
      throw new Error(`Resource not found: ${uri}`);
    }
    return {
      contents: [
        {
          uri,
          mimeType: 'application/json',
          text: JSON.stringify(utility, null, 2),
        },
      ],
    };
  } else {
    throw new Error(`Resource not found: ${uri}`);
  }
};

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
  app.post('/sse', async (req: Request, res: Response) => {
    console.log('Received POST to /sse');

    const sessionId = (req.query.sessionId as string) || '';
 
    // Handshake mode: create a new session and return an endpoint + sessionId
    // For compatibility with http-first clients (like mcp-remote), accept a JSON-RPC
    // handshake payload and reply with a JSON-RPC 2.0 response containing the
    // sessionId + endpoint if an `id` is present. If the handshake is not JSON-RPC
    // (no id), fall back to returning plain JSON.
    if (!sessionId) {
      // Read raw handshake body (some clients POST a JSON-RPC request here)
      let handshakeBody: string | undefined;
      try {
        const contentTypeHeader = (req.headers['content-type'] as string) || 'application/json';
        const match = /charset=([^;]+)/i.exec(contentTypeHeader);
        const encoding = match ? match[1].trim() : 'utf-8';
        handshakeBody = await getRawBody(req, { encoding });
      } catch (err: any) {
        // If no body or can't read it, continue with undefined handshakeBody
        handshakeBody = undefined;
      }

      let handshakeJson: any = undefined;
      try {
        if (handshakeBody) {
          handshakeJson = JSON.parse(String(handshakeBody));
        }
      } catch (err) {
        // Ignore parse errors; we'll treat as non-JSON-RPC handshake
        handshakeJson = undefined;
      }

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

        // Build capabilities for handshake result using the centralized helper.
        const availableToolsForHandshake = [
          listComponentsTool,
          generateComponentCodeTool,
          getComponentDocsTool,
          themeCustomizerTool,
          listUtilitiesTool,
          getUtilityDocsTool,
        ].filter(Boolean);
        const capabilities = buildCapabilities(availableToolsForHandshake, components, utilities);

        const resultPayload = {
          sessionId: newSessionId,
          endpoint,
          // Echo negotiated protocol version (or default)
          protocolVersion: handshakeJson?.params?.protocolVersion ?? '1',
          // Use the unified capabilities object built above
          capabilities: capabilities,
          serverInfo: {
            name: 'wa-mcp-server',
            version: '1.0.0',
          },
        };

        // If the client sent a JSON-RPC request (has an id), reply with JSON-RPC 2.0
        const reqId = handshakeJson?.id;
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
        // No id => notification; accept with no body
        res.status(202).end('Accepted');
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

//
// Start the server when this module is executed directly (i.e. not under tests).
// This block is at module scope (outside createApp) so tests can import createApp
// without starting a real HTTP listener.
if (process.env.NODE_ENV !== 'test') {
  (async () => {
    try {
      const { app } = createApp();
      const port = process.env.PORT || 3000;
      app.listen(port, () => {
        ready = true;
        console.error(`Web Awesome MCP Server listening on port ${port}`);
      });
    } catch (error) {
      console.error('Failed to start server:', error);
      process.exit(1);
    }
  })();
}

  // Export createApp() above provides an app + servers map that tests can import,
  // start HTTP servers on ephemeral ports, and perform handshake + message flows.