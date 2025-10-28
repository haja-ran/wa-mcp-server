import { generateComponentCodeTool } from '../generateComponentCode';

describe('generateComponentCodeTool', () => {
  it('should generate basic HTML for a valid component', async () => {
    const result = await (generateComponentCodeTool as any).handler({ tagName: 'wa-button' });
    const content = result.content[0].text;
    expect(content).toBe('<wa-button></wa-button>');
  });

  it('should include properties in the HTML', async () => {
    const result = await (generateComponentCodeTool as any).handler({
      tagName: 'wa-button',
      properties: { variant: 'primary', disabled: true }
    });
    const content = result.content[0].text;
    expect(content).toContain('variant="primary"');
    expect(content).toContain('disabled');
  });

  it('should include content in the HTML', async () => {
    const result = await (generateComponentCodeTool as any).handler({
      tagName: 'wa-button',
      content: 'Click me'
    });
    const content = result.content[0].text;
    expect(content).toBe('<wa-button>Click me</wa-button>');
  });

  it('should throw error for invalid component', async () => {
    await expect((generateComponentCodeTool as any).handler({ tagName: 'invalid' })).rejects.toThrow('Composant invalid non trouvé.');
  });
});