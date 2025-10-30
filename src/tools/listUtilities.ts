import type { Tool } from '@modelcontextprotocol/sdk/types.js';
import { utilities } from '../data/utilities.js';

export const listUtilitiesTool: Tool = {
  name: 'listUtilities',
  description: 'Liste tous les utilitaires Web Awesome disponibles avec leurs descriptions.',
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

listUtilitiesTool.handler = async (args: any) => {
  let filteredUtilities = utilities;

  if (args.category) {
    filteredUtilities = utilities.filter(u => u.category.toLowerCase().includes(args.category.toLowerCase()));
  }

  const result = filteredUtilities.map(u => ({
    className: u.className,
    name: u.name,
    description: u.description,
    category: u.category,
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