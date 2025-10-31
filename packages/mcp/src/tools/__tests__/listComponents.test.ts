import { listComponentsTool } from '../listComponents';

describe('listComponentsTool', () => {
  it('should return all components when no category is specified', async () => {
    const result = await (listComponentsTool as any).handler({});
    const content = JSON.parse(result.content[0].text);
    expect(content.length).toBeGreaterThan(0);
    expect(content[0]).toHaveProperty('tagName');
    expect(content[0]).toHaveProperty('name');
  });

  it('should filter components by category', async () => {
    const result = await (listComponentsTool as any).handler({ category: 'Actions' });
    const content = JSON.parse(result.content[0].text);
    content.forEach((comp: any) => {
      expect(comp.category.toLowerCase()).toContain('actions');
    });
  });
});