import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titulo: z.string(),
    descricao: z.string().max(170),
    data: z.coerce.date(),
    atualizado: z.coerce.date().optional(),
    categoria: z.string().default('Estratégias'),
    pilar: z.boolean().default(false),
    rascunho: z.boolean().default(false),
    faq: z
      .array(z.object({ pergunta: z.string(), resposta: z.string() }))
      .optional(),
  }),
});

export const collections = { blog };
