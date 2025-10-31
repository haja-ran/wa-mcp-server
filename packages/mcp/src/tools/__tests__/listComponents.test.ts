import { listComponentsTool } from '../listComponents'

interface Component {
  tagName: string
  name: string
  description: string
  category: string
}

interface ToolResult {
  content: {
    type: string
    text: string
  }[]
}

interface ToolWithHandler {
  name: string
  description: string
  inputSchema: {
    type: string
    properties: {
      category?: {
        type: string
        description: string
      }
    }
  }
  handler: (args: { category?: string }) => Promise<ToolResult>
}

describe('listComponentsTool', () => {
  it('should return all components when no category is specified', async () => {
    const tool = listComponentsTool as unknown as ToolWithHandler
    const result = await tool.handler({})
    const content: Component[] = JSON.parse(result.content[0].text)
    expect(content.length).toBeGreaterThan(0)
    expect(content[0]).toHaveProperty('tagName')
    expect(content[0]).toHaveProperty('name')
  })

  it('should filter components by category', async () => {
    const tool = listComponentsTool as unknown as ToolWithHandler
    const result = await tool.handler({ category: 'Actions' })
    const content: Component[] = JSON.parse(result.content[0].text)
    content.forEach((comp: Component) => {
      expect(comp.category.toLowerCase()).toContain('actions')
    })
  })
})
