export type TemaId = 'pedir' | 'responder' | 'usar' | 'guia';

export interface Tema {
  id: Exclude<TemaId, 'guia'>;
  slug: string;
  nome: string;
  titulo: string;
  descricao: string;
  intro: string;
}

export const TEMAS: Tema[] = [
  {
    id: 'pedir',
    slug: 'pedir',
    nome: 'Pedir avaliações',
    titulo: 'Como conseguir mais avaliações no Google',
    descricao: 'Como pedir avaliações no Google no momento certo, com link e QR code, sem constrangimento e dentro das regras do Google. Artigos práticos e frases prontas.',
    intro: 'A maioria dos clientes satisfeitos não avalia porque ninguém pediu do jeito certo. Aqui estão os artigos sobre momento, frase, link e regras para conseguir mais avaliações reais.',
  },
  {
    id: 'responder',
    slug: 'responder',
    nome: 'Responder avaliações',
    titulo: 'Como responder avaliações no Google',
    descricao: 'Como responder avaliações positivas e negativas no Google para convencer quem está lendo, o que fazer com avaliações injustas e como proteger a reputação.',
    intro: 'A resposta é lida por todos os próximos clientes. Aqui estão os artigos sobre como responder elogios e críticas, e o que fazer com avaliações injustas.',
  },
  {
    id: 'usar',
    slug: 'usar',
    nome: 'Usar avaliações',
    titulo: 'Como usar avaliações do Google para vender mais',
    descricao: 'Como transformar o conteúdo das avaliações do Google em credibilidade, argumento de venda e mais clientes para o seu negócio, sem depender de anúncios.',
    intro: 'Avaliação não é só nota. Aqui estão os artigos sobre como o texto das avaliações convence clientes e como usar isso a favor da venda.',
  },
];

export const temaPorId = (id: string) => TEMAS.find((t) => t.id === id);
export const HUB = '/avaliacoes-no-google/';
export const PILAR_URL = HUB;
export const urlTema = (t: Tema) => `${HUB}${t.slug}/`;
