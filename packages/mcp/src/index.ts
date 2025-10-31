// wa-mcp-server/src/index.ts
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

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

export async function createServer() {
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
      capabilities: {
        tools: capabilities.tools,
        resources: capabilities.resources,
      },
    }
  );

  // Register handlers for this server instance
  server.setRequestHandler(ListToolsRequestSchema, listToolsHandler);
  server.setRequestHandler(CallToolRequestSchema, callToolHandler);
  server.setRequestHandler(ListResourcesRequestSchema, listResourcesHandler);
  server.setRequestHandler(ReadResourceRequestSchema, readResourceHandler);

  return server;
}

async function main() {
  const server = await createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Web Awesome MCP Server running on stdio');
}

// Start the server when this module is executed directly (i.e. not under tests).
// This block is at module scope (outside main) so tests can import createServer
// without starting a real server.
if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'test') {
  main().catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
  });
}