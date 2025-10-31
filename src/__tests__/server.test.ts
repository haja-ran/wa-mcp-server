import http from 'node:http';

function httpGet(url: string) {
  return new Promise<{ status: number, bodyText: string, bodyJson?: any }>((resolve, reject) => {
    const parsed = new URL(url);
    const opts: http.RequestOptions = {
      hostname: parsed.hostname,
      port: parsed.port,
      path: parsed.pathname + parsed.search,
      method: 'GET',
    };

    const req = http.request(opts, (res) => {
      const chunks: Buffer[] = [];
      res.on('data', c => chunks.push(Buffer.from(c)));
      res.on('end', () => {
        const bodyText = Buffer.concat(chunks).toString('utf8');
        let bodyJson: any;
        try {
          bodyJson = JSON.parse(bodyText);
        } catch {
          bodyJson = undefined;
        }
        resolve({ status: res.statusCode ?? 0, bodyText, bodyJson });
      });
    });

    req.on('error', (err) => reject(err));
    req.end();
  });
}

function httpPost(url: string, body: string, headers: Record<string, string> = {}) {
  return new Promise<{ status: number, bodyText: string, bodyJson?: any }>((resolve, reject) => {
    const parsed = new URL(url);
    const opts: http.RequestOptions = {
      hostname: parsed.hostname,
      port: parsed.port,
      path: parsed.pathname + parsed.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body, 'utf8'),
        ...headers,
      },
    };

    const req = http.request(opts, (res) => {
      const chunks: Buffer[] = [];
      res.on('data', c => chunks.push(Buffer.from(c)));
      res.on('end', () => {
        const bodyText = Buffer.concat(chunks).toString('utf8');
        let bodyJson: any;
        try {
          bodyJson = JSON.parse(bodyText);
        } catch {
          bodyJson = undefined;
        }
        resolve({ status: res.statusCode ?? 0, bodyText, bodyJson });
      });
    });

    req.on('error', err => reject(err));
    req.write(body);
    req.end();
  });
}

// Mock the MCP SDK to avoid ESM import issues in Jest
jest.mock('@modelcontextprotocol/sdk/server/index.js', () => ({
  Server: class MockServer {
    info: any;
    capabilities: any;
    constructor(info: any, capabilities: any) {
      this.info = info;
      this.capabilities = capabilities;
    }
    setRequestHandler() {}
    connect() {}
  },
}));

jest.mock('@modelcontextprotocol/sdk/server/sse.js', () => ({
  SSEServerTransport: class MockTransport {
    endpoint: string;
    res: any;
    sessionId: string;
    constructor(endpoint: string, res: any) {
      this.endpoint = endpoint;
      this.res = res;
      this.sessionId = `mock-session-${Math.random().toString(36).substr(2, 9)}`;
    }
    start() {}
  },
}));

jest.mock('@modelcontextprotocol/sdk/types.js', () => ({
  CallToolRequestSchema: {},
  ListToolsRequestSchema: {},
  ListResourcesRequestSchema: {},
  ReadResourceRequestSchema: {},
}));

import { createApp, ready, setReady } from '../server.js';

describe('server', () => {
  let server: http.Server;
  let baseUrl: string;

  beforeEach(async () => {
    setReady(false);
    const { app } = createApp();
    server = http.createServer(app);
    await new Promise<void>((resolve, reject) => {
      server.listen(0, () => resolve());
      server.on('error', reject);
    });
    const addr = server.address();
    if (!addr || typeof addr === 'string') {
      throw new Error('Failed to start test http server');
    }
    const port = addr.port;
    baseUrl = `http://127.0.0.1:${port}`;
  });

  afterEach(async () => {
    await new Promise<void>((resolve, reject) => {
      server.close(err => (err ? reject(err) : resolve()));
    });
  });

  describe('createApp', () => {
    it('returns an object with app and servers', () => {
      const result = createApp();

      expect(result).toHaveProperty('app');
      expect(result).toHaveProperty('servers');
      expect(result.servers).toBeInstanceOf(Map);
      expect(typeof result.app).toBe('function'); // Express app
    });

    it('app has health endpoint', async () => {
      const response = await httpGet(`${baseUrl}/health`);

      expect(response.status).toBe(503); // Since ready is false
      expect(response.bodyJson).toHaveProperty('status', 'starting');
      expect(response.bodyJson).toHaveProperty('ready', false);
      expect(response.bodyJson).toHaveProperty('uptimeMs');
      expect(response.bodyJson).toHaveProperty('connections', 0);
    });

    it('health endpoint returns ok when ready', async () => {
      setReady(true);
      const response = await httpGet(`${baseUrl}/health`);

      expect(response.status).toBe(200);
      expect(response.bodyJson).toHaveProperty('status', 'ok');
      expect(response.bodyJson).toHaveProperty('ready', true);
    });



    it('app has POST /sse endpoint', async () => {
      const response = await httpPost(`${baseUrl}/sse`, JSON.stringify({ method: 'initialize', id: 1 }));

      // Should handle the request
      expect([200, 500]).toContain(response.status);
    });

    it('app has POST /message endpoint', async () => {
      const response = await httpPost(`${baseUrl}/message?sessionId=test`, JSON.stringify({}));

      expect(response.status).toBe(404); // No server for sessionId
    });
  });

  describe('ready state', () => {
    it('ready is initially false', () => {
      expect(ready).toBe(false);
    });

    it('setReady sets ready to true', () => {
      setReady(true);
      expect(ready).toBe(true);
    });

    it('setReady sets ready to false', () => {
      setReady(true);
      setReady(false);
      expect(ready).toBe(false);
    });
  });
});

