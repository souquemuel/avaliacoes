// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://avaliacoesquevendem.com.br',
  trailingSlash: 'always',
  build: { format: 'directory' },
  output: 'static',
});
