import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { CallToolRequestSchema, ListResourcesRequestSchema, ListToolsRequestSchema, ReadResourceRequestSchema, CallToolRequest, ReadResourceRequest } from '@modelcontextprotocol/sdk/types.js';
import express, { Request, Response } from 'express';
import { components } from './data/components.js';
import { utilities } from './data/utilities.js';
import { generateComponentCodeTool } from './tools/generateComponentCode.js';
import { getComponentDocsTool } from './tools/getComponentDocs.js';
import { getUtilityDocsTool } from './tools/getUtilityDocs.js';
import { listComponentsTool } from './tools/listComponents.js';
import { listUtilitiesTool } from './tools/listUtilities.js';
import { themeCustomizerTool } from './tools/themeCustomizer.js';

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

const callToolHandler = async (request: CallToolRequest) => {
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

const readResourceHandler = async (request: ReadResourceRequest) => {
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

async function main() {
  const app = express();
  app.use(express.json());

  const servers = new Map<string, Server>();

  // SSE endpoint for establishing connections
  app.get('/sse', async (req: Request, res: Response) => {
    console.log('Got new SSE connection');
    const transport = new SSEServerTransport('/message', res);
    
    const server = new Server(
      {
        name: 'wa-mcp-server',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
          resources: {},
        },
      }
    );

    // Register handlers for this server instance
    server.setRequestHandler(ListToolsRequestSchema, listToolsHandler);
    server.setRequestHandler(CallToolRequestSchema, callToolHandler);
    server.setRequestHandler(ListResourcesRequestSchema, listResourcesHandler);
    server.setRequestHandler(ReadResourceRequestSchema, readResourceHandler);

    servers.set(transport.sessionId, server);
    
    server.onclose = () => {
      console.log('SSE connection closed');
      servers.delete(transport.sessionId);
    };

    await server.connect(transport);
    await transport.start();
  });

  // POST endpoint for sending messages
  app.post('/message', async (req: Request, res: Response) => {
    console.log('Received message');
    const sessionId = req.query.sessionId as string;
    const server = servers.get(sessionId);
    
    if (!server) {
      res.status(404).send('Session not found');
      return;
    }

    const transport = server.transport as SSEServerTransport;
    await transport.handlePostMessage(req, res);
  });

  app.listen(3000, () => {
    console.error('Web Awesome MCP Server listening on port 3000');
  });
}

main().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});