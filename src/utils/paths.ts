const configuredBase = import.meta.env.BASE_URL || '/';
const base = configuredBase === '/' ? '/' : `/${configuredBase.replace(/^\/+|\/+$/g, '')}/`;
const protocolPattern = /^[a-z][a-z\d+.-]*:/i;

/** Prefixes a local route or public asset with Astro's configured base path. */
export const withBase = (path: string): string => {
  if (!path || path.startsWith('#') || path.startsWith('//') || protocolPattern.test(path)) return path;
  if (path === base || path.startsWith(base)) return path;
  return `${base}${path.replace(/^\/+/, '')}`;
};

/** Creates the public GitHub Pages URL for canonical, sitemap and social metadata. */
export const absoluteUrl = (path = '/'): string => {
  const relativePath = path.replace(/^\/+/, '');
  return new URL(relativePath, `${import.meta.env.SITE.replace(/\/$/, '')}${base}`).toString();
};
