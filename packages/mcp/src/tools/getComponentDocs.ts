import type { Tool } from '@modelcontextprotocol/sdk/types.js'
import { components } from '../data/components.js'

export const getComponentDocsTool: Tool = {
  name: 'getComponentDocs',
  description: 'Retrieves the detailed documentation of a Web Awesome component.',
  inputSchema: {
    type: 'object',
    properties: {
      tagName: {
        type: 'string',
        description: 'The tag name of the component (e.g. wa-button).',
      },
    },
    required: ['tagName'],
  },
}

getComponentDocsTool.handler = async (args: { tagName: string }) => {
  const component = components.find(c => c.tagName === args.tagName)
  if (!component) {
    throw new Error(`Component ${args.tagName} not found.`)
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
    cssVariables: component.cssVariables,
  }

  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(docs, null, 2),
      },
    ],
  }
}
