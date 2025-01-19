"use strict";

const frm = document.querySelector("form");
const outCavalo = document.querySelector("#outCavalo");
const outLista = document.querySelector("pre");

const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];

const APOSTAS = [];

const obterCavalo = (num) => {
 const posicao = num - 1;
 return CAVALOS[posicao];
};

const validarCavalo = (num) => {
 return num >= 1 && num <= CAVALOS.length;
};

const contarApostas = (num) => {
 let contador = 0;
 for (const aposta of APOSTAS) {
  if (aposta.cavalo == num) {
   contador++;
  };
 };
 return contador;
};

const totalizarApostas = (num) => {
 let total = 0;
 for (const aposta of APOSTAS) {
  if (aposta.cavalo == num) {
   total += aposta.valor;
  }
 };
 return total;
};

frm.inCavalo.addEventListener("focus", () => {
 frm.inCavalo.value = "";
 outCavalo.textContent = "";
});

frm.inCavalo.addEventListener("blur", () => {
 if (frm.inCavalo.value == "") {
  outCavalo.textContent = "";
  return;
 };

 const numCavalo = parseInt(frm.inCavalo.value);

 if (!validarCavalo(numCavalo)) {
  alert("Nº do cavalo inválido.");
  frm.inCavalo.focus();
  return;
 };

 const nome = obterCavalo(numCavalo);
 const contaNum = contarApostas(numCavalo);
 const total = totalizarApostas(numCavalo);

 outCavalo.textContent = `${nome} (Apostas: ${contaNum} - R$:${total.toFixed(2)})`;
});

frm.addEventListener("submit", (e) => {
 e.preventDefault();

 const cavalo = parseInt(frm.inCavalo.value.trim());
 const valor = parseFloat(frm.inValor.value.trim());

 APOSTAS.push({ cavalo, valor });

 let lista = `Apostas Realizadas\n${"-".repeat(25)}\n`;
 for (const aposta of APOSTAS) {
  lista += `Nº ${aposta.cavalo} ${obterCavalo(aposta.cavalo)} - R$:${aposta.valor.toFixed(2)}\n`;
 };

 outLista.textContent = lista;
 frm.reset();
 frm.inCavalo.focus();
});

frm.btResumo.addEventListener("click", () => {

 const somaApostas = [0, 0, 0, 0, 0, 0];

 for (const aposta of APOSTAS) {
  somaApostas[aposta.cavalo - 1] += aposta.valor;
 };

 let resposta = `Nº Cavalo ${'.'.repeat(15)}R$ Apostado\n${'-'.repeat(35)}\n`;
 CAVALOS.forEach((cavalo, i) => {
  resposta += `${i + 1}. ${cavalo.padEnd(20)} ${somaApostas[i].toFixed(2).padStart(11)}\n`;
 });
 outLista.textContent = resposta;
});

frm.btGanhador.addEventListener("click", () => {

 const ganhador = parseInt(prompt("Nº Cavalo Ganhador: "));

 if (isNaN(ganhador) || !validarCavalo(ganhador)) {
  alert("Cavalo Inválido");
  return;
 };

 const total = APOSTAS.reduce((ac, aposta) => ac + aposta.valor, 0);

 let resumo = `Resultado Final do Páreo\n${'-'.repeat(30)}\n`;

 resumo += `Nº Total de Apostas: ${APOSTAS.length}\nTotal Geral R$: ${total.toFixed(2)}\n\nGanhador Nº ${ganhador} - ${obterCavalo(ganhador)}\n\nNº de Apostas: ${contarApostas(ganhador)}\nTotal Apostado R$: ${totalizarApostas(ganhador).toFixed(2)}`;

 outLista.textContent = resumo;
 frm.btApostar.disabled = true;
 frm.btGanhador.disabled = true;
 frm.btNovo.focus();
});

frm.btNovo.addEventListener("click", () => {
 window.location.reload();
});