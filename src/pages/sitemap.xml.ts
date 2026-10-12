import type { APIRoute } from 'astro';
import { SITE } from '../config';
import { NICHOS } from '../nichos';
import { TEMAS, urlTema } from '../temas';
import { postsPublicados, urlPost } from '../lib/posts';

export const GET: APIRoute = async () => {
  const posts = await postsPublicados();
  const ultima = posts.map((p) => p.data.atualizado ?? p.data.data).sort((a, b) => b.valueOf() - a.valueOf())[0];
  const d = (x?: Date) => (x ?? ultima).toISOString().slice(0, 10);
  const urls: { loc: string; lastmod: string }[] = [
    { loc: '/', lastmod: d() },
    { loc: '/blog/', lastmod: d() },
    ...posts.map((p) => ({ loc: urlPost(p), lastmod: d(p.data.atualizado ?? p.data.data) })),
    ...TEMAS.map((t) => ({ loc: urlTema(t), lastmod: d() })),
    { loc: '/avaliacoes-para/', lastmod: d() },
    ...NICHOS.map((n) => ({ loc: `/avaliacoes-para/${n.slug}/`, lastmod: d() })),
    { loc: '/consultoria/', lastmod: d() },
    { loc: '/ebook/', lastmod: d() },
    { loc: '/sobre/', lastmod: d() },
  ];
  const corpo = urls.map((u) => `  <url><loc>${SITE.url}${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${corpo}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
