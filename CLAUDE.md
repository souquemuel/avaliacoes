# Avaliações que Vendem — regras do projeto

Site/blog de Quemuel Verdum em https://avaliacoesquevendem.com.br, feito em Astro (estático).
Cada push na branch `main` dispara build e deploy automáticos na Hostinger (Node.js Web App).

## Como publicar um post
1. Crie `src/content/blog/<slug-com-hifens>.md` com o frontmatter:
   ```yaml
   titulo: "Título com a palavra-chave principal"
   descricao: "Até 160 caracteres, com a palavra-chave e um benefício claro."
   data: AAAA-MM-DD
   categoria: "Pedir avaliações" | "Responder avaliações" | "Usar avaliações" | "Guia completo"
   faq:            # opcional, 2 a 4 perguntas reais
     - pergunta: "..."
       resposta: "..."
   rascunho: false # true = não publica
   ```
2. Rode `npm run build` para conferir que não há erro.
3. Commit e push na `main`.

## Tom de voz
- Português do Brasil, direto, prático, sem enrolação e sem jargão de marketing.
- Fala com o dono de negócio local, que não é especialista em marketing.
- Posicionamento, não promessa de ranking: NUNCA prometer 1ª posição no Google.
- Palavra-eixo: credibilidade. A avaliação é argumento de venda.

## Checklist de SEO para todo post
- Palavra-chave principal no título, na descrição, no primeiro parágrafo e em pelo menos um H2.
- Um único H1 (vem do título). Use H2/H3 em ordem.
- Link para o pilar `/blog/guia-completo-avaliacoes-google/` e para 1–2 posts relacionados.
- Parágrafos curtos, listas quando ajudar, exemplo prático sempre que possível.
- Nada de dados ou estatísticas inventadas. Sem citação de fonte, sem número.
- Nunca recomendar incentivos em troca de avaliações nem filtrar quem vai avaliar (políticas do Google).

## Estrutura
- `src/config.ts` — nome, URL, links de WhatsApp e ebook.
- `src/nichos.ts` — páginas /avaliacoes-para/<nicho>/.
- `src/content/blog/` — posts em Markdown.
- `src/layouts/` — layout base, layout de post e chamada (CTA).
- `src/pages/sitemap.xml.ts` — sitemap gerado no build.
