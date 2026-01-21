import { PhoneData } from '../types';

export const BROWSER_DATA: PhoneData['browser'] = {
  // O histórico revela as intenções e medos da Júlia
  history: [
    "google.com/search?q=sintomas+primeiras+semanas", // Pista da gravidez
    "imovelweb.com.br/apartamentos-zona-sul",       // Pista que ela queria sair dali
    "decolar.com/pacotes/buenos-aires",               // A promessa do Marcos
    "esportes.br/futebol/brasileirao",
    "omelete.com.br/filmes"
  ],
  pages: [
    {
      url: "esportes.br/noticias/derby-sabado",
      title: "Esportes BR - O Portal do Futebol",
      content: "RESUMO DA RODADA: O clássico deste sábado (17) entre Palmeiras e Corinthians terminou em 0x0. O jogo, que começou pontualmente às 21h00, foi marcado por muitas faltas e poucas chances de gol. O primeiro tempo encerrou-se às 21h48 com vaias da torcida..."
      // PISTA: Se o jogo começou 21h, o 1º tempo acabou ~21h45. Pedro diz que chegou em casa nessa hora, mas Ricardo o viu no prédio às 22h15.
    },
    {
      url: "ciencianews.com/artigos/sono-rem",
      title: "Ciência News: O impacto da luz azul",
      content: "ESTUDO: Nova pesquisa da USP revela que o uso de telas antes de dormir aumenta a ansiedade em 40%. Cientistas recomendam chás naturais e evitar notícias impactantes à noite para não prejudicar o ciclo REM."
    },
    {
      url: "cinepop.com.br/criticas/amor-em-paris",
      title: "CinePop: Crítica de 'O Último Romance'",
      content: "FILMES: Vale o ingresso? O novo drama romântico que estreia hoje traz a história de uma jovem que larga tudo para viver um amor proibido na Europa. Um conto de fadas moderno ou um alerta sobre ilusões? Nota: 4/5."
      // PISTA TEMÁTICA: Reflete a própria vida da Júlia (o sonho da Europa com Marcos).
    },
    {
      url: "g1.globo.com/sp/transito",
      title: "Portal G1 - Trânsito em SP",
      content: "AGORA: Marginal Pinheiros com 12km de lentidão sentido Interlagos devido a um acidente envolvendo um caminhão. Recomenda-se evitar a região da Ponte Estaiada. Previsão de chuva forte para o fim da noite."
    },
    {
      url: "google.com",
      title: "Google",
      content: "Pesquisas recentes: 'teste de gravidez farmácia preço', 'como saber se ele vai separar', 'preço aluguel sp'."
    }
  ]
};