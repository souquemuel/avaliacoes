# Arquitetura de informação e hub de conteúdo

Responsável pelo hub: Quemuel Verdum. Revisão do pilar: anual (próxima: out/2027). Revisão dos clusters: quando caírem de posição ou surgir assunto novo.

## Modelo mental do público

O dono de negócio pensa em **tarefas**: "conseguir avaliações", "responder crítica", "apagar avaliação injusta", "aparecer no Google". A navegação usa essas palavras, não termos internos. *Lacuna: rótulos ainda não testados com usuários (card sort/tree test).*

## Mapa do site

```
/                                         Home (landing)
/avaliacoes-no-google/                    PILAR — guia completo
  /avaliacoes-no-google/pedir/            Hub do tema "Pedir"
  /avaliacoes-no-google/responder/        Hub do tema "Responder"
  /avaliacoes-no-google/usar/             Hub do tema "Usar"
  /avaliacoes-no-google/<artigo>/         Artigos de cluster
/avaliacoes-para/                         Hub de segmentos
  /avaliacoes-para/<segmento>/            Página por segmento
/blog/                                    Lista cronológica de todos os artigos
/consultoria/  /ebook/  /sobre/           Conversão e autoridade
/sitemap.xml  /rss.xml  /llms.txt         Descoberta
/blog/<antigo>/                           Redirecionamentos dos endereços de lançamento
```

## Padrões de URL

| Tipo | Padrão | Regra |
|---|---|---|
| Pilar | `/avaliacoes-no-google/` | fixo |
| Tema | `/avaliacoes-no-google/<tema>/` | uma palavra: pedir, responder, usar |
| Artigo | `/avaliacoes-no-google/<slug>/` | slug definido no frontmatter (`slug:`), curto, sem datas |
| Segmento | `/avaliacoes-para/<segmento>/` | plural, sem acento |

URLs não mudam sem redirecionamento. Para mudar, adicione o par antigo→novo em `src/pages/blog/[...slug].astro` (ou crie um arquivo equivalente na pasta do endereço antigo).

## Navegação

- **Principal (6 itens):** Guia completo · Blog · Segmentos · Ebook · Sobre · [Consultoria] (botão).
- **Mobile:** botão Consultoria fixo ao lado do logo; demais itens em linha rolável.
- **Trilha (breadcrumb):** em todas as páginas internas, com BreadcrumbList.
- **Rodapé:** conteúdo (pilar, 3 temas, todos os artigos), segmentos, contato.

## Taxonomia

Uma única categoria por artigo, campo `tema`: `pedir` | `responder` | `usar` (o pilar usa `guia`). Sem tags por enquanto. Novo tema só com 3+ artigos planejados.

## Linkagem interna

- **Pilar → clusters:** links contextuais no corpo + lista "Todos os artigos do guia" (automática).
- **Cluster → pilar:** link no 1º parágrafo e no fechamento (escrito no texto) + bloco "Continue lendo" (automático).
- **Cluster → cluster:** 1–2 links contextuais quando natural.
- **Segmento → pilar e 1 artigo por tema.**
- Âncoras descritivas, nunca "clique aqui".

## Plano de clusters (meta: 10–12 por hub)

| Tema | Publicado | Próximos |
|---|---|---|
| Pedir | Como pedir · Link de avaliação · Comprar avaliações | Mensagens prontas de WhatsApp · Treinar a equipe para pedir |
| Responder | Responder negativas · Apagar avaliação negativa | Responder avaliações positivas (modelos) · Avaliação falsa de concorrente |
| Usar | Texto das avaliações | Usar avaliações no Instagram e no atendimento · Avaliações e a IA do Google Maps |

Segmentos a criar: salões de beleza, academias, oficinas, hotéis e pousadas, advocacia, lojas.
