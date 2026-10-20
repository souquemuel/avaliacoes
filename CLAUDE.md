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
   capa: nome-da-capa              # opcional: arquivo em public/capas/ (sem extensão)
   capaAlt: "descrição da imagem"  # obrigatório se tiver capa
   tema: pedir | responder | usar
   data: AAAA-MM-DD
   faq:            # opcional, só perguntas reais
     - pergunta: "..."
       resposta: "..."
   rascunho: false
   ```
   Sem `capa`, o artigo usa a capa SVG automática do tema. Para criar uma capa: gere a imagem no estilo do site (prompts em `docs/design.md`) e rode `python3 scripts/otimizar-capas.py imagem.png nome-da-capa`.
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
- Contato: todo CTA principal usa `SITE.whatsapp.*` (em `src/config.ts`), que passa pela página `/obrigado/` (mede a conversão) e depois abre o WhatsApp (51) 98997-8057. Nunca linkar `wa.me` direto.
- O build roda uma checagem de SEO (`integrations/checagem-seo.mjs`) e FALHA se houver: título repetido ou acima de 65 caracteres, meta description fora de 120–160 ou repetida, página sem exatamente 1 H1, imagem sem `alt`.

## Estrutura
- `src/config.ts` — nome, URL, WhatsApp, prazo de resposta, Instagram, ID do Google Analytics (`ga4Id`), endereço do schema local, ebook.
- `src/cases.ts` — cases com resultado real (a seção só aparece quando a lista tem itens; nunca inventar números).
- `src/components/Cases.astro` — seção de cases (home e consultoria).
- `src/pages/obrigado.astro` — página de obrigado (evento GA4 `generate_lead` + redireciona ao WhatsApp).
- `src/pages/privacidade.astro` — política de privacidade (LGPD). Atualize a data se mudar.
- `src/pages/404.astro` + `public/.htaccess` — 404 personalizada.
- `integrations/checagem-seo.mjs` — trava de SEO no build.
- `src/temas.ts` — temas do hub (pedir, responder, usar).
- `src/nichos.ts` — páginas /avaliacoes-para/<segmento>/.
- `src/content/blog/` — pilar e artigos em Markdown.
- `src/layouts/` — Base (SEO, menu, rodapé, trilha), Post (artigo), Chamada (CTA).
- `src/pages/avaliacoes-no-google/` — pilar, temas e artigos.
- `src/pages/blog/[...slug].astro` — redirecionamentos de endereços antigos.
- `src/pages/sitemap.xml.ts`, `rss.xml.ts`, `llms.txt.ts` — gerados no build.
- `public/capas/` — capas fotográficas (WebP 1536 e 768 + JPG 1200x630 para compartilhamento).
- `scripts/otimizar-capas.py` — converte uma imagem nova nas três versões da capa.
- `docs/` — público, arquitetura, SEO, design e variantes de copy.
