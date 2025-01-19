"use strict";

const frm = document.querySelector("form");
const dvNome = document.querySelector("#dvNome");

frm.addEventListener("submit", (e) => {
 e.preventDefault();

 const nome = frm.inNome.value.trim();
 const partes = nome.split(" ");

 if (partes.length == 1) {
  alert("Informe o nome completo");
  return;
 };

 const listaH3 = document.querySelectorAll("h3");
 for (let i = listaH3.length - 1; i >= 0; i--) {
  dvNome.removeChild(listaH3[i]);
 };

 const cores = ["blue", "red", "yellow", "orange", "chocolate", "deeppink", "purple", "violet", "aquamarine"];

 for (const parte of partes) {
  const h3 = document.createElement("h3");
  const texto = document.createTextNode(parte);
  h3.appendChild(texto);

  const corSorteada = Math.floor(Math.random() * 10);
  h3.style.color = cores[corSorteada];
  dvNome.appendChild(h3);
 };

});

window.addEventListener("reset", () => {
 location.reload();
});