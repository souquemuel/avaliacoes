# Design tokens e checklist

Tokens em `src/global.css` (`:root`). Não use cores, tamanhos ou espaçamentos fora deles.

| Token | Valor | Uso | Contraste |
|---|---|---|---|
| `--tinta` | #14161c | títulos, fundo escuro | — |
| `--texto` | #2b2f38 | corpo | ≈12:1 sobre `--fundo` |
| `--suave` | #5d6371 | meta, texto secundário | 5,7:1 sobre `--fundo` |
| `--fundo` | #faf8f4 | fundo da página | — |
| `--ouro` | #d6a84a | botão primário (texto `--tinta`), destaques no escuro | 8,2:1 com `--tinta` |
| `--ouro-texto` | #7d5c17 | links e selos no claro | 5,8:1 sobre `--fundo` |
| `--claro-sobre-escuro` | #cfcbc2 | texto em fundo escuro | 11:1 sobre `--tinta` |

Fontes (hospedadas no próprio site via @fontsource): **Fraunces** nos títulos e **Inter** no texto.

Capas dos artigos: geradas automaticamente em SVG por `src/lib/capa.ts` (um motivo por tema). Não é preciso criar imagem para cada artigo.

Espaçamento em escala de 4 px (`--e-1` a `--e-9`). Raio: 14 px (cartões), 10 px (caixas), pílula (botões).

## Componentes

- **Botões:** um primário (dourado) e um secundário (contorno). Altura mínima 48 px.
- **Um CTA principal por seção:** análise pelo WhatsApp. O ebook aparece como link de texto.
- **Cartão:** um padrão só (`.cartao`).
- **FAQ:** `<details>` com área de toque ≥ 48 px.

## Checklist antes de publicar

- [ ] Testar em 375 px e 1440 px: sem rolagem horizontal.
- [ ] Alvos de toque ≥ 44 px.
- [ ] Contraste AA em todo texto novo.
- [ ] Foco visível (`:focus-visible`) em links e botões.

## Capas fotográficas

Estilo único: fotografia still life de produto, fundo preto fosco (#14161c), luz lateral dourada quente, objetos em ouro escovado, muito espaço negativo. Sem texto, sem logotipos (inclusive do Google) e sem rostos.

Prompt-base para novas capas (gerar em 1536x1024 e converter com `scripts/otimizar-capas.py`):

> Fotografia de produto premium, estilo still life editorial. [OBJETOS DA CENA] sobre superfície de pedra preta fosca, fundo preto profundo (#14161c). Luz lateral quente vinda da direita criando brilho dourado (#d6a84a) suave e sombras longas. Composição minimalista, muito espaço negativo, objetos centralizados com margem generosa nas bordas. Sem texto, sem letras, sem logotipos. Formato horizontal 1536x1024.

Sempre preencher `capaAlt` descrevendo o que aparece na imagem.
