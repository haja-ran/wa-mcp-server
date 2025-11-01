import { z, ZodIssue } from 'zod';

// Common validation schemas
export const tagNameSchema = z.string()
  .regex(/^wa-[a-z-]+$/, 'Tag name must be a valid Web Awesome component (e.g., wa-button)')
  .min(1)
  .max(100);

export const safeStringSchema = z.string()
  .max(10000, 'Content too long')
  .refine(str => !/<script/i.test(str), 'Script tags not allowed')
  .refine(str => !/javascript:/i.test(str), 'JavaScript URLs not allowed')
  .refine(str => !/on\w+\s*=/i.test(str), 'Event handlers not allowed');

export const propertiesSchema = z.record(
  z.string().min(1).max(100),
  z.union([z.string(), z.number(), z.boolean()])
).optional();

export const contentSchema = safeStringSchema.optional();

// Tool-specific validation schemas
export const generateComponentCodeSchema = z.object({
  tagName: tagNameSchema,
  properties: propertiesSchema,
  content: contentSchema,
});

export const getComponentDocsSchema = z.object({
  tagName: tagNameSchema,
});

export const getUtilityDocsSchema = z.object({
  className: z.string()
    .regex(/^wa-[a-z-]+$/, 'Class name must be a valid Web Awesome utility (e.g., wa-text-primary)')
    .min(1)
    .max(100),
});

export const themeCustomizerSchema = z.object({
  variables: z.record(
    z.string().regex(/^--[a-z-]+$/),
    z.string().max(100)
  ),
});

export const listComponentsSchema = z.object({
  category: z.string().optional(),
});

export const listUtilitiesSchema = z.object({
  category: z.string().optional(),
});

export const getUsageGuideSchema = z.object({});

// Validation helper function
export function validateInput<T>(schema: z.ZodSchema<T>, input: unknown): T {
  try {
    return schema.parse(input);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.issues.map((err: ZodIssue) => `${err.path.join('.')}: ${err.message}`).join(', ');
      throw new Error(`Validation failed: ${errorMessages}`);
    }
    throw error;
  }
}

// Sanitization helpers
export function sanitizeHtmlAttribute(value: string): string {
  return value
    .replace(/[<>'"&]/g, (char) => {
      const entityMap: Record<string, string> = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '&': '&amp;'
      };
      return entityMap[char] || char;
    });
}

export function sanitizeProperties(properties: Record<string, any>): Record<string, any> {
  const sanitized: Record<string, any> = {};

  for (const [key, value] of Object.entries(properties)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeHtmlAttribute(value);
    } else {
      sanitized[key] = value;
    }
  }

  return sanitized;
}