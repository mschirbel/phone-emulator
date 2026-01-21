import { Email } from '../types';

export const EMAILS: Email[] = [
  // A AMEAÇA (Anônima / Helena?)
  {
    id: "e1",
    from: "Anônimo",
    fromEmail: "noreply@protonmail.com",
    subject: "Último Aviso",
    date: "Ontem, 14:32",
    body: "Eu sei o jogo que você está jogando. Não pense que ninguém está vendo. Se você tem amor à sua vida, afaste-se dele agora. Você não sabe com quem está lidando.",
    read: false // Não lido para dar tensão
  },

  // A PROMESSA QUEBRADA (Marketing)
  {
    id: "e2",
    from: "Sonho de Viagem",
    fromEmail: "promocoes@sonhodeviagem.com.br",
    subject: "Paris espera por você! ✈️ Promoção Casal",
    date: "Ontem, 09:15",
    body: "Olá Júlia! O amor está no ar. Que tal realizar aquele sonho de conhecer a Europa com quem você ama? Pacotes para Paris e Roma com 30% de desconto. Clique aqui e reserve sua lua de mel antecipada!",
    read: true // Ela leu, provavelmente sonhando acordada
  },

  // TRABALHO (Marcos mantendo o disfarce)
  {
    id: "e3",
    from: "Marcos A.",
    fromEmail: "marcos.almeida@investgroup.com",
    subject: "Re: Agenda Semanal das Crianças",
    date: "Sexta, 18:00",
    body: "Júlia, favor confirmar se você pode ficar até mais tarde no sábado. Tenho aquela reunião importante. A Helena vai sair. Grato.",
    read: true
  },

  // SPAM 1 (Contexto Financeiro)
  {
    id: "e4",
    from: "Banco Fácil",
    fromEmail: "credito@bancofacil.com",
    subject: "Empréstimo Pré-Aprovado: R$ 5.000,00",
    date: "Sexta, 10:20",
    body: "Precisando de um fôlego nas contas? Seu crédito foi aprovado. Sem burocracia. Clique para contratar.",
    read: true
  },

  // SPAM 2 (Esotérico/Curiosidade)
  {
    id: "e5",
    from: "Mãe Dinah Online",
    fromEmail: "futuro@astrologia.net",
    subject: "Alguém do seu passado vai voltar...",
    date: "Quinta, 22:00",
    body: "As cartas revelam uma traição próxima. Descubra quem é o falso amigo. Consulta grátis.",
    read: false
  }
];