"use strict";

const frm = document.querySelector("form");
const respPalavra = document.querySelector("#outPalavra");
const respErros = document.querySelector("#outErros");
const respDica = document.querySelector("#outDica");
const respChances = document.querySelector("#outChances");
const respMensagemFinal = document.querySelector("#outMensagemFinal");
const imgStatus = document.querySelector("img");

let palavraSorteada;
let dicaSorteada;

window.addEventListener("load", () => {

 if (!localStorage.getItem("jogoPalavra")) {
  alert("Cadastre palavras para jogar");
  frm.inLetra.disabled = true;
  frm.btJogar.disabled = true;
  frm.btVerDica.disabled = true;
 };

 const palavras = localStorage.getItem("jogoPalavra").split(";");
 const dicas = localStorage.getItem("jogoDica").split(";");

 const tamanho = palavras.length;
 const numAleatorio = Math.floor(Math.random() * tamanho);

 palavraSorteada = palavras[numAleatorio].toUpperCase();
 dicaSorteada = dicas[numAleatorio];

 let novaPalavra = "";
 for (const letra of palavraSorteada) {
  if (letra == palavraSorteada.charAt(0)) {
   novaPalavra += palavraSorteada.charAt(0);
  } else {
   novaPalavra += "_";
  };
 };

 respPalavra.textContent = novaPalavra;
});

frm.btVerDica.addEventListener("click", () => {

 if (respErros.textContent.includes("*")) {
  alert("Você já soliciou a dica...");
  frm.inLetra.focus();
  return;
 };

 respDica.textContent = `* ${dicaSorteada}`;
 respErros.textContent += "*";

 const chances = parseInt(respChances.textContent) - 1;
 respChances.textContent = chances;

 trocarStatus(chances);
 verificarFim();

 frm.inLetra.focus();
});

const trocarStatus = (numero) => {
 if (numero > 0) imgStatus.src = `img/status${numero}.jpg`;
};

frm.addEventListener("submit", (e) => {
 e.preventDefault();

 const letra = frm.inLetra.value.toUpperCase();
 let erros = respErros.textContent;
 let palavra = respPalavra.textContent;

 if (erros.includes(letra) || palavra.includes(letra)) {
  alert("Você já apostou esta letra.");
  frm.inLetra.focus();
  frm.inLetra.value = "";
  return;
 };

 if (palavraSorteada.includes(letra)) {
  let novaPalavra = "";
  for (let i = 0; i < palavraSorteada.length; i++) {
   if (palavraSorteada.charAt(i) == letra) {
    novaPalavra += letra;
   } else {
    novaPalavra += palavra.charAt(i);
   };
  };
  respPalavra.textContent = novaPalavra;
 } else {
  respErros.textContent += letra;
  const chances = parseInt(respChances.textContent) - 1;
  respChances.textContent = chances;
  trocarStatus(chances);
 };

 verificarFim();
 frm.inLetra.value = "";
 frm.inLetra.focus();
});

const verificarFim = () => {
 const chances = parseInt(respChances.textContent);

 if (chances == 0) {
  respMensagemFinal.className = "display-3 text-danger";
  respMensagemFinal.textContent = `Ah...é ${palavraSorteada}. Você Perdeu!`;
  concluirJogo();
 } else if (respPalavra.textContent == palavraSorteada) {
  respMensagemFinal.className = "display-3 text-primary";
  respMensagemFinal.textContent = "Parabéns!! Você Ganhou.";
  trocarStatus(4);
  concluirJogo();
 };
};

const concluirJogo = () => {
 respDica.textContent = "* Clique no botão 'Iniciar Jogo' para jogar novamente.";
 frm.inLetra.disabled = true;
 frm.btJogar.disabled = true;
 frm.btVerDica.disabled = true;
};