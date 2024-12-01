"use strict";

const inRadios = document.querySelectorAll("input");
const imClube = document.querySelector("#imgClube");
const dvTitulo = document.querySelector("#divTitulo");

const trocaClube = () => {
 const clubes = ["Brasil", "Flamengo", "Botafogo"];

 let radioSelecionado = Array.from(inRadios).findIndex(radio => radio.checked);

 const clubeSelecionado = radioSelecionado <= 2 ? clubes[radioSelecionado] : null;

 if (clubeSelecionado) {
  dvTitulo.className = `row cores-${clubeSelecionado}`;
  imClube.src = `img/${clubeSelecionado.toLowerCase()}.png`;
  imClube.className = `img-fluid`;
  imClube.alt = `Símbolo do ${clubeSelecionado}`;
  localStorage.setItem("clube", clubeSelecionado);
 } else {
  dvTitulo.className = "row";
  imClube.className = "d-none";
  imClube.alt = "";
  localStorage.removeItem("clube");
 };
};

inRadios.forEach(radio => {
 radio.addEventListener("change", trocaClube);
});

const verificarClube = () => {

 const clube = localStorage.getItem("clube");

 if (clube) {
  const clubesMap = {
   "Brasil": 0,
   "Flamengo": 1,
   // "Botafogo": 2
  };

  const clubeIndex = clubesMap[clube] ?? 2;
  inRadios[clubeIndex].checked = true;
  trocaClube();
 }
};

window.addEventListener("load", verificarClube);