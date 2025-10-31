import type { Tool } from '@modelcontextprotocol/sdk/types.js'
import { utilities } from '../data/utilities.js'

export const getUtilityDocsTool: Tool = {
  name: 'getUtilityDocs',
  description: 'Retrieves the detailed documentation of a Web Awesome utility.',
  inputSchema: {
    type: 'object',
    properties: {
      className: {
        type: 'string',
        description: 'The class name of the utility (e.g. wa-stack).',
      },
    },
    required: ['className'],
  },
}

getUtilityDocsTool.handler = async (args: { className: string }) => {
  const utility = utilities.find(u => u.className === args.className)
  if (!utility) {
    throw new Error(`Utility ${args.className} not found.`)
  }

  const docs = {
    className: utility.className,
    name: utility.name,
    description: utility.description,
    category: utility.category,
    examples: utility.examples || [],
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
