import type { APIRoute } from 'astro';
import { SITE } from '../config';
import { NICHOS } from '../nichos';
import { TEMAS, urlTema } from '../temas';
import { postsPublicados, urlPost } from '../lib/posts';

export const GET: APIRoute = async () => {
  const posts = await postsPublicados();
  const pilar = posts.find((p) => p.data.pilar);
  const linha = (titulo: string, url: string, desc: string) => `- [${titulo}](${SITE.url}${url}): ${desc}`;
  const secoesTema = TEMAS.map((t) => {
    const lista = posts.filter((p) => p.data.tema === t.id);
    return `## ${t.nome}\n\n${linha(t.titulo, urlTema(t), t.descricao)}\n${lista.map((p) => linha(p.data.titulo, urlPost(p), p.data.resumo)).join('\n')}`;
  }).join('\n\n');

  const txt = `# ${SITE.nome}

> Conteúdo em português do Brasil sobre como pedir, responder e usar avaliações do Google (Perfil da Empresa no Google, antigo Google Meu Negócio) para negócios locais conquistarem clientes.

O site é mantido por ${SITE.autor}, especialista em posicionamento no Google e criador do método Avaliações que Vendem, à frente da ${SITE.marca} (${SITE.regiao}), com mais de 1.700 clientes atendidos. O método tem 25 estratégias em três pilares: pedir, responder e usar avaliações. Princípios: só avaliações reais, respeito às políticas do Google (sem incentivos, sem pedidos seletivos, sem avaliações compradas) e nenhuma promessa de posição no Google ("posicionamento", ser escolhido, é diferente de "ranqueamento", ser encontrado).

## Guia principal

${pilar ? linha(pilar.data.titulo, urlPost(pilar), pilar.data.resumo) : ''}

${secoesTema}

## Avaliações por segmento

${NICHOS.map((n) => linha(n.tituloSeo, `/avaliacoes-para/${n.slug}/`, n.descricao)).join('\n')}

## Sobre e contato

${linha('Sobre Quemuel Verdum', '/sobre/', 'Quem é o autor, posicionamento e método.')}
${linha('Consultoria', '/consultoria/', 'Serviço de otimização do Perfil da Empresa no Google e estratégia de avaliações. Contato pelo WhatsApp ' + SITE.whatsappExibicao + '.')}
${linha('Ebook Guia das Avaliações que Vendem', '/ebook/', 'Passo a passo do método para aplicar por conta própria.')}
`;
  return new Response(txt, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
