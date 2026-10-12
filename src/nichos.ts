export interface Nicho {
  slug: string;
  nome: string;
  titulo: string;
  tituloSeo: string;
  descricao: string;
  intro: string;
  dores: string[];
  estrategias: { titulo: string; texto: string }[];
}

export const NICHOS: Nicho[] = [
  {
    slug: 'restaurantes',
    nome: 'Restaurantes',
    tituloSeo: 'Avaliações no Google para restaurantes',
    titulo: 'Avaliações no Google para restaurantes: como transformar elogios em mesas cheias',
    descricao:
      'Como restaurantes, bares e cafés usam as avaliações do Google para serem escolhidos por quem está decidindo onde comer agora.',
    intro:
      'Quem procura onde comer decide em segundos. Nota, fotos recentes e o que os últimos clientes escreveram pesam mais do que qualquer anúncio. Avaliações bem trabalhadas respondem às dúvidas antes que o cliente precise perguntar.',
    dores: [
      'Muitas avaliações genéricas ("muito bom", "recomendo") que não ajudam ninguém a decidir.',
      'Uma crítica antiga sem resposta aparecendo entre as primeiras.',
      'Pratos, ambiente e diferenciais que nunca aparecem no texto das avaliações.',
    ],
    estrategias: [
      { titulo: 'Peça no momento certo', texto: 'O melhor momento é logo depois de um elogio espontâneo do cliente, com o QR code do perfil à mão, e não dias depois por mensagem fria.' },
      { titulo: 'Direcione o conteúdo', texto: 'Sugira ao cliente comentar o prato que pediu ou a ocasião (aniversário, almoço de negócios). Isso gera avaliações com as palavras que outros clientes buscam.' },
      { titulo: 'Responda como anfitrião', texto: 'Respostas com o nome do cliente e um detalhe da visita mostram que existe uma casa cuidando de cada mesa.' },
    ],
  },
  {
    slug: 'clinicas',
    nome: 'Clínicas e consultórios',
    tituloSeo: 'Avaliações no Google para clínicas e consultórios',
    titulo: 'Avaliações no Google para clínicas e consultórios: credibilidade antes da primeira consulta',
    descricao:
      'Como clínicas, consultórios e profissionais de saúde constroem credibilidade no Google com avaliações, respeitando a ética da profissão.',
    intro:
      'Antes de marcar uma consulta, o paciente procura sinais de confiança: atendimento, pontualidade, cuidado. As avaliações são o primeiro contato com a sua clínica, e precisam transmitir segurança.',
    dores: [
      'Medo de pedir avaliações e parecer pouco profissional.',
      'Comentários sobre espera ou recepção que ofuscam a qualidade do atendimento.',
      'Dúvida sobre o que pode ou não ser respondido sem expor o paciente.',
    ],
    estrategias: [
      { titulo: 'Peça pela experiência, não pelo resultado', texto: 'Oriente o pedido para a experiência de atendimento (acolhimento, clareza, estrutura), sem prometer ou comentar resultados clínicos.' },
      { titulo: 'Responda sem expor dados', texto: 'Agradeça e trate críticas sem confirmar que a pessoa é paciente e sem citar qualquer informação de saúde. Leve a conversa para um canal privado.' },
      { titulo: 'Envolva a recepção', texto: 'A equipe de recepção é quem mais encontra pacientes satisfeitos. Um roteiro simples de pedido muda o volume de avaliações em poucas semanas.' },
    ],
  },
  {
    slug: 'imobiliarias',
    nome: 'Imobiliárias e corretores',
    tituloSeo: 'Avaliações no Google para imobiliárias',
    titulo: 'Avaliações no Google para imobiliárias: a confiança que antecede o primeiro contato',
    descricao:
      'Como imobiliárias e corretores usam avaliações do Google para gerar confiança em uma decisão de alto valor.',
    intro:
      'Comprar, vender ou alugar um imóvel envolve dinheiro e segurança. Antes de chamar um corretor, o cliente quer saber se outras pessoas tiveram uma negociação tranquila. As avaliações contam essa história.',
    dores: [
      'Poucas avaliações para um negócio com muitos clientes atendidos.',
      'Avaliações que falam da imobiliária, mas não do corretor nem do processo.',
      'Críticas de inquilinos sobre manutenção sem resposta.',
    ],
    estrategias: [
      { titulo: 'Peça na entrega das chaves', texto: 'É o pico de satisfação da jornada. Transforme esse momento em um ritual com pedido de avaliação.' },
      { titulo: 'Conte o processo', texto: 'Incentive o cliente a comentar como foi a negociação, a documentação e o acompanhamento. É isso que o próximo cliente quer saber.' },
      { titulo: 'Responda críticas com processo', texto: 'Mostre na resposta qual é o caminho para resolver a questão. Quem lê percebe organização, não desculpa.' },
    ],
  },
];
