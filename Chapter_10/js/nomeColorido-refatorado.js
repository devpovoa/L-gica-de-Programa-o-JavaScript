"use strict";

const frm = document.querySelector("form");
const dvNome = document.querySelector("#dvNome");

const gerarCorAleatoria = (cores) => {
 const indiceAleatorio = Math.floor(Math.random() * cores.length);
 return cores[indiceAleatorio];
};

const limparElementos = (container, seletor) => {
 const elementos = container.querySelectorAll(seletor);
 elementos.forEach((elemento) => container.removeChild(elemento));
};

const adicionarPartesNome = (partes, container, cores) => {
 partes.forEach((parte) => {
  const h3 = document.createElement("h3");
  h3.textContent = parte;
  h3.style.color = gerarCorAleatoria(cores);
  container.appendChild(h3);
 });
};


frm.addEventListener("submit", (e) => {
 e.preventDefault();

 const nome = frm.inNome.value.trim();
 const partes = nome.split(" ");

 if (partes.length === 1) {
  alert("Informe o nome completo");
  return;
 }

 limparElementos(dvNome, "h3");

 const cores = ["blue", "red", "yellow", "orange", "chocolate", "deeppink", "purple", "violet", "aquamarine"];

 adicionarPartesNome(partes, dvNome, cores);
});

window.addEventListener("reset", () => {
 location.reload();
});
