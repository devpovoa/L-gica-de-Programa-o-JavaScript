"use strict";

const frm = document.querySelector("form");
const imClube = document.querySelector("#imgClube");
const dvTitulo = document.querySelector("#divTitulo");
const contaVisita = document.querySelectorAll("h5")[1];

const contaVisitas = () => {
 let contador = 0;

 if (localStorage.getItem("lojaContador")) {
  contador += parseInt(localStorage.getItem("lojaContador"));
 };

 contador++;

 const saida = contador == 1 ? `Muito Bem-Vindo! Esta é sua primeira visita ao nosso site.` : `Que bom que você voltou! Esta é a sua visita de número ${contador} ao nosso site.`;

 contaVisita.textContent = saida;
 localStorage.setItem("lojaContador", contador);
};

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
 };

 contaVisitas();
};

window.addEventListener("load", verificarClube);
