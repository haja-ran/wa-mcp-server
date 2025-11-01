import type { Tool } from '@modelcontextprotocol/sdk/types.js'
import { components } from '../data/components.js'
import { validateInput, generateComponentCodeSchema, sanitizeProperties, sanitizeHtmlAttribute } from '../lib/validation.js'

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
  // Validate input
  const validatedArgs = validateInput(generateComponentCodeSchema, args)

  const component = components.find(c => c.tagName === validatedArgs.tagName)
  if (!component) {
    throw new Error(`Component ${validatedArgs.tagName} not found.`)
  }

  let attributes = ''
  if (validatedArgs.properties) {
    // Sanitize properties to prevent XSS
    const sanitizedProps = sanitizeProperties(validatedArgs.properties)

    for (const [key, value] of Object.entries(sanitizedProps)) {
      if (typeof value === 'boolean') {
        attributes += value ? ` ${key}` : ''
      } else {
        // Additional sanitization for attribute values
        const sanitizedValue = typeof value === 'string' ? sanitizeHtmlAttribute(value) : String(value)
        attributes += ` ${key}="${sanitizedValue}"`
      }
    }
  }

  // Sanitize content (already validated by schema)
  const content = validatedArgs.content || ''
  const html = `<${validatedArgs.tagName}${attributes}>${content}</${validatedArgs.tagName}>`

  return {
    content: [
      {
        type: 'text',
        text: html,
      },
    ],
  }
}
