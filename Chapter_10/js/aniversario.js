"use strict";

const frm = document.querySelector("form");
const QrNumeros = document.querySelector("#quadro-numeros");

frm.addEventListener("submit", (e) => {
 e.preventDefault();

 const idade = parseInt(frm.inIdade.value.trim());
 const strIdade = idade.toString();

 for (const num of strIdade) {
  const img = document.createElement("img");
  img.src = `img/${num}.jpg`;
  img.alt = `Vela de ${num} anos`;
  QrNumeros.appendChild(img);
 };

 btExibir.disabled = true;
});

frm.addEventListener("reset", () => {
 location.reload();
});