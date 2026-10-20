// Configurações gerais do site. Edite aqui os links de contato, o ebook, o Analytics e os dados locais.
const WHATSAPP_NUMERO = '5551989978057';
const wa = (texto: string) => `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;

// Links diretos do WhatsApp, com mensagem pronta para cada origem.
// Usados SOMENTE pela página /obrigado/, que registra a conversão e depois abre o WhatsApp.
export const WHATSAPP_DIRETO = {
  analise: wa('Olá, Quemuel! Vim pelo site Avaliações que Vendem e quero uma análise do perfil da minha empresa no Google.'),
  ebook: wa('Olá, Quemuel! Vim pelo site Avaliações que Vendem e quero saber mais sobre o Guia das Avaliações que Vendem.'),
  geral: wa('Olá, Quemuel! Vim pelo site Avaliações que Vendem.'),
} as const;
export type OrigemContato = keyof typeof WHATSAPP_DIRETO;

// Todo botão de contato passa pela página de obrigado (é ela que mede a conversão).
const contato = (origem: OrigemContato) => `/obrigado/?origem=${origem}`;

export const SITE = {
  nome: 'Avaliações que Vendem',
  url: 'https://avaliacoesquevendem.com.br',
  descricao:
    'Como pedir, responder e usar avaliações do Google para o cliente escolher a sua empresa. Método de Quemuel Verdum, especialista em posicionamento no Google.',
  autor: 'Quemuel Verdum',
  marca: 'Empresa 1%',
  regiao: 'Grande Florianópolis, Santa Catarina',
  whatsappExibicao: '(51) 98997-8057',
  telefoneSchema: '+55-51-98997-8057',
  // Prazo de resposta exibido perto dos botões de contato.
  prazoResposta: 'Resposta em até 24 horas',
  whatsapp: {
    analise: contato('analise'),
    ebook: contato('ebook'),
    geral: contato('geral'),
  },
  // Link da página de vendas do ebook. Vazio = o botão do ebook abre o WhatsApp.
  ebookUrl: '',
  instagram: { usuario: '@souquemuel', url: 'https://www.instagram.com/souquemuel/' },
  // Perfis oficiais para os dados estruturados (sameAs). Acrescente LinkedIn, YouTube etc.
  perfis: ['https://www.instagram.com/souquemuel/'] as string[],
  // Google Analytics 4: cole o ID de medição (ex.: 'G-ABC123XYZ'). Vazio = Analytics e aviso de cookies desligados.
  ga4Id: '',
  // Endereço para o schema local (nome, endereço e telefone). Preencha só o que pode ser público.
  endereco: {
    rua: '',
    cidade: '',
    estado: 'SC',
    cep: '',
    pais: 'BR',
  },
};

export const linkEbook = SITE.ebookUrl || SITE.whatsapp.ebook;
