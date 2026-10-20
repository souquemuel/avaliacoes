export interface Nicho {
  slug: string;
  nome: string;
  titulo: string;
  tituloSeo: string;
  capa: string;
  capaAlt: string;
  descricao: string;
  intro: string;
  dores: string[];
  estrategias: { titulo: string; texto: string }[];
  faq: { pergunta: string; resposta: string }[];
}

export const NICHOS: Nicho[] = [
  {
    slug: 'restaurantes',
    nome: 'Restaurantes',
    tituloSeo: 'Avaliações no Google para restaurantes',
    capa: 'restaurantes',
    capaAlt: 'Mesa de restaurante sofisticado com prato autoral, taça de vinho tinto e uma estrela dourada',
    titulo: 'Avaliações no Google para restaurantes: como transformar elogios em mesas cheias',
    descricao:
      'Como restaurantes, bares e cafés usam as avaliações do Google para serem escolhidos por quem está decidindo onde comer agora, com estratégias práticas.',
    faq: [
      { pergunta: "Posso dar uma sobremesa ou desconto em troca de avaliação?", resposta: "Não. As políticas do Google proíbem oferecer qualquer vantagem em troca de avaliações, e elas podem ser removidas. Peça avaliações honestas, sem condicionar nada a elas." },
      { pergunta: "Qual o melhor momento para pedir avaliação no restaurante?", resposta: "Logo depois da experiência, enquanto ela está fresca: na hora da conta, com um QR code na mesa ou na comanda, ou numa mensagem no dia seguinte para quem reservou." },
      { pergunta: "Preciso responder todas as avaliações?", resposta: "O ideal é sim. Comece pelas negativas e pelas mais detalhadas. Quem está escolhendo onde comer lê as respostas para entender como a casa trata os clientes." },
      { pergunta: "O que fazer com avaliação de alguém que nunca veio ao restaurante?", resposta: "Responda com calma, dizendo que não encontrou registro da visita e se colocando à disposição. Se a avaliação viola as políticas do Google, denuncie pelo próprio perfil." },
      { pergunta: "Fotos dos clientes nas avaliações ajudam?", resposta: "Ajudam o próximo cliente a ver o prato e o ambiente de verdade. Ao pedir a avaliação, você pode convidar o cliente a incluir uma foto do que pediu." },
    ],
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
    capa: 'clinicas',
    capaAlt: 'Balcão de recepção de clínica em pedra escura com estetoscópio dourado e uma estrela dourada',
    titulo: 'Avaliações no Google para clínicas e consultórios: credibilidade antes da primeira consulta',
    descricao:
      'Como clínicas, consultórios e profissionais de saúde constroem credibilidade no Google com avaliações, respeitando a ética e a privacidade do paciente.',
    faq: [
      { pergunta: "Posso responder a avaliação citando o tratamento do paciente?", resposta: "Evite. Confirmar procedimento, diagnóstico ou qualquer dado de saúde na resposta expõe o paciente. Agradeça e fale do atendimento de forma geral, sem detalhes clínicos." },
      { pergunta: "O conselho profissional permite pedir avaliações?", resposta: "Cada conselho tem as suas normas de publicidade, então consulte as da sua profissão. Pedir uma avaliação honesta, sem incentivo e sem prometer resultado, é o caminho mais seguro." },
      { pergunta: "Como pedir avaliação sem constranger o paciente?", resposta: "De forma leve, no fim do atendimento ou numa mensagem depois da consulta, com o link direto. Explique que a opinião ajuda outros pacientes a escolher com segurança." },
      { pergunta: "Como responder uma reclamação sobre atraso ou valor?", resposta: "Sem discutir em público. Reconheça a experiência, explique o que for possível sem expor o paciente e convide para uma conversa no canal privado da clínica." },
      { pergunta: "As avaliações ajudam o paciente a escolher a clínica?", resposta: "Sim. Antes de marcar, o paciente procura sinais de confiança, como pontualidade, cuidado e clareza nas explicações. Avaliações detalhadas mostram isso melhor do que a nota." },
    ],
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
    capa: 'imobiliarias',
    capaAlt: 'Chaves de casa douradas com chaveiro de couro, caneta tinteiro e contrato sobre a mesa, ao lado de uma estrela dourada',
    titulo: 'Avaliações no Google para imobiliárias: a confiança que antecede o primeiro contato',
    descricao:
      'Como imobiliárias e corretores usam avaliações do Google para gerar confiança em uma decisão de alto valor: quando pedir, como responder e o que destacar.',
    faq: [
      { pergunta: "Qual o melhor momento para pedir avaliação na imobiliária?", resposta: "Nos momentos de alívio do cliente: na entrega das chaves, na assinatura do contrato ou quando o imóvel do proprietário é alugado ou vendido." },
      { pergunta: "Proprietários também podem avaliar a imobiliária?", resposta: "Podem. Quem contratou a imobiliária para vender ou alugar teve uma experiência real com o serviço, e o relato dele convence outros proprietários." },
      { pergunta: "O corretor pode pedir avaliação para a imobiliária?", resposta: "Pode e deve, mas sem escrever pelo cliente. Peça que ele conte como foi o atendimento; avaliações que citam o corretor pelo nome passam mais confiança." },
      { pergunta: "Como responder reclamação sobre vistoria ou devolução de caução?", resposta: "Com fatos e sem expor dados do contrato. Explique o procedimento de forma geral, mostre disposição para resolver e leve os detalhes para o atendimento privado." },
      { pergunta: "Imobiliária tem poucas avaliações porque vende pouco. O que fazer?", resposta: "Peça a todos que passam pela imobiliária: compradores, vendedores, locatários e proprietários. Somando todos, o volume de avaliações cresce bem mais rápido." },
    ],
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
