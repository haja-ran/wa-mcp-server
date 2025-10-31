// wa-mcp-server/src/handlers.ts
import { components } from './data/components.js';
import { utilities } from './data/utilities.js';
import { generateComponentCodeTool } from './tools/generateComponentCode.js';
import { getComponentDocsTool } from './tools/getComponentDocs.js';
import { getUsageGuideTool } from './tools/getUsageGuide.js';
import { getUtilityDocsTool } from './tools/getUtilityDocs.js';
import { listComponentsTool } from './tools/listComponents.js';
import { listUtilitiesTool } from './tools/listUtilities.js';
import { themeCustomizerTool } from './tools/themeCustomizer.js';

export const listToolsHandler = async () => {
  return {
    tools: [
      listComponentsTool,
      generateComponentCodeTool,
      getComponentDocsTool,
      getUsageGuideTool,
      themeCustomizerTool,
      listUtilitiesTool,
      getUtilityDocsTool,
    ],
  };
};

export const callToolHandler = async (request: any) => {
  const { name, arguments: args } = request.params;

  const toolHandlers: Record<string, (args: any) => Promise<any>> = {
    listComponents: async (args) => await (listComponentsTool as any).handler(args),
    generateComponentCode: async (args) => await (generateComponentCodeTool as any).handler(args),
    getComponentDocs: async (args) => await (getComponentDocsTool as any).handler(args),
    getUsageGuide: async (args) => await (getUsageGuideTool as any).handler(args),
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

export const listResourcesHandler = async () => {
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

export const readResourceHandler = async (request: any) => {
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