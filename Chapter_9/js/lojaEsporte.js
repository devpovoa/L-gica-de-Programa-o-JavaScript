"use strict";

const frm = document.querySelector("form");
const imClube = document.querySelector("#imgClube");
const dvTitulo = document.querySelector("#divTitulo");

const { rbBasil, rbFlamengo, rbBotafogo } = frm;

const clubes = {
 Brasil: {
  radio: rbBasil,
  cor: "cores-Brasil",
  img: "img/brasil.png",
  alt: "Símbolo do Brasil",
 },
 Flamengo: {
  radio: rbFlamengo,
  cor: "cores-Flamengo",
  img: "img/flamengo.png",
  alt: "Símbolo do Flamengo",
 },
 Botafogo: {
  radio: rbBotafogo,
  cor: "cores-Botafogo",
  img: "img/botafogo.png",
  alt: "Símbolo do Botafogo",
 },
};

const trocarClube = () => {
 const clubeSelecionado = Object.keys(clubes).find(clube => clubes[clube].radio.checked);

 if (clubeSelecionado) {
  const { cor, img, alt } = clubes[clubeSelecionado];

  dvTitulo.className = `row ${cor}`;
  imClube.src = img;
  imClube.className = "img-fluid";
  imClube.alt = alt;

  localStorage.setItem("clube", clubeSelecionado);
 }
};

Object.values(clubes).forEach(clube => {
 clube.radio.addEventListener("change", trocarClube);
});

const verificarClube = () => {
 const clube = localStorage.getItem("clube");
 if (clube && clubes[clube]) {
  clubes[clube].radio.checked = true;
  trocarClube();
 }
};

window.addEventListener("load", verificarClube);
