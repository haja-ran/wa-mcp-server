import { validateInput, generateComponentCodeSchema, getComponentDocsSchema, themeCustomizerSchema, sanitizeHtmlAttribute, sanitizeProperties } from '../validation.js';

describe('Validation', () => {
  describe('generateComponentCodeSchema', () => {
    it('should validate valid component code input', () => {
      const validInput = {
        tagName: 'wa-button',
        properties: { variant: 'primary', disabled: true },
        content: 'Click me'
      };
      expect(() => validateInput(generateComponentCodeSchema, validInput)).not.toThrow();
    });

    it('should reject invalid tag name', () => {
      const invalidInput = { tagName: 'invalid-component' };
      expect(() => validateInput(generateComponentCodeSchema, invalidInput)).toThrow('Validation failed');
    });

    it('should reject XSS attempts in content', () => {
      const xssInput = { tagName: 'wa-button', content: '<script>alert("xss")</script>' };
      expect(() => validateInput(generateComponentCodeSchema, xssInput)).toThrow('Validation failed');
    });

    it('should reject JavaScript URLs in content', () => {
      const jsUrlInput = { tagName: 'wa-button', content: 'javascript:alert("xss")' };
      expect(() => validateInput(generateComponentCodeSchema, jsUrlInput)).toThrow('Validation failed');
    });

    it('should reject event handlers in content', () => {
      const eventHandlerInput = { tagName: 'wa-button', content: '<div onclick="alert(\'xss\')">test</div>' };
      expect(() => validateInput(generateComponentCodeSchema, eventHandlerInput)).toThrow('Validation failed');
    });
  });

  describe('getComponentDocsSchema', () => {
    it('should validate valid component docs input', () => {
      const validInput = { tagName: 'wa-button' };
      expect(() => validateInput(getComponentDocsSchema, validInput)).not.toThrow();
    });

    it('should reject invalid tag name', () => {
      const invalidInput = { tagName: 'not-a-wa-component' };
      expect(() => validateInput(getComponentDocsSchema, invalidInput)).toThrow('Validation failed');
    });
  });

  describe('themeCustomizerSchema', () => {
    it('should validate valid theme customizer input', () => {
      const validInput = {
        variables: {
          '--wa-color-brand': '#ff0000',
          '--wa-color-primary': '#0000ff'
        }
      };
      expect(() => validateInput(themeCustomizerSchema, validInput)).not.toThrow();
    });

    it('should reject invalid CSS variable names', () => {
      const invalidInput = {
        variables: {
          'invalid-var': '#ff0000'
        }
      };
      expect(() => validateInput(themeCustomizerSchema, invalidInput)).toThrow('Validation failed');
    });
  });

  describe('sanitizeHtmlAttribute', () => {
    it('should escape HTML entities', () => {
      expect(sanitizeHtmlAttribute('<script>')).toBe('&lt;script&gt;');
      expect(sanitizeHtmlAttribute('"test"')).toBe('&quot;test&quot;');
      expect(sanitizeHtmlAttribute("'test'")).toBe('&#x27;test&#x27;');
      expect(sanitizeHtmlAttribute('&')).toBe('&amp;');
    });
  });

  describe('sanitizeProperties', () => {
    it('should sanitize string values in properties', () => {
      const input = {
        title: '<script>alert("xss")</script>',
        variant: 'primary',
        disabled: true,
        count: 42
      };
      const result = sanitizeProperties(input);
      expect(result.title).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
      expect(result.variant).toBe('primary');
      expect(result.disabled).toBe(true);
      expect(result.count).toBe(42);
    });
  });
});