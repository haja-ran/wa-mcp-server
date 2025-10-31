import { themeCustomizerTool } from '../themeCustomizer';

describe('themeCustomizerTool', () => {
  it('should generate CSS with provided variables', async () => {
    const result = await (themeCustomizerTool as any).handler({
      variables: { '--wa-color-brand': '#ff0000', '--wa-font-size-base': '16px' }
    });
    const content = result.content[0].text;
    expect(content).toContain(':root {');
    expect(content).toContain('--wa-color-brand: #ff0000;');
    expect(content).toContain('--wa-font-size-base: 16px;');
    expect(content).toContain('}');
  });

  it('should generate valid CSS format', async () => {
    const result = await (themeCustomizerTool as any).handler({
      variables: { '--test-var': 'value' }
    });
    const content = result.content[0].text;
    expect(content).toBe(':root {\n  --test-var: value;\n}\n');
  });
});