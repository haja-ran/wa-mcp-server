import type { Tool } from '@modelcontextprotocol/sdk/types.js'
import { utilities } from '../data/utilities.js'

export const listUtilitiesTool: Tool = {
  name: 'listUtilities',
  description: 'List all available Web Awesome utilities with their descriptions.',
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

listUtilitiesTool.handler = async (args: any) => {
  let filteredUtilities = utilities

  if (args.category) {
    filteredUtilities = utilities.filter(u => u.category.toLowerCase().includes(args.category.toLowerCase()))
  }

  const result = filteredUtilities.map(u => ({
    className: u.className,
    name: u.name,
    description: u.description,
    category: u.category,
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
