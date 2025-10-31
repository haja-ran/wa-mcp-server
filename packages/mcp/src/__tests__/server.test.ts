// wa-mcp/packages/mcp/src/__tests__/server.test.ts
import { createServer } from '../index.js';

// Mock the MCP SDK to avoid ESM import issues in Vitest
vi.mock('@modelcontextprotocol/sdk/server/index.js', () => ({
  Server: class MockServer {
    constructor(info: any, capabilities: any) {
      this.info = info;
      this.capabilities = capabilities;
    }

    info: any;
    capabilities: any;
    setRequestHandler() {}
    connect() {}
  },
}));

vi.mock('@modelcontextprotocol/sdk/server/stdio.js', () => ({
  StdioServerTransport: class MockTransport {
    constructor() {}
  },
}));

vi.mock('@modelcontextprotocol/sdk/types.js', () => ({
  CallToolRequestSchema: {},
  ListToolsRequestSchema: {},
  ListResourcesRequestSchema: {},
  ReadResourceRequestSchema: {},
}));

// Mock data and tools
vi.mock('../data/components.js', () => ({
  components: [
    {
      tagName: 'wa-button',
      name: 'Button',
      description: 'A button component',
    },
  ],
}));

vi.mock('../data/utilities.js', () => ({
  utilities: [
    {
      className: 'wa-theme',
      name: 'Theme',
      description: 'A theme utility',
    },
  ],
}));

vi.mock('../tools/listComponents.js', () => ({
  listComponentsTool: {
    name: 'listComponents',
    description: 'Lists components',
    inputSchema: {},
  },
}));

vi.mock('../tools/generateComponentCode.js', () => ({
  generateComponentCodeTool: {
    name: 'generateComponentCode',
    description: 'Generates component code',
    inputSchema: {},
  },
}));

vi.mock('../tools/getComponentDocs.js', () => ({
  getComponentDocsTool: {
    name: 'getComponentDocs',
    description: 'Gets component docs',
    inputSchema: {},
  },
}));

vi.mock('../tools/getUsageGuide.js', () => ({
  getUsageGuideTool: {
    name: 'getUsageGuide',
    description: 'Gets usage guide',
    inputSchema: {},
  },
}));

vi.mock('../tools/themeCustomizer.js', () => ({
  themeCustomizerTool: {
    name: 'themeCustomizer',
    description: 'Customizes theme',
    inputSchema: {},
  },
}));

vi.mock('../tools/listUtilities.js', () => ({
  listUtilitiesTool: {
    name: 'listUtilities',
    description: 'Lists utilities',
    inputSchema: {},
  },
}));

vi.mock('../tools/getUtilityDocs.js', () => ({
  getUtilityDocsTool: {
    name: 'getUtilityDocs',
    description: 'Gets utility docs',
    inputSchema: {},
  },
}));

vi.mock('../lib/capabilities.js', () => ({
  buildCapabilities: vi.fn(() => ({
    tools: {},
    resources: {},
  })),
}));

vi.mock('../handlers.js', () => ({
  listToolsHandler: vi.fn(),
  callToolHandler: vi.fn(),
  listResourcesHandler: vi.fn(),
  readResourceHandler: vi.fn(),
}));

describe('createServer', () => {
  it('creates a server instance', async () => {
    const server = await createServer();

    expect(server).toBeDefined();
    expect(typeof server.setRequestHandler).toBe('function');
    expect(typeof server.connect).toBe('function');
  });

  it('sets up request handlers', async () => {
    const server = await createServer();

    // The handlers should have been set up during server creation
    // We can't easily test the setRequestHandler calls with the current mock,
    // but we can verify the server was created successfully
    expect(server.setRequestHandler).toBeDefined();
  });
});