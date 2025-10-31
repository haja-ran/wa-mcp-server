# Web Awesome MCP Server Monorepo

A **monorepo** containing tools and servers for integrating **Web Awesome** components with AI assistants and development workflows through the **Model Context Protocol (MCP)**.

---

## 📦 Packages

### [@sha-bang/wa-mcp](./packages/mcp/) - MCP Server
[![npm version](https://badge.fury.io/js/%40sha-bang%2Fwa-mcp.svg)](https://badge.fury.io/js/%40sha-bang%2Fwa-mcp)

The core **Model Context Protocol (MCP) server** that provides AI assistants with access to Web Awesome components and utilities.

**Key Features:**
- 🔍 **Component Discovery** - List and explore Web Awesome components
- 🛠️ **Code Generation** - Generate ready-to-use HTML for components
- 📚 **Documentation Access** - Retrieve detailed component docs
- 🎨 **Theme Customization** - Generate CSS variables for theming
- 🧰 **Utility Classes** - Access Web Awesome utility documentation

**Quick Start:**
```bash
npx @sha-bang/wa-mcp
```

https://github.com/user-attachments/assets/968ccaab-7656-4d43-b1eb-32d16dc3e101

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 22+ (required for semantic-release)
- **npm** or **yarn**

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/haja-ran/wa-mcp.git .
cd wa-mcp
npm install
```

### Development

```bash
# Run tests across all packages
npm test

# Build all packages
npm run build

# Start development server for MCP package
npm run dev
```

---

## 🔌 Using with Editors

You can use this MCP server with editors that support the Model Context Protocol. Below are setup guides for VS Code and Zed.

### VS Code Setup (Cline Extension)

You can use this MCP server with VS Code through AI assistant extensions that support the Model Context Protocol. Here's how to set it up with **Cline** (formerly Claude Dev):

#### Setup with Cline Extension

1. **Install Cline Extension**
   - Open VS Code
   - Go to Extensions (⌘+Shift+X on macOS, Ctrl+Shift+X on Windows/Linux)
   - Search for "Cline" and install it

2. **Configure MCP Server**
   - Open Cline settings (click the Cline icon in the sidebar, then the settings gear icon)
   - Navigate to the "MCP Servers" section
   - Click "Edit Config" to open your MCP settings file

3. **Add Web Awesome MCP Server**

   Add the following configuration to your MCP settings file:

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

4. **Restart Cline**
   - Close and reopen the Cline panel, or reload VS Code
   - Cline will now have access to Web Awesome components

#### Using the Server

Once configured, you can ask Cline to:

- **List components**: "Show me all Web Awesome button components"
- **Generate code**: "Create a Web Awesome button with variant='brand' and size='large'"
- **Get documentation**: "What properties does the wa-alert component support?"
- **Customize themes**: "Generate CSS for a dark theme with brand color #3b82f6"
- **Explore utilities**: "What utility classes are available for spacing?"

#### Example Conversation

```
You: "Create a Web Awesome card component with a header and button"

Cline: *Uses the generateComponentCode tool to create:*
<wa-card>
  <div slot="header">Card Title</div>
  <p>Card content goes here</p>
  <wa-button slot="footer" variant="brand">Action</wa-button>
</wa-card>
```

#### Other Compatible VS Code Extensions

This MCP server should work with any VS Code extension that supports the Model Context Protocol, including:
- **Cline** (recommended)
- Other MCP-compatible AI assistants

---

### Zed Editor Setup

Zed has built-in support for MCP servers through its AI assistant panel. Here's how to configure it:

#### 1. Install Zed Editor

If you haven't already, download Zed from [zed.dev](https://zed.dev/)

#### 2. Configure MCP Server

Open your Zed settings file:
- macOS/Linux: `~/.config/zed/settings.json`
- Or use: **Zed > Settings > Open Settings** (⌘+,)

#### 3. Add Web Awesome MCP Server

Add the following configuration to your `settings.json`:

```json
{
  "context_servers": {
    "web-awesome": {
      "command": "npx",
      "args": ["@sha-bang/wa-mcp"]
    }
  }
}
```

Alternatively, you can specify a local path if you have the package installed globally:

```json
{
  "context_servers": {
    "web-awesome": {
      "command": "node",
      "args": ["/path/to/wa-mcp-server/packages/mcp/dist/index.js"]
    }
  }
}
```

#### 4. Restart Zed

Close and reopen Zed for the changes to take effect. The Web Awesome MCP server will now be available in the AI assistant panel.

#### Using with Zed Assistant

Once configured, you can use Zed's AI assistant to:

- Ask about Web Awesome components
- Generate component code directly in your files
- Get documentation without leaving the editor
- Customize themes with CSS variables

#### Example Usage

Open the AI assistant panel (⌘+Shift+A on macOS) and try:

```
"Create a Web Awesome button component with a brand variant"
"Show me the properties available for wa-dialog"
"Generate a responsive card layout using Web Awesome components"
```

The assistant will use the MCP server to provide accurate, up-to-date information about Web Awesome components.

---

## 🏗️ Project Structure

```
wa-mcp/
├── packages/
│   └── mcp/                    # MCP Server package
│       ├── src/                # Source code
│       ├── dist/               # Built output
│       ├── package.json        # Package configuration
│       └── README.md           # Package documentation
├── .github/
│   └── workflows/              # GitHub Actions CI/CD
├── package.json                # Monorepo root configuration
└── README.md                   # This file
```

---

## 📋 Development Workflow

### Commit Convention

This project uses **Conventional Commits** for automated versioning:

```bash
# Feature commits
git commit -m "feat: add new component tool"

# Bug fixes
git commit -m "fix: resolve memory leak in server"

# Breaking changes
git commit -m "feat: redesign API
BREAKING CHANGE: remove deprecated methods"
```

### Release Process

Releases are **automatically managed** by [semantic-release](https://github.com/semantic-release/semantic-release):

- **Patch releases** (`1.0.0` → `1.0.1`) for bug fixes
- **Minor releases** (`1.0.0` → `1.1.0`) for new features
- **Major releases** (`1.0.0` → `2.0.0`) for breaking changes

Pushing to `main` triggers automated releases via GitHub Actions.

---

## 🤝 Contributing

We welcome contributions! Please see the [MCP Server README](./packages/mcp/README.md) for detailed contribution guidelines.

### Quick Setup for Contributors

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/YOUR_USERNAME/wa-mcp.git`
3. **Create a feature branch**: `git checkout -b feature/your-feature`
4. **Make changes** and ensure tests pass: `npm test`
5. **Commit** using conventional format: `git commit -m "feat: your feature description"`
6. **Push** and create a pull request

---

## 📄 License

This project is licensed under the **MIT License**. See individual package licenses for details.

---

## 🔗 Links

- [**Web Awesome**](https://webawesome.com/) - The component library this server integrates with
- [**Model Context Protocol**](https://modelcontextprotocol.io/) - The protocol powering AI integrations
- [**Semantic Release**](https://github.com/semantic-release/semantic-release) - Automated versioning
- [**GitHub Repository**](https://github.com/haja-ran/wa-mcp)
