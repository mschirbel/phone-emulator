import { Call } from '../types';

export const CALLS: Call[] = [
  // NOITE DO CRIME (Sábado)
  {
    id: "cl1",
    contactName: "Pedro (Ex)",
    time: "22:42",
    type: "missed", // Ele tentando ligar do portão
    duration: ""
  },
  {
    id: "cl2",
    contactName: "Pedro (Ex)",
    time: "22:30",
    type: "missed", // Ele tentando ligar do portão
    duration: ""
  },
  {
    id: "cl3",
    contactName: "Pedro (Ex)",
    time: "21:50",
    type: "incoming",
    duration: "08:12" // A briga fatal onde ela termina tudo
  },
  {
    id: "cl4",
    contactName: "Marcos (Chefe)",
    time: "21:15",
    type: "missed", // Marcos tentando avisar do perigo? Ou cancelar o encontro?
    duration: ""
  },

  // TARDE (A Manipulação)
  {
    id: "cl5",
    contactName: "Clara 🤍",
    time: "14:40",
    type: "outgoing",
    duration: "14:35" // Clara fazendo a cabeça da Júlia sobre a Helena
  },

  // MANHÃ (Tensão)
  {
    id: "cl6",
    contactName: "Sra. Helena",
    time: "09:15",
    type: "incoming",
    duration: "00:45" // Muito curta. Provavelmente uma ordem ou ameaça seca.
  },

  // DIAS ANTERIORES (Contexto)
  {
    id: "cl7",
    contactName: "Mãe",
    time: "Sexta",
    type: "outgoing",
    duration: "32:10" // Humaniza a vítima
  },
  {
    id: "cl8",
    contactName: "Número Desconhecido", // Cobrança ou Trote?
    time: "Sexta",
    type: "missed",
    duration: ""
  }
];