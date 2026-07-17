import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://craine92.github.io',
  base: '/armbruester-digital',
  output: 'static',
  build: { format: 'directory' },
  compressHTML: true
});
