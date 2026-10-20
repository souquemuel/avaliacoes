# SEO, AEO/GEO e checklist técnico

## Consultas prioritárias (onde queremos ser encontrados e citados por IAs)

1. avaliações no Google (pilar)
2. como conseguir mais avaliações no Google
3. como pedir avaliação no Google
4. link de avaliação do Google / QR code de avaliação
5. como responder avaliação negativa no Google
6. como apagar avaliação negativa no Google
7. comprar avaliações no Google
8. avaliações Google Meu Negócio
9. avaliações no Google para restaurantes / clínicas / imobiliárias
10. avaliações do Google ajudam a ranquear?

*Lacuna: volumes de busca e SERP não foram medidos (sem ferramenta de palavras-chave). Visibilidade atual em assistentes de IA não testada; o site foi publicado em 12/10/2026.*

## On-page (padrão para toda página)

- `<title>` de 45–60 caracteres com a consulta no início (`tituloSeo`); marca só se couber.
- Meta description de 140–160 caracteres (o build falha acima de 160).
- Um H1; H2 em forma de pergunta quando natural; sem pular níveis.
- Resposta direta logo abaixo do H1 ("Resposta rápida", campo `resumo`) e no 1º parágrafo de cada H2.
- Link para o pilar nos primeiros 200 palavras.
- Fatos sobre regras do Google sempre com link para a página oficial de ajuda.
- Nada de números ou depoimentos inventados. Exemplos fictícios marcados como "exemplo ilustrativo".

## Técnico (implementado)

- HTML estático (Astro) — conteúdo visível sem JavaScript.
- `canonical` em todas as páginas; `trailingSlash: always`.
- `sitemap.xml` com `lastmod`; `robots.txt` com sitemap e robôs de IA liberados.
- `rss.xml` e `llms.txt` gerados automaticamente.
- JSON-LD: Organization, WebSite, Person (ProfilePage), BlogPosting, FAQPage, BreadcrumbList, CollectionPage, Service, Book.
- Imagem de compartilhamento `og.png` (1200×630).
- 404 personalizada com `noindex`, atalhos para os temas, artigos recentes e CTA; `.htaccess` com `ErrorDocument 404`.
- Página `/obrigado/` (noindex) por onde passam todos os CTAs: dispara `generate_lead` no GA4.
- Schema local (Organization + ProfessionalService) com nome, telefone, região e endereço (`SITE.endereco`).
- FAQ (FAQPage) na home, consultoria, ebook, segmentos e artigos com `faq`.
- Checagem automática no build: títulos únicos, descrições 120–160, 1 H1, alt em todas as imagens.
- Política de privacidade (LGPD) e aviso de cookies com Consent Mode v2 (só aparece quando `ga4Id` está preenchido).
- Endereços antigos `/blog/<artigo>/` redirecionam (meta refresh 0 s + canonical + noindex).

## Pendências técnicas

- Confirmar que `/404.html` responde com status 404 na Hostinger.
- Cabeçalho HSTS (depende da configuração da Hostinger/CDN).
- Medir Core Web Vitals no Search Console após 28 dias de dados.
- Preencher `ga4Id` em `src/config.ts` para ligar o Google Analytics e marcar `generate_lead` como evento-chave no GA4.
- Preencher `SITE.endereco` (cidade, rua, CEP) se o endereço puder ser público.
- Cadastrar cases reais em `src/cases.ts`.
- Acrescentar LinkedIn/YouTube em `perfis` (Instagram já está).

## AEO/GEO — sinais de entidade a construir

- Perfis sociais oficiais ligados por `sameAs`.
- Mesmo nome, telefone e descrição em todos os perfis (consistência).
- Menções em sites de terceiros (entrevistas, podcasts, parceiros).
- Dados próprios: um estudo com perfis analisados (ex.: média da nota 0–100 por segmento) seria a fonte mais citável. Só publicar com método descrito.

## Reteste trimestral

A cada 3 meses: perguntar as 10 consultas acima no Google, ChatGPT, Perplexity, Gemini e Claude; registrar quem é citado; atualizar artigos que perderam espaço.
