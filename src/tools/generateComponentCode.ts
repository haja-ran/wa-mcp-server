import { Tool } from '@modelcontextprotocol/sdk/types.js';
import { components } from '../data/components.js';

export const generateComponentCodeTool: Tool = {
  name: 'generateComponentCode',
  description: 'Génère du code HTML pour un composant Web Awesome avec des options personnalisées.',
  inputSchema: {
    type: 'object',
    properties: {
      tagName: {
        type: 'string',
        description: 'Le nom du tag du composant (ex: wa-button).',
        required: true,
      },
      properties: {
        type: 'object',
        description: 'Propriétés à appliquer au composant.',
      },
      content: {
        type: 'string',
        description: 'Contenu du slot par défaut.',
      },
    },
    required: ['tagName'],
  },
};

generateComponentCodeTool.handler = async (args: { tagName: string; properties?: Record<string, any>; content?: string }) => {
  const component = components.find(c => c.tagName === args.tagName);
  if (!component) {
    throw new Error(`Composant ${args.tagName} non trouvé.`);
  }

  let attributes = '';
  if (args.properties) {
    for (const [key, value] of Object.entries(args.properties)) {
      if (typeof value === 'boolean') {
        attributes += value ? ` ${key}` : '';
      } else {
        attributes += ` ${key}="${value}"`;
      }
    }
  }

  const content = args.content || '';
  const html = `<${args.tagName}${attributes}>${content}</${args.tagName}>`;

  return {
    content: [
      {
        type: 'text',
        text: html,
      },
    ],
  };
};