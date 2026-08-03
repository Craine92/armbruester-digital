import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://armbruester-digital.de',
  base: '/',
  output: 'static',
  build: { format: 'directory' },
  compressHTML: true
});
