// wa-mcp-server/src/index.ts
import { createApp, setReady } from './server.js';

//
// Start the server when this module is executed directly (i.e. not under tests).
// This block is at module scope (outside createApp) so tests can import createApp
// without starting a real HTTP listener.
if (process.env.NODE_ENV !== 'test') {
  (async () => {
    try {
      const { app } = createApp();
      const port = process.env.PORT || 3000;
      app.listen(port, () => {
        setReady(true);
        console.error(`Web Awesome MCP Server listening on port ${port}`);
      });
    } catch (error) {
      console.error('Failed to start server:', error);
      process.exit(1);
    }
  })();
}

// Export createApp() above provides an app + servers map that tests can import,
// start HTTP servers on ephemeral ports, and perform handshake + message flows.
export { createApp };