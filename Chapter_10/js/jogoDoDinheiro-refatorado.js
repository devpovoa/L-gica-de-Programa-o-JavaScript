"use strict";

const frm = document.querySelector("form");
const dvMoedas = document.querySelector("#quadro-moedas");

window.addEventListener("load", () => {

 const moedas = [
  { quantidade: Math.ceil(Math.random() * 5), src: "01.jpeg", alt: "Moedas de um real", classe: "moeda1-00" },
  { quantidade: Math.ceil(Math.random() * 5), src: "50.jpeg", alt: "Moedas de Cinquenta Centavos", classe: "moeda0-50" },
  { quantidade: Math.ceil(Math.random() * 5), src: "25.jpeg", alt: "Moedas de Vinte e Cinco Centavos", classe: "moeda0-25" },
  { quantidade: Math.ceil(Math.random() * 5), src: "10.jpeg", alt: "Moedas de Dez Centavos", classe: "moeda0-10" }
 ];

 moedas.forEach(({ quantidade, src, alt, classe }) => {
  criarMoedas(quantidade, src, alt, classe);
 });
});

const criarMoedas = (quantidade, src, alt, classe) => {

 for (let i = 0; i < quantidade; i++) {
  const novaMoeda = document.createElement("img");
  novaMoeda.src = `img/${src}`;
  novaMoeda.alt = alt;
  novaMoeda.className = classe;
  dvMoedas.appendChild(novaMoeda);
 }

 const br = document.createElement("br");
 dvMoedas.appendChild(br);
};

const calcularTotalMoedas = (moedas) => {

 let total = 0;
 moedas.forEach(moeda => {
  switch (moeda.className) {
   case "moeda1-00":
    total += 1;
    break;
   case "moeda0-50":
    total += 0.5;
    break;
   case "moeda0-25":
    total += 0.25;
    break;
   case "moeda0-10":
    total += 0.1;
    break;
  }
 });
 return total.toFixed(2);
};

frm.addEventListener("submit", (e) => {
 e.preventDefault();

 const soma = parseFloat(frm.inValor.value.trim());
 const moedas = Array.from(dvMoedas.querySelectorAll("img"));
 const totalMoedas = calcularTotalMoedas(moedas);

 const div = document.createElement("div");
 div.className = soma === parseFloat(totalMoedas) ? "alert alert-success" : "alert alert-danger";

 const mensagem = soma === parseFloat(totalMoedas) ? "Parabéns!! Você acertou" : `Ops... A resposta correta é ${totalMoedas}`;

 const h3 = document.createElement("h3");
 h3.textContent = mensagem;

 dvMoedas.appendChild(div).appendChild(h3);
 frm.submit.disabled = true;
});

frm.addEventListener("reset", () => {
 window.location.reload();
});