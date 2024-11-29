"use strict";

const frm = document.querySelector("form");

const { inNome, inIdade, outSaida, btReset } = frm;

// recebe o nome separa cada caracter com o método spli(""), com map() adiciona em cada letra um - ou " ", com join("") junta tudo novamente.
const gerarTracos = (nome) => {
 return nome.split("").map(letra => (letra !== " " ? "-" : " ")).join("");
};

const verCategoria = (idade) => {
 return idade <= 12 ? "Infatil" : idade <= 18 ? "Juvenil" : "Adulto";
};

frm.addEventListener("submit", (e) => {
 e.preventDefault()

 const nomeAtleta = inNome.value.trim();
 const idadeAtleta = parseInt(inIdade.value, 10);

 if (isNaN(idadeAtleta) || idadeAtleta <= 0) {
  outSaida.textContent = "Idade inválida!";
  return;
 };

 const sublinhado = gerarTracos(nomeAtleta);
 const categoria = verCategoria(idadeAtleta);

 outSaida.textContent = `${nomeAtleta}\n${sublinhado}\nCategoria: ${categoria}`;

 frm.reset();
 inNome.focus();
});

frm.btReset.addEventListener("click", () => {
 location.reload();
});