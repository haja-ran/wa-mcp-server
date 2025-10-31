import http from 'node:http'
import { createApp } from '../index'

jest.setTimeout(10000)

// Mock the MCP SDK to avoid ESM import issues in Jest
jest.mock('@modelcontextprotocol/sdk/server/index.js', () => ({
  Server: class MockServer {
    constructor(info: any, capabilities: any) {
      this.info = info
      this.capabilities = capabilities
    }

    info: any
    capabilities: any
    setRequestHandler() {}
    connect() {}
  },
}))

jest.mock('@modelcontextprotocol/sdk/server/sse.js', () => ({
  SSEServerTransport: class MockTransport {
    constructor(endpoint: string, res: any) {
      this.endpoint = endpoint
      this.res = res
    }

    endpoint: string
    res: any
    sessionId = `mock-session-${Math.random().toString(36).substr(2, 9)}`
    start() {}
  },
}))

jest.mock('@modelcontextprotocol/sdk/types.js', () => ({
  CallToolRequestSchema: {},
  ListToolsRequestSchema: {},
  ListResourcesRequestSchema: {},
  ReadResourceRequestSchema: {},
}))

function httpPost(url: string, body: string, headers: Record<string, string> = {}) {
  return new Promise<{ status: number, bodyText: string, bodyJson?: any }>((resolve, reject) => {
    const parsed = new URL(url)
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
    }

    const req = http.request(opts, (res) => {
      const chunks: Buffer[] = []
      res.on('data', c => chunks.push(Buffer.from(c)))
      res.on('end', () => {
        const bodyText = Buffer.concat(chunks).toString('utf8')
        let bodyJson: any
        try {
          bodyJson = JSON.parse(bodyText)
        }
        catch {
          bodyJson = undefined
        }
        resolve({ status: res.statusCode ?? 0, bodyText, bodyJson })
      })
    })

    req.on('error', err => reject(err))
    req.write(body)
    req.end()
  })
}

describe('http-first handshake and message flow', () => {
  let server: http.Server
  let baseUrl: string

  beforeAll(async () => {
    const { app } = createApp()
    server = http.createServer(app)
    await new Promise<void>((resolve, reject) => {
      server.listen(0, () => resolve())
      server.on('error', reject)
    })
    const addr = server.address()
    if (!addr || typeof addr === 'string') {
      throw new Error('Failed to start test http server')
    }
    const port = addr.port
    baseUrl = `http://127.0.0.1:${port}`
  })

  afterAll(async () => {
    await new Promise<void>((resolve, reject) => {
      server.close(err => (err ? reject(err) : resolve()))
    })
  })

  it('performs http-first JSON-RPC initialize handshake and listTools call', async () => {
    // 1) Send initialize JSON-RPC handshake to POST /sse (http-first handshake)
    const initPayload = {
      jsonrpc: '2.0',
      id: 1,
      method: 'initialize',
      params: {
        protocolVersion: '2025-06-18',
        capabilities: {},
        clientInfo: { name: 'mcp-remote-test', version: '0.0.0' },
      },
    }

    const handshakeResp = await httpPost(`${baseUrl}/sse`, JSON.stringify(initPayload))
    expect(handshakeResp.status).toBe(200)
    expect(handshakeResp.bodyJson).toBeDefined()
    // When we receive a JSON-RPC response it should include jsonrpc/id/result
    expect(handshakeResp.bodyJson.jsonrpc).toBe('2.0')
    expect(handshakeResp.bodyJson.id).toBe(1)
    const result = handshakeResp.bodyJson.result
    expect(result).toBeDefined()
    expect(typeof result.sessionId).toBe('string')
    expect(typeof result.endpoint).toBe('string')
    expect(result.protocolVersion).toBe(initPayload.params.protocolVersion)

    // 2) Use the returned sessionId to POST a listTools JSON-RPC request to /sse?sessionId=...
    const sessionId: string = result.sessionId
    const listToolsPayload = {
      jsonrpc: '2.0',
      id: 2,
      method: 'listTools',
      params: {},
    }

    const postUrl = `${baseUrl}/sse?sessionId=${encodeURIComponent(sessionId)}`
    const listResp = await httpPost(postUrl, JSON.stringify(listToolsPayload))
    expect(listResp.status).toBe(200)
    expect(listResp.bodyJson).toBeDefined()
    expect(listResp.bodyJson.jsonrpc).toBe('2.0')
    expect(listResp.bodyJson.id).toBe(2)
    const listResult = listResp.bodyJson.result
    expect(listResult).toBeDefined()
    // listTools handler returns { tools: [...] }
    expect(Array.isArray(listResult.tools)).toBe(true)
    expect(listResult.tools.length).toBeGreaterThan(0)

    // Basic shape checks for the first tool entry
    const firstTool = listResult.tools[0]
    expect(firstTool).toBeDefined()
    expect(typeof firstTool.name === 'string' || typeof firstTool.id === 'string').toBe(true)
  })
})
