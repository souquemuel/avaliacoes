import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;
export const urlPost = (p: Post) => (p.data.pilar ? '/avaliacoes-no-google/' : `/avaliacoes-no-google/${p.id}/`);

export async function postsPublicados(): Promise<Post[]> {
  return (await getCollection('blog', ({ data }) => !data.rascunho)).sort(
    (a, b) => b.data.data.valueOf() - a.data.data.valueOf(),
  );
}
