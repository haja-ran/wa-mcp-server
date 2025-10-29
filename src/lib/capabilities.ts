/**
 * Helpers for building dynamic MCP capabilities payloads (tools & resources).
 *
 * These functions are intentionally small, pure, and defensive:
 * - They don't perform any I/O or dynamic imports.
 * - They accept the canonical inputs (tool objects, component/utility lists).
 * - They return plain JSON-serializable objects suitable for inclusion in handshake
 *   responses or server capabilities.
 *
 * The goal is to centralize capability shaping logic so the server code remains
 * readable and testable (Single Responsibility, Open/Closed).
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

export type ToolDefinition = {
  name: string;
  description?: string | null;
  inputSchema?: any;
};

export type ResourceDefinition = {
  uri: string;
  name: string;
  description?: string | null;
  mimeType?: string | null;
};

export type CapabilitiesPayload = {
  tools: Record<string, ToolDefinition>;
  resources: Record<string, ResourceDefinition>;
};

export type HandshakeResult = {
  sessionId: string;
  endpoint: string;
  protocolVersion: string;
  capabilities: CapabilitiesPayload;
  serverInfo: {
    name: string;
    version: string;
  };
};

/**
 * Safely extracts a tool's public representation.
 * - Ensures a stable shape even if the original tool object is missing fields.
 */
function normalizeTool(tool: any): ToolDefinition | null {
  if (!tool || typeof tool !== 'object') return null;
  const name = typeof tool.name === 'string' ? tool.name : undefined;
  if (!name) return null;

  return {
    name,
    description: tool.description ?? null,
    // inputSchema may be any JSON-schema-like object; copy as-is for now.
    // Consumers should treat this as opaque and not mutate it.
    inputSchema: tool.inputSchema ?? {},
  };
}

/**
 * Build a lookup of tools keyed by tool.name.
 * Accepts an arbitrary array of tool-like objects.
 */
export function buildToolDefinitions(tools: any[] | undefined | null): Record<string, ToolDefinition> {
  const out: Record<string, ToolDefinition> = {};
  if (!Array.isArray(tools)) return out;

  for (const t of tools) {
    const normalized = normalizeTool(t);
    if (!normalized) continue;
    // Make sure keys are deterministic: use the tool name as-is.
    out[normalized.name] = normalized;
  }

  return out;
}

/**
 * Build resource definitions from components and utilities arrays.
 * Expects each component to have at least `tagName`, `name`, `description`.
 * Expects each utility to have at least `className`, `name`, `description`.
 *
 * Returns a record keyed by URI (wa://components/<tag> or wa://utilities/<class>).
 */
export function buildResourceDefinitions(
  components: any[] | undefined | null,
  utilities: any[] | undefined | null
): Record<string, ResourceDefinition> {
  const out: Record<string, ResourceDefinition> = {};

  if (Array.isArray(components)) {
    for (const c of components) {
      try {
        const tagName = String(c?.tagName ?? '').trim();
        if (!tagName) continue;
        const uri = `wa://components/${tagName}`;
        out[uri] = {
          uri,
          name: c?.name ?? `Component ${tagName}`,
          description: c?.description ?? null,
          mimeType: 'application/json',
        };
      } catch {
        // ignore malformed entries
      }
    }
  }

  if (Array.isArray(utilities)) {
    for (const u of utilities) {
      try {
        const className = String(u?.className ?? '').trim();
        if (!className) continue;
        const uri = `wa://utilities/${className}`;
        out[uri] = {
          uri,
          name: u?.name ?? `Utility ${className}`,
          description: u?.description ?? null,
          mimeType: 'application/json',
        };
      } catch {
        // ignore malformed entries
      }
    }
  }

  return out;
}

/**
 * Build the full capabilities payload (tools + resources).
 * This is a small convenience wrapper that delegates to the specific builders.
 */
export function buildCapabilities(
  tools: any[] | undefined | null,
  components: any[] | undefined | null,
  utilities: any[] | undefined | null
): CapabilitiesPayload {
  const toolsMap = buildToolDefinitions(tools);
  const resourcesMap = buildResourceDefinitions(components, utilities);
  return {
    tools: toolsMap,
    resources: resourcesMap,
  };
}

/**
 * Build a handshake result object (the server's InitializeResult).
 *
 * - sessionId and endpoint are required (created by caller).
 * - protocolVersion will default to '1' if not provided.
 * - tools/components/utilities are optional and used to dynamically populate capabilities.
 *
 * This function returns a POJO that can be JSON-serialized and returned directly
 * in a JSON-RPC response body.
 */
export function buildHandshakeResult(opts: {
  sessionId: string;
  endpoint: string;
  protocolVersion?: string | undefined | null;
  tools?: any[] | undefined | null;
  components?: any[] | undefined | null;
  utilities?: any[] | undefined | null;
  serverName?: string;
  serverVersion?: string;
}): HandshakeResult {
  if (!opts || typeof opts !== 'object') {
    throw new TypeError('opts is required');
  }
  const sessionId = String(opts.sessionId ?? '').trim();
  const endpoint = String(opts.endpoint ?? '').trim();
  if (!sessionId || !endpoint) {
    throw new TypeError('sessionId and endpoint are required');
  }

  const protocolVersion = String(opts.protocolVersion ?? '1');

  const capabilities = buildCapabilities(opts.tools ?? [], opts.components ?? [], opts.utilities ?? []);

  return {
    sessionId,
    endpoint,
    protocolVersion,
    capabilities,
    serverInfo: {
      name: opts.serverName ?? 'wa-mcp-server',
      version: opts.serverVersion ?? '1.0.0',
    },
  };
}

/**
 * Utility: Convert capabilities payload into the compact "result" shape that some clients expect.
 * Historically some clients expect { jsonrpc: '2.0', id, result: { ... } } where result contains the fields
 * protocolVersion, capabilities, serverInfo. This helper returns the inner result object.
 */
export function buildHandshakeResultInner(opts: Parameters<typeof buildHandshakeResult>[0]) {
  const r = buildHandshakeResult(opts);
  const { sessionId, endpoint, protocolVersion, capabilities, serverInfo } = r;
  return {
    sessionId,
    endpoint,
    protocolVersion,
    capabilities,
    serverInfo,
  };
}