import type { Tool } from '@modelcontextprotocol/sdk/types.js';
import { utilities } from '../data/utilities.js';

export const getUtilityDocsTool: Tool = {
  name: 'getUtilityDocs',
  description: 'Récupère la documentation détaillée d\'un utilitaire Web Awesome.',
  inputSchema: {
    type: 'object',
    properties: {
      className: {
        type: 'string',
        description: 'Le nom de la classe de l\'utilitaire (ex: wa-stack).'
      },
    },
    required: ['className'],
  },
};

getUtilityDocsTool.handler = async (args: { className: string }) => {
  const utility = utilities.find(u => u.className === args.className);
  if (!utility) {
    throw new Error(`Utilitaire ${args.className} non trouvé.`);
  }

  const docs = {
    className: utility.className,
    name: utility.name,
    description: utility.description,
    category: utility.category,
    examples: utility.examples || [],
  };

  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(docs, null, 2),
      },
    ],
  };
};