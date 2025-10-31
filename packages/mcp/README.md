# Web Awesome MCP Server

A local **Model Context Protocol (MCP)** server that enables seamless interaction with **Web Awesome** components.
This server provides tools to **explore**, **generate**, and **customize** UI components, making it easier for LLMs and developers to integrate Web Awesome in their workflows.

---

## 🚀 Overview

The Web Awesome MCP Server exposes an MCP interface for component and utility data, allowing you to:

* List and explore available Web Awesome components
* Generate ready-to-use HTML code for components
* Retrieve detailed documentation for components and utilities
* Customize themes with generated CSS variables

---

## 🧩 Getting Started

### Run the Server

The MCP server runs locally using **stdio transport**. You can launch it directly using `npx`:

```bash
npx @sha-bang/wa-mcp
```

This command starts the MCP server and makes it available for local LLM integrations.

---

## ⚙️ Installation & Setup

### Install Dependencies

```bash
npm install
```

### Build the Project

```bash
npm run build
```

### Run Tests

```bash
npm test
```

---

## 🧠 Development & Production

### Development Mode

Runs the server with live reloading for faster iteration:

```bash
npm run dev
```

### Production Mode

Builds and launches the production-ready MCP server:

```bash
npm start
```

---

## 📦 Releases & Versioning

This project is part of a **monorepo** and uses [semantic-release](https://github.com/semantic-release/semantic-release) for automated versioning and publishing of the `@sha-bang/wa-mcp` package.
Releases are automatically triggered when changes are merged into the `main` branch.

### Commit Message Guidelines

Use **Conventional Commits** to ensure proper semantic release automation:

| Type               | Description                           | Release Type |
| ------------------ | ------------------------------------- | ------------ |
| `fix:` or `perf:`  | Bug fixes or performance improvements | **Patch**    |
| `feat:`            | New features                          | **Minor**    |
| `BREAKING CHANGE:` | Backward-incompatible updates         | **Major**    |

---

## 🧰 Available Tools

### `listComponents`

Lists all available Web Awesome components.

**Parameters:**

* `category` *(optional)* — Filter components by category.

---

### `generateComponentCode`

Generates HTML code for a specified component.

**Parameters:**

* `tagName` *(required)* — Component tag name (e.g., `wa-button`)
* `properties` *(optional)* — Object defining component properties
* `content` *(optional)* — Default slot content

---

### `getComponentDocs`

Retrieves detailed documentation for a given component.

**Parameters:**

* `tagName` *(required)* — Component tag name

---

### `themeCustomizer`

Generates CSS for theme customization using provided variables.

**Parameters:**

* `variables` *(required)* — CSS variables object
  Example:

  ```json
  { "--wa-color-brand": "#ff0000" }
  ```

---

### `listUtilities`

Lists all available Web Awesome utility classes.

---

### `getUtilityDocs`

Retrieves documentation for a specific utility class.

**Parameters:**

* `className` *(required)* — Utility class name

---

## 🌐 MCP Resources

The server exposes the following MCP resource endpoints:

* **Components:** `wa://components/<tagName>` — Returns component JSON data
* **Utilities:** `wa://utilities/<className>` — Returns utility JSON data

---

## 🤝 Contributing

Contributions are welcome and greatly appreciated!
Whether you want to fix a bug, improve documentation, or add new functionality, your input helps make Web Awesome MCP Server better for everyone.

### How to Contribute

1. **Fork** the repository.
2. **Create a new branch** for your feature or fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit** your changes using [Conventional Commit](https://www.conventionalcommits.org/) messages.
4. **Push** your branch and open a **pull request**.

Before submitting, please ensure:

* All tests pass (`npm test`).
* The code follows project conventions.
* Documentation is updated where relevant.

---

## 📄 License

This project is licensed under the **MIT License**.