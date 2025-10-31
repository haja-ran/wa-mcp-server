import { getComponentDocsTool } from '../getComponentDocs';

describe('getComponentDocsTool', () => {
  it('should return documentation for a valid component', async () => {
    const result = await (getComponentDocsTool as any).handler({ tagName: 'wa-button' });
    const content = JSON.parse(result.content[0].text);
    expect(content.tagName).toBe('wa-button');
    expect(content.name).toBe('Button');
    expect(content.properties).toBeDefined();
  });

  it('should throw error for invalid component', async () => {
    await expect((getComponentDocsTool as any).handler({ tagName: 'invalid' })).rejects.toThrow('Component invalid not found.');
  });
});