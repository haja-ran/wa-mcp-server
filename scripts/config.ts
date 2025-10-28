// Configuration pour les URLs des composants Web Awesome
export const GITHUB_BASE_URL = 'https://raw.githubusercontent.com/shoelace-style/webawesome/next/packages/webawesome';

export const GITHUB_API_BASE_URL = 'https://api.github.com/repos/shoelace-style/webawesome';

export const getComponentDocUrl = (name: string): string =>
  `${GITHUB_BASE_URL}/docs/docs/components/${name}.md`;

export const getComponentTsUrl = (name: string): string =>
  `${GITHUB_BASE_URL}/src/components/${name}/${name}.ts`;

export const getComponentsListUrl = (): string =>
  `${GITHUB_API_BASE_URL}/contents/packages/webawesome/src/components?ref=next`;

export interface GitHubItem {
  name: string;
  type: 'file' | 'dir';
  path: string;
}

export async function fetchComponentNames(): Promise<string[]> {
  try {
    const response = await fetch(getComponentsListUrl());
    if (!response.ok) {
      throw new Error(`Failed to fetch components list: ${response.status}`);
    }
    const items: GitHubItem[] = await response.json();
    return items
      .filter(item => item.type === 'dir')
      .map(item => item.name);
  } catch (error) {
    console.error('Error fetching component names:', error);
    // Fallback to hardcoded list if API fails
    return [
      'button', 'input', 'card', 'icon', 'alert', 'badge', 'breadcrumb', 'checkbox', 'dialog', 'divider', 'dropdown', 'menu', 'menu-item', 'progress-bar', 'radio', 'range', 'select', 'switch', 'tab-group', 'tab', 'tab-panel', 'textarea', 'tooltip', 'avatar'
    ];
  }
}