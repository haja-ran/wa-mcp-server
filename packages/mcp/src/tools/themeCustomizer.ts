import type { Tool } from '@modelcontextprotocol/sdk/types.js'

export const themeCustomizerTool: Tool = {
  name: 'themeCustomizer',
  description: 'Generates CSS to customize a Web Awesome theme based on variables.',
  inputSchema: {
    type: 'object',
    properties: {
      variables: {
        type: 'object',
        description: 'CSS variables to customize (e.g. { "--wa-color-brand": "#ff0000" }).',
      },
    },
    required: ['variables'],
  },
}

themeCustomizerTool.handler = async (args: { variables: Record<string, string> }) => {
  let css = ':root {\n'
  for (const [key, value] of Object.entries(args.variables)) {
    css += `  ${key}: ${value};\n`
  }
  css += '}\n'

  return {
    content: [
      {
        type: 'text',
        text: css,
      },
    ],
  }
}
