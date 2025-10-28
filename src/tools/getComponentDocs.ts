import { Tool } from '@modelcontextprotocol/sdk/types.js';
import { components } from '../data/components.js';

export const getComponentDocsTool: Tool = {
  name: 'getComponentDocs',
  description: 'Récupère la documentation détaillée d\'un composant Web Awesome.',
  inputSchema: {
    type: 'object',
    properties: {
      tagName: {
        type: 'string',
        description: 'Le nom du tag du composant (ex: wa-button).',
        required: true,
      },
    },
    required: ['tagName'],
  },
};

getComponentDocsTool.handler = async (args: { tagName: string }) => {
  const component = components.find(c => c.tagName === args.tagName);
  if (!component) {
    throw new Error(`Composant ${args.tagName} non trouvé.`);
  }

  const docs = {
    tagName: component.tagName,
    name: component.name,
    description: component.description,
    category: component.category,
    properties: component.properties,
    events: component.events,
    slots: component.slots,
    cssParts: component.cssParts,
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