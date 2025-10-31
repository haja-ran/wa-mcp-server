wa-mcp-server/README.md
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

📖 **[Full Documentation](./packages/mcp/README.md)**

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 22+ (required for semantic-release)
- **npm** or **yarn**

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/haja-ran/wa-mcp-server.git
cd wa-mcp-server
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

## 🏗️ Project Structure

```
wa-mcp-server/
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
2. **Clone** your fork: `git clone https://github.com/YOUR_USERNAME/wa-mcp-server.git`
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
- [**GitHub Repository**](https://github.com/haja-ran/wa-mcp-server)