import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    // H1 do artigo (pode ser longo)
    titulo: z.string(),
    // <title> para o Google: até ~60 caracteres. Se vazio, usa o titulo.
    tituloSeo: z.string().max(65).optional(),
    // Meta description: 120 a 160 caracteres
    descricao: z.string().min(70).max(160),
    // Resposta direta em 1–2 frases (aparece no topo; usada por IAs e trechos em destaque)
    resumo: z.string().max(320),
    palavraChave: z.string(),
    // Capa fotográfica: nome do arquivo em public/capas/ (sem extensão). Sem capa = capa SVG automática.
    capa: z.string().optional(),
    capaAlt: z.string().optional(),
    tema: z.enum(['pedir', 'responder', 'usar', 'guia']),
    data: z.coerce.date(),
    atualizado: z.coerce.date().optional(),
    pilar: z.boolean().default(false),
    rascunho: z.boolean().default(false),
    faq: z.array(z.object({ pergunta: z.string(), resposta: z.string() })).optional(),
  }),
});

export const collections = { blog };
