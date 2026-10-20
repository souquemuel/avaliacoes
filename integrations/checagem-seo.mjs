// Checagem de SEO que roda no fim de todo `npm run build`.
// Se algo estiver fora do padrão, o build falha e o deploy não acontece.
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

async function htmls(dir) {
  const itens = await readdir(dir, { withFileTypes: true });
  const lista = await Promise.all(itens.map((i) => {
    const p = join(dir, i.name);
    return i.isDirectory() ? htmls(p) : (i.name.endsWith('.html') ? [p] : []);
  }));
  return lista.flat();
}
const decodificar = (t) => t.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');

export default function checagemSeo() {
  return {
    name: 'checagem-seo',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const raiz = fileURLToPath(dir);
        const erros = [];
        const titulos = new Map();
        const descricoes = new Map();
        for (const arquivo of await htmls(raiz)) {
          const html = await readFile(arquivo, 'utf8');
          const pagina = '/' + arquivo.slice(raiz.length).replace(/index\.html$/, '').replace(/\\/g, '/');
          if (/<meta name="robots" content="noindex/.test(html)) continue; // 404, obrigado, redirecionamentos
          const titulo = decodificar(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '');
          const descricao = decodificar(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
          if (!titulo) erros.push(`${pagina}: sem <title>`);
          else if (titulo.length > 65) erros.push(`${pagina}: título com ${titulo.length} caracteres (máx. 65)`);
          if (!descricao) erros.push(`${pagina}: sem meta description`);
          else if (descricao.length < 120 || descricao.length > 160) erros.push(`${pagina}: meta description com ${descricao.length} caracteres (use 120–160)`);
          titulos.set(titulo, [...(titulos.get(titulo) ?? []), pagina]);
          descricoes.set(descricao, [...(descricoes.get(descricao) ?? []), pagina]);
          const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
          if (h1 !== 1) erros.push(`${pagina}: ${h1} H1 (deve ter exatamente 1)`);
          for (const img of html.match(/<img\b[^>]*>/g) ?? []) {
            if (!/\balt=/.test(img)) erros.push(`${pagina}: imagem sem alt → ${img.slice(0, 80)}…`);
          }
        }
        for (const [t, ps] of titulos) if (t && ps.length > 1) erros.push(`Título repetido (canibalização) em ${ps.join(', ')}: "${t}"`);
        for (const [d, ps] of descricoes) if (d && ps.length > 1) erros.push(`Meta description repetida em ${ps.join(', ')}`);
        if (erros.length) {
          erros.forEach((e) => logger.error(e));
          throw new Error(`Checagem de SEO: ${erros.length} problema(s). Corrija antes de publicar.`);
        }
        logger.info(`Checagem de SEO ok: ${titulos.size} páginas indexáveis, títulos e descrições únicos.`);
      },
    },
  };
}
