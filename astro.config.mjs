import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://armbruester-digital.de',
  output: 'static',
  build: { format: 'directory' },
  compressHTML: true
});
