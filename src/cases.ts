// Cases com resultado REAL de clientes. Nada de número inventado: só publique com dados conferidos
// e com autorização do cliente. Enquanto a lista estiver vazia, a seção não aparece no site.
//
// Exemplo de preenchimento:
// {
//   empresa: 'Nome da empresa',
//   segmento: 'Clínica odontológica',
//   cidade: 'São José, SC',
//   antes: { rotulo: 'Nota do perfil', valor: '42/100' },
//   depois: { rotulo: 'Nota do perfil', valor: '96/100' },
//   prazo: '60 dias',
//   resultado: 'O que mudou para o negócio, em uma frase (ex.: mais pedidos de orçamento pelo Google).',
//   depoimento: 'Frase curta do cliente, com autorização.',
//   autorDepoimento: 'Nome, cargo',
// },

export interface Case {
  empresa: string;
  segmento: string;
  cidade?: string;
  antes: { rotulo: string; valor: string };
  depois: { rotulo: string; valor: string };
  prazo?: string;
  resultado: string;
  depoimento?: string;
  autorDepoimento?: string;
}

export const CASES: Case[] = [];
