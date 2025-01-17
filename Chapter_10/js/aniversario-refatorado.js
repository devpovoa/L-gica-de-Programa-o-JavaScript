"use strict";

const frm = document.querySelector("form");
const QrNumeros = document.querySelector("#quadro-numeros");


frm.addEventListener("submit", (e) => {
 e.preventDefault();


 const idadeInput = frm.inIdade.value.trim();
 if (!idadeInput || isNaN(idadeInput) || parseInt(idadeInput) <= 0) {
  alert("Por favor, insira uma idade válida entre 1 e 120.");
  return;
 }

 const idade = parseInt(idadeInput);
 const strIdade = idade.toString();


 const imagensExistentes = QrNumeros.querySelectorAll("img");
 imagensExistentes.forEach((img) => img.remove());


 for (const num of strIdade) {
  const img = document.createElement("img");
  img.src = `/img/${num}.jpg`;
  img.alt = `Vela de ${num} anos`;
  img.classList.add("idade-img");
  QrNumeros.appendChild(img);
 }


 frm.btExibir.disabled = true;
});


frm.addEventListener("reset", () => {

 const imagensExistentes = QrNumeros.querySelectorAll("img");
 imagensExistentes.forEach((img) => img.remove());

 frm.btExibir.disabled = false;
});
