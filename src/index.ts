import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { CallToolRequestSchema, ListResourcesRequestSchema, ListToolsRequestSchema, ReadResourceRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import express from 'express';
import { components } from './data/components.js';
import { generateComponentCodeTool } from './tools/generateComponentCode.js';
import { getComponentDocsTool } from './tools/getComponentDocs.js';
import { listComponentsTool } from './tools/listComponents.js';
import { themeCustomizerTool } from './tools/themeCustomizer.js';

const PORT = process.env.PORT || 3000;

// Define handlers
const listToolsHandler = async () => {
  return {
    tools: [
      listComponentsTool,
      generateComponentCodeTool,
      getComponentDocsTool,
      themeCustomizerTool,
    ],
  };
};

const callToolHandler = async (request: any) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case 'listComponents':
      return await (listComponentsTool as any).handler(args);
    case 'generateComponentCode':
      return await (generateComponentCodeTool as any).handler(args);
    case 'getComponentDocs':
      return await (getComponentDocsTool as any).handler(args);
    case 'themeCustomizer':
      return await (themeCustomizerTool as any).handler(args);
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
};

const listResourcesHandler = async () => {
  const resources = components.map(c => ({
    uri: `wa://components/${c.tagName}`,
    name: `${c.name} Documentation`,
    description: c.description,
    mimeType: 'application/json',
  }));

  return { resources };
};

const readResourceHandler = async (request: any) => {
  const uri = request.params.uri;
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
};

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

// Enregistrer les outils
server.setRequestHandler(ListToolsRequestSchema, listToolsHandler);
server.setRequestHandler(CallToolRequestSchema, callToolHandler);
server.setRequestHandler(ListResourcesRequestSchema, listResourcesHandler);
server.setRequestHandler(ReadResourceRequestSchema, readResourceHandler);

async function main() {
  const app = express();
  app.use(express.json());

  app.post('/', async (req, res) => {
    const { jsonrpc, id, method, params } = req.body;
    try {
      let result;
      if (method === 'tools/list') {
        result = await listToolsHandler();
      } else if (method === 'tools/call') {
        result = await callToolHandler({ params });
      } else if (method === 'resources/list') {
        result = await listResourcesHandler();
      } else if (method === 'resources/read') {
        result = await readResourceHandler({ params });
      } else {
        throw new Error('Method not found');
      }
      res.json({ jsonrpc: '2.0', id, result });
    } catch (error: any) {
      res.json({ jsonrpc: '2.0', id, error: { code: -32000, message: error.message } });
    }
  });

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Web Awesome MCP Server running at http://localhost:${PORT}`);
  });
}

main().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});