import type { Tool } from '@modelcontextprotocol/sdk/types.js'

const USAGE_GUIDE_URL = 'https://raw.githubusercontent.com/shoelace-style/webawesome/refs/heads/next/packages/webawesome/docs/docs/usage.md'

export const getUsageGuideTool: Tool = {
  name: 'getUsageGuide',
  description: 'Provides comprehensive usage guide for Web Awesome components, including registration, attributes, events, methods, slots, and best practices.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
}

getUsageGuideTool.handler = async () => {
  try {
    const response = await fetch(USAGE_GUIDE_URL)
    if (!response.ok) {
      throw new Error(`Failed to fetch usage guide: ${response.status}`)
    }
    const content = await response.text()
    return {
      content: [
        {
          type: 'text',
          text: content,
        },
      ],
    }
  }
  catch (error) {
    console.error('Error fetching usage guide:', error)
    return {
      content: [
        {
          type: 'text',
          text: 'Error: Unable to fetch usage guide. Please check your internet connection and try again.',
        },
      ],
    }
  }
}
