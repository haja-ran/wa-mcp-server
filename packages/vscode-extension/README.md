# Web Awesome MCP VSCode Extension

[![Version](https://img.shields.io/badge/version-1.2.0-blue.svg)](https://github.com/haja-ran/wa-mcp-server)
[![License](https://img.shields.io/badge/license-ISC-green.svg)](LICENSE)

A VSCode extension that provides seamless integration with the Web Awesome MCP (Model Context Protocol) server. This extension enables AI assistants to access Web Awesome component documentation, generate component code, and provide intelligent suggestions directly within VSCode.

## 🚀 Features

- **Automatic MCP Server Configuration** - Pre-configured settings for the Web Awesome MCP server
- **Component Discovery** - Access to 60+ Web Awesome components via MCP-compatible AI assistants
- **Code Generation** - Generate ready-to-use HTML for Web Awesome components with validation
- **Documentation Access** - Retrieve detailed component properties, events, slots, and CSS parts
- **Theme Customization** - Generate CSS variables for custom themes
- **Utility Classes** - Access Web Awesome utility class documentation
- **XSS Protection** - Built-in input validation and sanitization for secure code generation

## 📋 Prerequisites

- **VSCode** 1.74.0 or higher
- **Node.js** 16+ (for the MCP server)
- **@sha-bang/wa-mcp** package (installed automatically or manually)

## 📦 Installation

### Option 1: Install from VSIX (Recommended)

1. Download the latest `.vsix` file from the [releases page](https://github.com/haja-ran/wa-mcp-server/releases)
2. Open VSCode
3. Go to Extensions view (⌘+Shift+X on macOS, Ctrl+Shift+X on Windows/Linux)
4. Click the "..." menu at the top-right of the Extensions view
5. Select "Install from VSIX..."
6. Choose the downloaded `.vsix` file

### Option 2: Build from Source

```bash
# Clone the repository
git clone https://github.com/haja-ran/wa-mcp-server.git
cd wa-mcp-server

# Install dependencies
npm install

# Build and package the extension
npm run package:vscode

# Install the generated .vsix file in VSCode
```

## 🔧 Configuration

The extension automatically configures the MCP server with default settings. The configuration is available in VSCode settings:

```json
{
  "mcp.servers.wa-mcp": {
    "command": "wa-mcp",
    "args": []
  }
}
```

### Custom Configuration

You can customize the server configuration by editing your VSCode settings:

1. Open Settings (⌘+, on macOS, Ctrl+, on Windows/Linux)
2. Search for "mcp.servers.wa-mcp"
3. Modify the command and arguments as needed

Example with npx (no global installation required):

```json
{
  "mcp.servers.wa-mcp": {
    "command": "npx",
    "args": ["@sha-bang/wa-mcp"]
  }
}
```

## 💡 Usage

This extension works with MCP-compatible AI assistant extensions in VSCode, such as:

- **Cline** (formerly Claude Dev)
- **Continue**
- Other MCP-compatible extensions

### Using with Cline

1. Install the [Cline extension](https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev)
2. Open Cline panel (click the Cline icon in the sidebar)
3. Configure MCP servers in Cline settings
4. Add Web Awesome MCP server configuration:

```json
{
  "mcpServers": {
    "web-awesome": {
      "command": "npx",
      "args": ["@sha-bang/wa-mcp"]
    }
  }
}
```

5. Start chatting with Cline and ask about Web Awesome components!

### Example Prompts

Once configured, you can ask your AI assistant:

- "Show me all Web Awesome button components"
- "Generate a Web Awesome card with a header and button"
- "What properties does the wa-dialog component support?"
- "Create a form using Web Awesome components"
- "Generate CSS for a dark theme with brand color #3b82f6"
- "What utility classes are available for spacing?"

## 🛠️ Development

### Setup Development Environment

```bash
# Clone the repository
git clone https://github.com/haja-ran/wa-mcp-server.git
cd wa-mcp-server/packages/vscode-extension

# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Watch for changes
npm run watch
```

### Building the Extension

```bash
# Compile TypeScript
npm run compile

# Package the extension
npm run package

# The .vsix file will be created in the current directory
```

### Version Synchronization

The extension version is automatically synchronized with the MCP package version during packaging. You can also manually sync versions:

```bash
# Manually sync version with MCP package
npm run sync-version
```

### Project Scripts

- `npm run compile` - Compile TypeScript to JavaScript
- `npm run watch` - Watch mode for development
- `npm run lint` - Lint the source code
- `npm run package` - Build and package the extension (with automatic version sync)
- `npm run sync-version` - Manually sync version with MCP package

## 📚 Available MCP Tools

The Web Awesome MCP server provides the following tools:

| Tool | Description |
|------|-------------|
| `listComponents` | List all available Web Awesome components with descriptions |
| `generateComponentCode` | Generate HTML code for a component with custom properties |
| `getComponentDocs` | Retrieve detailed documentation for a specific component |
| `getUsageGuide` | Get comprehensive usage guide for Web Awesome |
| `themeCustomizer` | Generate CSS for custom theme variables |
| `listUtilities` | List all available utility classes |
| `getUtilityDocs` | Get documentation for a specific utility class |

## 🔒 Security

The MCP server includes comprehensive security features:

- **Input Validation** - All inputs validated using Zod schemas
- **XSS Protection** - Prevents script injection, JavaScript URLs, and event handlers
- **HTML Sanitization** - Attributes are properly escaped
- **Content Length Limits** - Prevents resource exhaustion attacks

## 🐛 Troubleshooting

### Extension Not Working

1. Ensure the MCP server is installed:
   ```bash
   npm install -g @sha-bang/wa-mcp
   # or use npx (no installation needed)
   npx @sha-bang/wa-mcp
   ```

2. Check VSCode Output panel for errors:
   - Open Output panel (⌘+Shift+U on macOS, Ctrl+Shift+U on Windows/Linux)
   - Select "MCP" from the dropdown

3. Verify configuration in VSCode settings:
   - Open Settings (⌘+, on macOS, Ctrl+, on Windows/Linux)
   - Search for "mcp.servers.wa-mcp"

### MCP Server Not Starting

- Check Node.js version: `node --version` (requires 16+)
- Verify package installation: `npm list -g @sha-bang/wa-mcp`
- Try running the server directly: `npx @sha-bang/wa-mcp`

### AI Assistant Not Seeing Tools

- Restart VSCode
- Reload the AI assistant extension
- Check MCP server configuration in assistant settings

## 📖 Related Documentation

- [Web Awesome Components](https://webawesome.com/)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [MCP Server Package](https://www.npmjs.com/package/@sha-bang/wa-mcp)
- [GitHub Repository](https://github.com/haja-ran/wa-mcp-server)

## 🤝 Contributing

Contributions are welcome! Please see the main repository's [CONTRIBUTING.md](../../CONTRIBUTING.md) for guidelines.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make changes and test thoroughly
4. Run linter: `npm run lint`
5. Commit using conventional commits: `git commit -m "feat: add new feature"`
6. Push and create a pull request

## 📄 License

ISC License - see [LICENSE](LICENSE) file for details.

## 🔗 Links

- **npm Package**: [@sha-bang/wa-mcp](https://www.npmjs.com/package/@sha-bang/wa-mcp)
- **GitHub**: [wa-mcp-server](https://github.com/haja-ran/wa-mcp-server)
- **Issues**: [Report a bug](https://github.com/haja-ran/wa-mcp-server/issues)
- **Web Awesome**: [webawesome.com](https://webawesome.com/)

## 🙏 Acknowledgments

- [Web Awesome](https://webawesome.com/) for the amazing component library
- [Model Context Protocol](https://modelcontextprotocol.io/) for the protocol specification
- [Anthropic](https://www.anthropic.com/) for Claude and MCP development

---

**Version**: 1.2.0  
**Publisher**: shabang  
**Minimum VSCode Version**: 1.74.0