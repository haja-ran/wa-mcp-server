# Web Awesome MCP Server

A Model Context Protocol (MCP) server for Web Awesome components, providing tools to explore, generate code, and customize UI components.

## Installation

```bash
npm install
```

## Building

```bash
npm run build
```

## Running Locally

```bash
npm start
```

The server will start on `http://localhost:3000` by default.

## Environment Variables

- `PORT` - Server port (default: 3000)

## Deployment

### Docker

Build and run with npm scripts:

```bash
npm run docker:build
npm run docker:run
```

Or manually:

```bash
docker build -t wa-mcp-server .
docker run -p 3000:3000 wa-mcp-server
```

### Cloud Platforms

#### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`
3. Configure environment variables in Vercel dashboard

#### Railway

1. Connect your repository to Railway
2. Set build command: `npm run build`
3. Set start command: `npm start`
4. Configure environment variables

#### Render

1. Connect your repository to Render
2. Set build command: `npm run build`
3. Set start command: `npm start`
4. Configure environment variables and port

### Systemd Service

Create `/etc/systemd/system/wa-mcp-server.service`:

```ini
[Unit]
Description=Web Awesome MCP Server
After=network.target

[Service]
Type=simple
User=your-user
WorkingDirectory=/path/to/wa-mcp-server
ExecStart=/usr/bin/node dist/index.js
Restart=always
Environment=PORT=3000

[Install]
WantedBy=multi-user.target
```

Enable and start:

```bash
sudo systemctl enable wa-mcp-server
sudo systemctl start wa-mcp-server
```

## API Endpoints

- `GET /sse` - Establishes SSE connection for MCP communication
- `POST /message?sessionId=<id>` - Sends MCP messages

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