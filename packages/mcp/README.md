# Web Awesome MCP Server

A local Model Context Protocol (MCP) server for Web Awesome components, providing tools to explore, generate code, and customize UI components.

## Installation

```bash
npm install
```

## Building

```bash
npm run build
```

## Testing

```bash
npm test
```

## Running

For development:

```bash
npm run dev
```

For production:

```bash
npm start
```

The server runs locally using stdio transport for MCP communication.

## Using as an Executable

Once published, you can run the server directly using npx:

```bash
npx @sha-bang/wa-mcp
```

This will start the MCP server using stdio transport.

## Releases

This project is part of a monorepo and uses [semantic-release](https://github.com/semantic-release/semantic-release) for automated versioning and publishing of the `@sha-bang/wa-mcp` package. Releases are triggered automatically when changes are pushed to the main branch.

### Commit Message Format

To trigger a release, use conventional commit messages:

- `fix: ...` or `perf: ...` for patch releases
- `feat: ...` for minor releases
- `BREAKING CHANGE: ...` for major releases

## Available Tools

### listComponents
Lists all available Web Awesome components.

**Parameters:**
- `category` (optional): Filter by category

### generateComponentCode
Generates HTML code for a specific component.

**Parameters:**
- `tagName` (required): Component tag name (e.g., `wa-button`)
- `properties` (optional): Component properties object
- `content` (optional): Default slot content

### getComponentDocs
Retrieves detailed documentation for a component.

**Parameters:**
- `tagName` (required): Component tag name

### themeCustomizer
Generates CSS for theme customization.

**Parameters:**
- `variables` (required): CSS variables object (e.g., `{ "--wa-color-brand": "#ff0000" }`)

### listUtilities
Lists all available Web Awesome utilities.

### getUtilityDocs
Retrieves documentation for a utility class.

**Parameters:**
- `className` (required): Utility class name

## MCP Resources

The server provides MCP resources for component and utility data:

- `wa://components/<tagName>` - Component JSON data
- `wa://utilities/<className>` - Utility JSON data

## License

MIT