// Mock function declarations
const mockListComponentsHandler = jest.fn();
const mockGenerateComponentCodeHandler = jest.fn();
const mockGetComponentDocsHandler = jest.fn();
const mockGetUsageGuideHandler = jest.fn();
const mockThemeCustomizerHandler = jest.fn();
const mockListUtilitiesHandler = jest.fn();
const mockGetUtilityDocsHandler = jest.fn();

// Mock the data imports
jest.mock('../data/components.js', () => ({
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

jest.mock('../data/utilities.js', () => ({
  utilities: [
    {
      className: 'wa-theme',
      name: 'Theme',
      description: 'A theme utility',
    },
  ],
}));

jest.mock('../tools/listComponents.js', () => ({
  listComponentsTool: {
    name: 'listComponents',
    description: 'Lists components',
    inputSchema: {},
    handler: mockListComponentsHandler,
  },
}));

jest.mock('../tools/generateComponentCode.js', () => ({
  generateComponentCodeTool: {
    name: 'generateComponentCode',
    description: 'Generates component code',
    inputSchema: {},
    handler: mockGenerateComponentCodeHandler,
  },
}));

jest.mock('../tools/getComponentDocs.js', () => ({
  getComponentDocsTool: {
    name: 'getComponentDocs',
    description: 'Gets component docs',
    inputSchema: {},
    handler: mockGetComponentDocsHandler,
  },
}));

jest.mock('../tools/getUsageGuide.js', () => ({
  getUsageGuideTool: {
    name: 'getUsageGuide',
    description: 'Gets usage guide',
    inputSchema: {},
    handler: mockGetUsageGuideHandler,
  },
}));

jest.mock('../tools/themeCustomizer.js', () => ({
  themeCustomizerTool: {
    name: 'themeCustomizer',
    description: 'Customizes theme',
    inputSchema: {},
    handler: mockThemeCustomizerHandler,
  },
}));

jest.mock('../tools/listUtilities.js', () => ({
  listUtilitiesTool: {
    name: 'listUtilities',
    description: 'Lists utilities',
    inputSchema: {},
    handler: mockListUtilitiesHandler,
  },
}));

jest.mock('../tools/getUtilityDocs.js', () => ({
  getUtilityDocsTool: {
    name: 'getUtilityDocs',
    description: 'Gets utility docs',
    inputSchema: {},
    handler: mockGetUtilityDocsHandler,
  },
}));

import { listToolsHandler, callToolHandler, listResourcesHandler, readResourceHandler } from '../handlers.js';

describe('handlers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('listToolsHandler', () => {
    it('returns the list of available tools', async () => {
      const result = await listToolsHandler();

      expect(result).toEqual({
        tools: [
          {
            name: 'listComponents',
            description: 'Lists components',
            inputSchema: {},
            handler: mockListComponentsHandler,
          },
          {
            name: 'generateComponentCode',
            description: 'Generates component code',
            inputSchema: {},
            handler: mockGenerateComponentCodeHandler,
          },
          {
            name: 'getComponentDocs',
            description: 'Gets component docs',
            inputSchema: {},
            handler: mockGetComponentDocsHandler,
          },
          {
            name: 'getUsageGuide',
            description: 'Gets usage guide',
            inputSchema: {},
            handler: mockGetUsageGuideHandler,
          },
          {
            name: 'themeCustomizer',
            description: 'Customizes theme',
            inputSchema: {},
            handler: mockThemeCustomizerHandler,
          },
          {
            name: 'listUtilities',
            description: 'Lists utilities',
            inputSchema: {},
            handler: mockListUtilitiesHandler,
          },
          {
            name: 'getUtilityDocs',
            description: 'Gets utility docs',
            inputSchema: {},
            handler: mockGetUtilityDocsHandler,
          },
        ],
      });
    });
  });

  describe('callToolHandler', () => {
    it('calls listComponents tool handler', async () => {
      const mockResult = { components: [] };
      mockListComponentsHandler.mockResolvedValue(mockResult);

      const request = {
        params: {
          name: 'listComponents',
          arguments: {},
        },
      };

      const result = await callToolHandler(request);

      expect(mockListComponentsHandler).toHaveBeenCalledWith({});
      expect(result).toBe(mockResult);
    });

    it('calls generateComponentCode tool handler', async () => {
      const mockResult = { code: '<wa-button></wa-button>' };
      mockGenerateComponentCodeHandler.mockResolvedValue(mockResult);

      const request = {
        params: {
          name: 'generateComponentCode',
          arguments: { tagName: 'wa-button' },
        },
      };

      const result = await callToolHandler(request);

      expect(mockGenerateComponentCodeHandler).toHaveBeenCalledWith({ tagName: 'wa-button' });
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