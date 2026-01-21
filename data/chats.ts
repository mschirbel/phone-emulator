import { Chat } from '../types';

export const CHATS: Chat[] = [
  // 1. CLARA (A Assassina "Amiga")
  {
    id: "c1",
    contactName: "Clara 🤍",
    lastSeen: "Online",
    messages: [
      { id: "m101", text: "Amiga, o clima tá horrível aqui. A Helena me olhou com um ódio hj...", time: "14:00", isMe: false },
      { id: "m102", text: "Eu te avisei, Ju. Ela é perigosa. Ouvi ela gritando no telefone que ia 'dar um fim nisso'.", time: "14:05", isMe: true },
      { id: "m103", text: "Vc acha que ela sabe do Marcos?", time: "14:06", isMe: true },
      { id: "m104", text: "Certeza. O Marcos é mole, deve ter deixado rastro. Se cuida, tá?", time: "14:10", isMe: false },
      { id: "m105", text: "Nossa, tô mto enjoada hj. Acho que minha pressão caiu. Vou ficar deitada aqui no quarto qnd a Dona Beatriz sair.", time: "14:12", isMe: false },
      { id: "m106", text: "Vou descer pra lavanderia mais tarde, qnd a Helena dormir. Não quero cruzar com ela.", time: "19:30", isMe: true },
      { id: "m107", text: "Vai tranquila. Qualquer coisa grita.", time: "19:35", isMe: false }
    ]
  },

  // 2. PEDRO (O Ex - A Prova que ele mentiu o álibi)
  {
    id: "c2",
    contactName: "Pedro (Ex)",
    lastSeen: "Ontem 23:10",
    messages: [
      { id: "m201", text: "Não faz isso com a gente, Ju.", time: "10:00", isMe: false },
      { id: "m202", text: "Pedro, acabou. Segue sua vida.", time: "10:15", isMe: true },
      { id: "m203", text: "Me atende! Eu sei que vc tá com aquele velho!", time: "21:48", isMe: false },
      { id: "m204", text: "Chamada de voz perdida", time: "21:49", isMe: false },
      { id: "m205", text: "Vc vai me trocar por promessa de rico??", time: "22:00", isMe: false },
      { id: "m206", text: "Esse síndico desgraçado não quer abrir!", time: "22:15", isMe: false },
      { id: "m207", text: "JÚLIA DESCE AQUI AGORA!", time: "22:16", isMe: false },
      { id: "m208", text: "Eu juro que se vc não descer eu derrubo esse portão!", time: "22:18", isMe: false },
      { id: "m209", text: "Tô vendo a luz da lavanderia acesa. Sei que vc tá aí.", time: "22:45", isMe: false },
      { id: "m210", text: "Abre logo! Eu tô aqui na frente!", time: "22:55", isMe: false }
      // PISTA CRUCIAL: Se ele mandou msg às 22:55 dizendo "Tô aqui na frente", 
      // o álibi dele de estar em casa vendo o jogo (que acabou 21:45) é mentira.
    ]
  },

  // 3. MARCOS (O Pivô - Motivo)
  {
    id: "c3",
    contactName: "Marcos (Chefe)",
    lastSeen: "Ontem 21:30",
    messages: [
      { id: "m301", text: "Precisamos conversar. A Clara disse que a Helena tá furiosa.", time: "16:00", isMe: true },
      { id: "m302", text: "Júlia, não escreve isso aqui. A Helena pega meu celular.", time: "16:15", isMe: false },
      { id: "m303", text: "Eu não aguento mais ser segredo. Eu... eu acho que tô grávida.", time: "16:16", isMe: true },
      { id: "m304", text: "O QUÊ?? Júlia, pelo amor de Deus. Não fala nada pra ninguém.", time: "16:18", isMe: false },
      { id: "m305", text: "Posso subir lá depois?", time: "16:21", isMe: true },
      { id: "m306", text: "NÃO. Hoje não sobe ninguém. Vou ficar trancado em call a noite toda. Amanhã a gente resolve tudo. Eu prometo.", time: "16:25", isMe: false }
    ]
  },

  // 4. GRUPO DO CONDOMÍNIO (A Mecânica do Crime)
  {
    id: "c4",
    contactName: "🏢 Condomínio Santa Aurora",
    lastSeen: "Ontem",
    messages: [
      { id: "m401", text: "Ricardo Síndico: ⚠️ AVISO DE MANUTENÇÃO", time: "Ontem 08:00", isMe: false },
      { id: "m402", text: "A manutenção do elevador social foi concluída nesta madrugada.", time: "Ontem 08:01", isMe: false },
      { id: "m403", text: "ATENÇÃO: O novo motor é de alta performance. O tempo de viagem foi reduzido para EXATOS 2 SEGUNDOS POR ANDAR.", time: "Ontem 08:02", isMe: false },
      { id: "m404", text: "Nota: O display digital queimou durante a instalação. Peça de reposição chega em 30 dias. Contamos com a compreensão.", time: "Ontem 08:03", isMe: false }
      // PISTA CRUCIAL: Sem display, o assassino mente sobre o andar. O tempo (2s/andar) é a única forma de descobrir a verdade.
    ]
  },

  // 5. HELENA (A Ameaça)
  {
    id: "c5",
    contactName: "Sra. Helena",
    lastSeen: "Ontem 14:00",
    messages: [
      { id: "m501", text: "Júlia, onde você colocou a camisa social azul do Marcos?", time: "09:00", isMe: false },
      { id: "m502", text: "Bom dia Sra. Helena. Está na lavanderia, vou passar hoje.", time: "09:05", isMe: true },
      { id: "m503", text: "Encontrei isso no escritório dele. Esse batom barato não é meu.", time: "13:45", isMe: false },
      { id: "m504", text: "Se você não pedir demissão até amanhã, eu vou garantir que você nunca mais consiga emprego nem limpando chão.", time: "13:50", isMe: false }
    ]
  },

  // 6. CONTEXTO (Vagas de Emprego)
  {
    id: "c6",
    contactName: "Vagas & Oportunidades SP",
    lastSeen: "Ontem",
    messages: [
      { id: "m601", text: "+55 11 99999-1234: Vaga Auxiliar de Limpeza - Zona Sul.", time: "Ontem", isMe: false },
      { id: "m602", text: "+55 11 98888-5678: Procuro Babá para finais de semana no Morumbi. Paga-se bem.", time: "Ontem", isMe: false },
      { id: "m603", text: "Olá, tenho interesse na vaga de babá. Tenho referências.", time: "Ontem 19:15", isMe: true }
    ]
  }
];