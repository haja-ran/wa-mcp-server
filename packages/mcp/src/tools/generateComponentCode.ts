import type { Tool } from '@modelcontextprotocol/sdk/types.js'
import { components } from '../data/components.js'

export const generateComponentCodeTool: Tool = {
  name: 'generateComponentCode',
  description: 'Generates HTML code for a Web Awesome component with custom options.',
  inputSchema: {
    type: 'object',
    properties: {
      tagName: {
        type: 'string',
        description: 'The tag name of the component (e.g. wa-button).',
      },
      properties: {
        type: 'object',
        description: 'Properties to apply to the component.',
      },
      content: {
        type: 'string',
        description: 'Content of the default slot.',
      },
    },
    required: ['tagName'],
  },
}

generateComponentCodeTool.handler = async (args: { tagName: string, properties?: Record<string, any>, content?: string }) => {
  const component = components.find(c => c.tagName === args.tagName)
  if (!component) {
    throw new Error(`Component ${args.tagName} not found.`)
  }

  let attributes = ''
  if (args.properties) {
    for (const [key, value] of Object.entries(args.properties)) {
      if (typeof value === 'boolean') {
        attributes += value ? ` ${key}` : ''
      }
      else {
        attributes += ` ${key}="${value}"`
      }
    }
  }

  const content = args.content || ''
  const html = `<${args.tagName}${attributes}>${content}</${args.tagName}>`

  return {
    content: [
      {
        type: 'text',
        text: html,
      },
    ],
  }
}
