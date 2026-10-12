// Configurações gerais do site. Edite aqui os links de contato e do ebook.
const WHATSAPP_NUMERO = '5551989978057';
const wa = (texto: string) => `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;

export const SITE = {
  nome: 'Avaliações que Vendem',
  url: 'https://avaliacoesquevendem.com.br',
  descricao:
    'Como pedir, responder e usar avaliações do Google para o cliente escolher a sua empresa. Método de Quemuel Verdum, especialista em posicionamento no Google.',
  autor: 'Quemuel Verdum',
  marca: 'Empresa 1%',
  regiao: 'Grande Florianópolis, Santa Catarina',
  whatsappExibicao: '(51) 98997-8057',
  // Links de WhatsApp com mensagem pronta para cada origem
  whatsapp: {
    analise: wa('Olá, Quemuel! Vim pelo site Avaliações que Vendem e quero uma análise do perfil da minha empresa no Google.'),
    ebook: wa('Olá, Quemuel! Vim pelo site Avaliações que Vendem e quero saber mais sobre o Guia das Avaliações que Vendem.'),
    geral: wa('Olá, Quemuel! Vim pelo site Avaliações que Vendem.'),
  },
  // Link da página de vendas do ebook. Vazio = o botão do ebook abre o WhatsApp.
  ebookUrl: '',
  // Perfis oficiais (Instagram, LinkedIn etc.) para os dados estruturados.
  perfis: [] as string[],
};

export const linkEbook = SITE.ebookUrl || SITE.whatsapp.ebook;
