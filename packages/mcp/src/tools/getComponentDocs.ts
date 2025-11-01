import type { Tool } from '@modelcontextprotocol/sdk/types.js'
import { components } from '../data/components.js'
import { validateInput, getComponentDocsSchema } from '../lib/validation.js'

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
  // Validate input
  const validatedArgs = validateInput(getComponentDocsSchema, args)

  const component = components.find(c => c.tagName === validatedArgs.tagName)
  if (!component) {
    throw new Error(`Component ${validatedArgs.tagName} not found.`)
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
