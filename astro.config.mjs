// @ts-check
import { defineConfig } from 'astro/config';
import checagemSeo from './integrations/checagem-seo.mjs';

export default defineConfig({
  site: 'https://avaliacoesquevendem.com.br',
  trailingSlash: 'always',
  build: { format: 'directory' },
  output: 'static',
  integrations: [checagemSeo()],
});
