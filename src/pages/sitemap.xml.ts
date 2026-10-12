import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../config';
import { NICHOS } from '../nichos';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.rascunho);
  const urls: { loc: string; lastmod?: string }[] = [
    { loc: '/' }, { loc: '/blog/' }, { loc: '/sobre/' }, { loc: '/consultoria/' }, { loc: '/ebook/' },
    { loc: '/avaliacoes-para/' },
    ...NICHOS.map((n) => ({ loc: `/avaliacoes-para/${n.slug}/` })),
    ...posts.map((p) => ({ loc: `/blog/${p.id}/`, lastmod: (p.data.atualizado ?? p.data.data).toISOString().slice(0, 10) })),
  ];
  const corpo = urls
    .map((u) => `  <url><loc>${SITE.url}${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${corpo}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
