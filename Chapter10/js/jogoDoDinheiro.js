"use strict";

const frm = document.querySelector("form");
const dvMoedas = document.querySelector("#quadro-moedas");

window.addEventListener("load", () => {

 const num1_00 = Math.ceil(Math.random() * 5);
 const num0_50 = Math.ceil(Math.random() * 5);
 const num0_25 = Math.ceil(Math.random() * 5);
 const num0_10 = Math.ceil(Math.random() * 5);

 const alt1_00 = "Moedas de um real";
 const alt0_50 = "Moedas de Cinquenta Centavos";
 const alt0_25 = "Moedas de Vinte e Cinco Centavos";
 const alt0_10 = "Moedas de de Dez Centavos";

 CriarMoedas(num1_00, "01.jpeg", alt1_00, "moeda1-00");
 CriarMoedas(num0_50, "50.jpeg", alt0_50, "moeda0-50");
 CriarMoedas(num0_25, "25.jpeg", alt0_25, "moeda0-25");
 CriarMoedas(num0_10, "10.jpeg", alt0_10, "moeda0-10");

});

const CriarMoedas = (num, moeda, textoAlt, classe) => {

 for (let i = 1; i <= num; i++) {
  const novaMoeda = document.createElement("img");
  novaMoeda.src = `img/${moeda}`;
  novaMoeda.textContent = textoAlt;
  novaMoeda.className = classe;
  dvMoedas.appendChild(novaMoeda);
 };

 const br = document.createElement("br");
 dvMoedas.appendChild(br);
};

frm.addEventListener("submit", (e) => {
 e.preventDefault();

 const soma = parseFloat(frm.inValor.value.trim());
 const moedas = dvMoedas.querySelectorAll("img");

 let totalMoedas = 0;
 for (const moeda of moedas) {
  if (moeda.className == "moeda1-00") {
   totalMoedas += 1;
  } else if (moeda.className == "moeda0-50") {
   totalMoedas += 0.5;
  } else if (moeda.className == "moeda0-25") {
   totalMoedas += 0.25;
  } else {
   totalMoedas += 0.1;
  };
 };

 const div = document.createElement("div");
 const h3 = document.createElement("h3");

 let mensagem;
 if (soma == totalMoedas.toFixed(2)) {
  div.className = "alert alert-success";
  mensagem = "Parabéns!! Você acertou!";
 } else {
  div.className = "alert alert-danger";
  mensagem = `Ops... A resposta correta é ${totalMoedas.toFixed(2)}`;
 };

 const texto = document.createTextNode(mensagem);

 dvMoedas.appendChild(div).appendChild(h3).appendChild(texto);

 frm.submit.disabled = true;
});

frm.addEventListener("reset", () => {
 window.location.reload();
});