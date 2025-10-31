// Mock the data imports
vi.mock('../data/components.js', () => ({
  components: [
    {
      tagName: 'wa-button',
      name: 'Button',
      description: 'A button component',
    },
    {
      tagName: 'wa-input',
      name: 'Input',
      description: 'An input component',
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
    handler: vi.fn(),
  },
}));

vi.mock('../tools/generateComponentCode.js', () => ({
  generateComponentCodeTool: {
    name: 'generateComponentCode',
    description: 'Generates component code',
    inputSchema: {},
    handler: vi.fn(),
  },
}));

vi.mock('../tools/getComponentDocs.js', () => ({
  getComponentDocsTool: {
    name: 'getComponentDocs',
    description: 'Gets component docs',
    inputSchema: {},
    handler: vi.fn(),
  },
}));

vi.mock('../tools/getUsageGuide.js', () => ({
  getUsageGuideTool: {
    name: 'getUsageGuide',
    description: 'Gets usage guide',
    inputSchema: {},
    handler: vi.fn(),
  },
}));

vi.mock('../tools/themeCustomizer.js', () => ({
  themeCustomizerTool: {
    name: 'themeCustomizer',
    description: 'Customizes theme',
    inputSchema: {},
    handler: vi.fn(),
  },
}));

vi.mock('../tools/listUtilities.js', () => ({
  listUtilitiesTool: {
    name: 'listUtilities',
    description: 'Lists utilities',
    inputSchema: {},
    handler: vi.fn(),
  },
}));

vi.mock('../tools/getUtilityDocs.js', () => ({
  getUtilityDocsTool: {
    name: 'getUtilityDocs',
    description: 'Gets utility docs',
    inputSchema: {},
    handler: vi.fn(),
  },
}));

import { listToolsHandler, callToolHandler, listResourcesHandler, readResourceHandler } from '../handlers.js';
import { listComponentsTool } from '../tools/listComponents.js';
import { generateComponentCodeTool } from '../tools/generateComponentCode.js';
import { getComponentDocsTool } from '../tools/getComponentDocs.js';
import { getUsageGuideTool } from '../tools/getUsageGuide.js';
import { themeCustomizerTool } from '../tools/themeCustomizer.js';
import { listUtilitiesTool } from '../tools/listUtilities.js';
import { getUtilityDocsTool } from '../tools/getUtilityDocs.js';

describe('handlers', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('listToolsHandler', () => {
    it('returns the list of available tools', async () => {
      const result = await listToolsHandler();

      expect(result).toEqual({
        tools: [
          listComponentsTool,
          generateComponentCodeTool,
          getComponentDocsTool,
          getUsageGuideTool,
          themeCustomizerTool,
          listUtilitiesTool,
          getUtilityDocsTool,
        ],
      });
    });
  });

  describe('callToolHandler', () => {
    it('calls listComponents tool handler', async () => {
      const mockResult = { components: [] };
      (listComponentsTool.handler as any).mockResolvedValue(mockResult);

      const request = {
        params: {
          name: 'listComponents',
          arguments: {},
        },
      };

      const result = await callToolHandler(request);

      expect(listComponentsTool.handler).toHaveBeenCalledWith({});
      expect(result).toBe(mockResult);
    });

    it('calls generateComponentCode tool handler', async () => {
      const mockResult = { code: '<wa-button></wa-button>' };
      (generateComponentCodeTool.handler as any).mockResolvedValue(mockResult);

      const request = {
        params: {
          name: 'generateComponentCode',
          arguments: { tagName: 'wa-button' },
        },
      };

      const result = await callToolHandler(request);

      expect(generateComponentCodeTool.handler).toHaveBeenCalledWith({ tagName: 'wa-button' });
      expect(result).toBe(mockResult);
    });

    it('throws error for unknown tool', async () => {
      const request = {
        params: {
          name: 'unknownTool',
          arguments: {},
        },
      };

      await expect(callToolHandler(request)).rejects.toThrow('Unknown tool: unknownTool');
    });
  });

  describe('listResourcesHandler', () => {
    it('returns resources for components and utilities', async () => {
      const result = await listResourcesHandler();

      expect(result).toEqual({
        resources: [
          {
            uri: 'wa://components/wa-button',
            name: 'Button Documentation',
            description: 'A button component',
            mimeType: 'application/json',
          },
          {
            uri: 'wa://components/wa-input',
            name: 'Input Documentation',
            description: 'An input component',
            mimeType: 'application/json',
          },
          {
            uri: 'wa://utilities/wa-theme',
            name: 'Theme Documentation',
            description: 'A theme utility',
            mimeType: 'application/json',
          },
        ],
      });
    });
  });

  describe('readResourceHandler', () => {
    it('reads a component resource', async () => {
      const request = {
        params: {
          uri: 'wa://components/wa-button',
        },
      };

      const result = await readResourceHandler(request);

      expect(result).toEqual({
        contents: [
          {
            uri: 'wa://components/wa-button',
            mimeType: 'application/json',
            text: JSON.stringify({
              tagName: 'wa-button',
              name: 'Button',
              description: 'A button component',
            }, null, 2),
          },
        ],
      });
    });

    it('reads a utility resource', async () => {
      const request = {
        params: {
          uri: 'wa://utilities/wa-theme',
        },
      };

      const result = await readResourceHandler(request);

      expect(result).toEqual({
        contents: [
          {
            uri: 'wa://utilities/wa-theme',
            mimeType: 'application/json',
            text: JSON.stringify({
              className: 'wa-theme',
              name: 'Theme',
              description: 'A theme utility',
            }, null, 2),
          },
        ],
      });
    });

    it('throws error for unknown resource', async () => {
      const request = {
        params: {
          uri: 'wa://components/unknown',
        },
      };

      await expect(readResourceHandler(request)).rejects.toThrow('Resource not found: wa://components/unknown');
    });
  });
});