import type { APIRoute } from 'astro';
import { SITE } from '../config';
import { postsPublicados, urlPost } from '../lib/posts';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async () => {
  const posts = await postsPublicados();
  const itens = posts.map((p) => `    <item>
      <title>${esc(p.data.titulo)}</title>
      <link>${SITE.url}${urlPost(p)}</link>
      <guid isPermaLink="true">${SITE.url}${urlPost(p)}</guid>
      <description>${esc(p.data.descricao)}</description>
      <pubDate>${p.data.data.toUTCString()}</pubDate>
    </item>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(SITE.nome)}</title>
    <link>${SITE.url}/</link>
    <description>${esc(SITE.descricao)}</description>
    <language>pt-BR</language>
    <atom:link href="${SITE.url}/rss.xml" rel="self" type="application/rss+xml" />
${itens}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
