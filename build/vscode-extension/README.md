# Web Awesome MCP VSCode Extension

This VSCode extension provides configuration for the Web Awesome MCP (Model Context Protocol) server in VSCode. Requires the @sha-bang/wa-mcp package to be installed separately.

## Features

- Provides access to Web Awesome component documentation and tools via MCP
- Automatically configures the MCP server for use in VSCode

## Prerequisites

- Install the Web Awesome MCP server globally: `npm install -g @sha-bang/wa-mcp`

## Installation

1. Build the extension:
   ```bash
   npm run build
   cd packages/vscode-extension
   npm install
   npm run compile
   ```

2. Package the extension:
   ```bash
   npx vsce package
   ```

3. Install the `.vsix` file in VSCode.

## Usage

Once installed, the extension contributes MCP server configuration. To enable the Web Awesome MCP server:

1. Open VSCode settings (JSON)
2. Ensure the MCP server is configured (it should be added automatically):
   ```json
   {
     "mcp": {
       "servers": {
         "wa-mcp": {
           "command": "wa-mcp",
           "args": []
         }
       }
     }
   }
   ```

3. Use MCP-compatible tools or extensions that can connect to the server.

## Development

- For development, the @sha-bang/wa-mcp package is available as a workspace dependency.
- Run `npm run watch` to compile on changes.

## License

MIT