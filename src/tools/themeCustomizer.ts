import { Tool } from '@modelcontextprotocol/sdk/types.js';

export const themeCustomizerTool: Tool = {
  name: 'themeCustomizer',
  description: 'Génère du CSS pour personnaliser un thème Web Awesome basé sur des variables.',
  inputSchema: {
    type: 'object',
    properties: {
      variables: {
        type: 'object',
        description: 'Variables CSS à personnaliser (ex: { "--wa-color-brand": "#ff0000" }).',
      },
    },
    required: ['variables'],
  },
};

themeCustomizerTool.handler = async (args: { variables: Record<string, string> }) => {
  let css = ':root {\n';
  for (const [key, value] of Object.entries(args.variables)) {
    css += `  ${key}: ${value};\n`;
  }
  css += '}\n';

  return {
    content: [
      {
        type: 'text',
        text: css,
      },
    ],
  };
};