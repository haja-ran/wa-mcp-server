import type { Tool } from '@modelcontextprotocol/sdk/types.js';
import { components } from '../data/components.js';

export const listComponentsTool: Tool = {
  name: 'listComponents',
  description: 'Liste tous les composants Web Awesome disponibles avec leurs descriptions.',
  inputSchema: {
    type: 'object',
    properties: {
      category: {
        type: 'string',
        description: 'Filtrer par catégorie (optionnel).',
      },
    },
  },
};

listComponentsTool.handler = async (args: any) => {
  let filteredComponents = components;

  if (args.category) {
    filteredComponents = components.filter(c => c.category.toLowerCase().includes(args.category.toLowerCase()));
  }

  const result = filteredComponents.map(c => ({
    tagName: c.tagName,
    name: c.name,
    description: c.description,
    category: c.category,
  }));

  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(result, null, 2),
      },
    ],
  };
};