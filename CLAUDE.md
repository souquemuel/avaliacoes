# Avaliações que Vendem — regras do projeto

Site/blog de Quemuel Verdum em https://avaliacoesquevendem.com.br, feito em Astro (estático).
Cada push na branch `main` dispara build e deploy automáticos na Hostinger (Node.js Web App).

Leia antes de criar conteúdo: `docs/publico-comprador.md`, `docs/arquitetura.md`, `docs/seo.md`, `docs/design.md`.

## Como publicar um artigo
1. Escolha um item da pauta em `docs/arquitetura.md` (um artigo = uma pergunta; não repita consulta de outro artigo).
2. Crie `src/content/blog/<nome>.md` com o frontmatter:
   ```yaml
   slug: endereco-curto            # vira /avaliacoes-no-google/endereco-curto/
   titulo: "H1 do artigo"
   tituloSeo: "Título para o Google (45–60 caracteres)"
   descricao: "Meta description, 140–160 caracteres."
   resumo: "Resposta direta em 1–3 frases (aparece como 'Resposta rápida')."
   palavraChave: "consulta principal"
   tema: pedir | responder | usar
   data: AAAA-MM-DD
   faq:            # opcional, só perguntas reais
     - pergunta: "..."
       resposta: "..."
   rascunho: false
   ```
3. No 1º parágrafo, link para o pilar `/avaliacoes-no-google/`. H2 em forma de pergunta com resposta direta na 1ª frase. 1–2 links para artigos irmãos.
4. Marque o item como feito na pauta de `docs/arquitetura.md` e, se for um assunto central, adicione um link contextual no pilar.
5. Rode `npm run build` (falha se o frontmatter estiver fora do padrão). Commit e push na `main`.

## Tom de voz
- Português do Brasil, direto, prático, sem enrolação e sem jargão de marketing.
- Fala com o dono de negócio local, que não é especialista em marketing.
- Posicionamento, não promessa de ranking: NUNCA prometer 1ª posição no Google.
- Palavra-eixo: credibilidade. A avaliação é argumento de venda.

## Checklist de SEO para todo post
- Palavra-chave principal no título, na descrição, no primeiro parágrafo e em pelo menos um H2.
- Um único H1 (vem do título). Use H2/H3 em ordem.
- Link para o pilar `/avaliacoes-no-google/` e para 1–2 artigos relacionados.
- Parágrafos curtos, listas quando ajudar, exemplo prático sempre que possível.
- Nada de dados ou estatísticas inventadas. Sem citação de fonte, sem número.
- Nunca recomendar incentivos em troca de avaliações nem filtrar quem vai avaliar (políticas do Google).
- Regras do Google citadas sempre com link para a ajuda oficial.
- Contato: todo CTA principal leva ao WhatsApp (51) 98997-8057 via `SITE.whatsapp` em `src/config.ts`.

## Estrutura
- `src/config.ts` — nome, URL, WhatsApp (links com mensagem pronta), ebook, perfis sociais.
- `src/temas.ts` — temas do hub (pedir, responder, usar).
- `src/nichos.ts` — páginas /avaliacoes-para/<segmento>/.
- `src/content/blog/` — pilar e artigos em Markdown.
- `src/layouts/` — Base (SEO, menu, rodapé, trilha), Post (artigo), Chamada (CTA).
- `src/pages/avaliacoes-no-google/` — pilar, temas e artigos.
- `src/pages/blog/[...slug].astro` — redirecionamentos de endereços antigos.
- `src/pages/sitemap.xml.ts`, `rss.xml.ts`, `llms.txt.ts` — gerados no build.
- `docs/` — público, arquitetura, SEO, design e variantes de copy.
