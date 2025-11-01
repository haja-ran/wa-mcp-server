import type { Tool } from '@modelcontextprotocol/sdk/types.js'
import { components } from '../data/components.js'
import { validateInput, listComponentsSchema } from '../lib/validation.js'

export const listComponentsTool: Tool = {
  name: 'listComponents',
  description: 'List all available Web Awesome components with their descriptions.',
  inputSchema: {
    type: 'object',
    properties: {
      category: {
        type: 'string',
        description: 'Filter by category (optional).',
      },
    },
  },
}

listComponentsTool.handler = async (args: any) => {
  // Validate input
  const validatedArgs = validateInput(listComponentsSchema, args)

  let filteredComponents = components

  if (validatedArgs.category) {
    filteredComponents = components.filter(c => c.category.toLowerCase().includes(validatedArgs.category!.toLowerCase()))
  }

  const result = filteredComponents.map(c => ({
    tagName: c.tagName,
    name: c.name,
    description: c.description,
    category: c.category,
  }))

  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(result, null, 2),
      },
    ],
  }
}
