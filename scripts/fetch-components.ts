import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { fetchComponentNames, getComponentDocUrl, getComponentTsUrl } from './config.js';

interface ComponentInfo {
  tagName: string;
  name: string;
  description: string;
  category: string;
  properties: Array<{
    name: string;
    type: string;
    description: string;
    default?: string;
  }>;
  events: Array<{
    name: string;
    description: string;
  }>;
  slots: Array<{
    name: string;
    description: string;
  }>;
  cssParts: Array<{
    name: string;
    description: string;
  }>;
}

async function fetchComponents(): Promise<ComponentInfo[]> {
  const components: ComponentInfo[] = [];

  // Retrieve dynamically the list of components from GitHub
  const componentNames = await fetchComponentNames();
  console.log(`Found ${componentNames.length} components:`, componentNames.join(', '));

  for (const name of componentNames) {
    try {
      const url = getComponentDocUrl(name);

      console.log('Fetching', url);

      const response = await fetch(url);
      let title = name.charAt(0).toUpperCase() + name.slice(1);
      let description = '';
      let category = 'Other';
      if (response.ok) {
        const content = await response.text();
        const parsed = matter(content);
        const data = parsed.data as any;
        title = data.title || title;
        description = data.description || '';
        category = data.category || 'Other';
      }

      // Fetch TS code
      const tsUrl = getComponentTsUrl(name);
      console.log('Fetching TS:', tsUrl);
      const tsResponse = await fetch(tsUrl);
      let properties: ComponentInfo['properties'] = [];
      let events: ComponentInfo['events'] = [];
      let slots: ComponentInfo['slots'] = [];
      let cssParts: ComponentInfo['cssParts'] = [];
      if (tsResponse.ok) {
        const tsContent = await tsResponse.text();
        properties = parseProperties(tsContent);
        events = parseEvents(tsContent);
        slots = parseSlots(tsContent);
        cssParts = parseCssParts(tsContent);
      }

      const component: ComponentInfo = {
        tagName: `wa-${name}`,
        name: title,
        description,
        category,
        properties,
        events,
        slots,
        cssParts,
      };

      components.push(component);
    } catch (error) {
      console.error(`Error fetching ${name}:`, error);
    }
  }

  return components;
}

function generateComponentsFile(components: ComponentInfo[]): string {
  const componentStrings = components.map(c => {
    const props = JSON.stringify(c.properties, null, 4).replace(/\n/g, '\n    ');
    const evts = JSON.stringify(c.events, null, 4).replace(/\n/g, '\n    ');
    const slts = JSON.stringify(c.slots, null, 4).replace(/\n/g, '\n    ');
    const css = JSON.stringify(c.cssParts, null, 4).replace(/\n/g, '\n    ');
    return `  {
    tagName: '${c.tagName}',
    name: '${c.name.replace(/'/g, "\\'")}',
    description: '${c.description.replace(/'/g, "\\'")}',
    category: '${c.category}',
    properties: ${props},
    events: ${evts},
    slots: ${slts},
    cssParts: ${css},
  }`;
  }).join(',\n');

  const interfaceStr = `export interface ComponentInfo {
  tagName: string;
  name: string;
  description: string;
  category: string;
  properties: Array<{
    name: string;
    type: string;
    description: string;
    default?: string;
  }>;
  events: Array<{
    name: string;
    description: string;
  }>;
  slots: Array<{
    name: string;
    description: string;
  }>;
  cssParts: Array<{
    name: string;
    description: string;
  }>;
}

export const components: ComponentInfo[] = [
${componentStrings}
];`;

  return `// Automatically generated Web Awesome component data
${interfaceStr}`;
}

function parseProperties(tsContent: string): ComponentInfo['properties'] {
  const lines = tsContent.split('\n');
  const properties: ComponentInfo['properties'] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('@property')) {
      // Find the comment above
      let commentLines: string[] = [];
      let j = i - 1;
      while (j >= 0) {
        const prevLine = lines[j].trim();
        if (prevLine.endsWith('*/')) {
          commentLines.unshift(lines[j]);
          j--;
          while (j >= 0) {
            const commentLine = lines[j].trim();
            if (commentLine.startsWith('/**')) {
              commentLines.unshift(lines[j]);
              j--;
              break;
            } else if (commentLine.startsWith('*')) {
              commentLines.unshift(lines[j]);
              j--;
            } else {
              break;
            }
          }
          break;
        }
        if (prevLine.startsWith('@')) break; // stop if another decorator
        j--;
      }
      // Extract description
      const description = commentLines
        .map(l => l.replace(/^\s*\*\s*/, '').replace(/^\s*\/\*\*?\s*/, '').replace(/\s*\*\/\s*$/, '').trim())
        .filter(l => l)
        .join(' ')
        .replace(/\s+/g, ' ');
      // Parse the @property line
      const propMatch = line.match(/@property\(\s*\{([^}]*)\}\s*\)\s+(\w+)(?::\s*([^=]+?))?(?:\s*=\s*(.+?))?\s*;/);
      if (propMatch) {
        const options: string = propMatch[1] as string;
        const name: string = propMatch[2] as string;
        const typeFromColon: string | null = propMatch[3] ? (propMatch[3] as string).trim() : null;
        const rawDefault: string | undefined = propMatch[4];
        let defaultVal: string | undefined = undefined;
        if (rawDefault) {
          defaultVal = (rawDefault as string).trim().replace(/;$/, '');
        }
        let type: string = 'string';
        if (typeFromColon) {
          type = typeFromColon;
        } else {
          if (options.includes('type: Boolean')) type = 'boolean';
          else if (options.includes('type: String')) type = 'string';
          else if (options.includes('type: Number')) type = 'number';
          else type = 'string'; // fallback
        }
        properties.push({
          name,
          type,
          description,
          default: defaultVal
        });
      }
    }
  }
  return properties;
}

function parseEvents(tsContent: string): ComponentInfo['events'] {
  // Search in JSDoc comments @event
  const eventRegex = /\*\s*@event\s+(\w+)\s*-\s*(.+)/g;
  const events: ComponentInfo['events'] = [];
  let match: RegExpExecArray | null;
  while (true) {
    match = eventRegex.exec(tsContent);
    if (match === null) break;
    const name = match[1];
    const description = match[2];
    events.push({ name, description });
  }
  return events;
}

function parseSlots(tsContent: string): ComponentInfo['slots'] {
  // Search in JSDoc comments @slot
  const slotRegex = /\*\s*@slot\s*(\w+)\s*-\s*(.+)/g;
  const slots: ComponentInfo['slots'] = [];
  let match: RegExpExecArray | null;
  while (true) {
    match = slotRegex.exec(tsContent);
    if (match === null) break;
    const name = match[1];
    const description = match[2];
    slots.push({ name, description });
  }
  return slots;
}

function parseCssParts(tsContent: string): ComponentInfo['cssParts'] {
  // Search in JSDoc comments @csspart
  const partRegex = /\*\s*@csspart\s*(\w+)\s*-\s*(.+)/g;
  const cssParts: ComponentInfo['cssParts'] = [];
  let match: RegExpExecArray | null;
  while (true) {
    match = partRegex.exec(tsContent);
    if (match === null) break;
    const name = match[1];
    const description = match[2];
    cssParts.push({ name, description });
  }
  return cssParts;
}

async function main() {
  console.log('Fetching components from Web Awesome documentation...');
  const components = await fetchComponents();
  console.log('Fetched ' + components.length + ' components');

  const content = generateComponentsFile(components);
  const filePath = path.join(process.cwd(), 'src', 'data', 'components.ts');
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Generated ' + filePath);
}

main().catch(console.error);
