"use strict";

const form = document.querySelector('form');
const radioSim = document.querySelector('#btSim');
const radioNao = document.querySelector('#btNao');
const convenioDiv = document.querySelector('#dConvenio');
const convenio = document.querySelector('#convenio');
const outDesconto = form.outDesconto;
const outValor = form.outValor;

const calcularDesconto = (valor, taxa) => valor * (taxa / 100);

const toggleConvenioVisibility = () => {
 convenioDiv.classList.toggle('oculta', !radioSim.checked);
};

radioSim.addEventListener("change", toggleConvenioVisibility);
radioNao.addEventListener("change", toggleConvenioVisibility);

const aplicarDesconto = (valor) => {
 let desconto = 0;

 if (radioSim.checked) {
  desconto = convenio.value === 'amigo' ? calcularDesconto(valor, 20) : calcularDesconto(valor, 50)
 } else {
  desconto = calcularDesconto(valor, 10);
 };

 const valorFinal = valor - desconto;
 outDesconto.value = desconto.toFixed(2);
 outValor.value = valorFinal.toFixed(2);
};

form.addEventListener('submit', (event) => {
 event.preventDefault();

 const valor = parseFloat(form.inValor.value);

 if (isNaN(valor) || valor <= 0) {
  alert("Por favor, insira um valor válido.");
  return;
 }

 aplicarDesconto(valor);

});