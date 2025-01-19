"use strict";

const frm = document.querySelector("form");
const outCavalo = document.querySelector("#outCavalo");
const outLista = document.querySelector("pre");

const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];

class GestorDeApostas {
 constructor(cavalos) {
  this.cavalos = cavalos;
  this.apostas = [];
 }

 obterCavalo(num) {
  return this.cavalos[num - 1] ?? null;
 }

 validarCavalo(num) {
  return Number.isInteger(num) && num >= 1 && num <= this.cavalos.length;
 }

 registrarApostas(cavalo, valor) {
  if (!this.validarCavalo(cavalo) || valor <= 0) {
   throw new Error("Aposta inválida!");
  }
  this.apostas.push({ cavalo, valor });
 }

 contarApostas(cavalo) {
  return this.apostas.filter((aposta) => aposta.cavalo === cavalo).length;
 }

 totalizarApostas(cavalo) {
  return this.apostas
   .filter((aposta) => aposta.cavalo === cavalo)
   .reduce((total, aposta) => total + aposta.valor, 0);
 }

 gerarResumo() {
  const somaApostas = Array(this.cavalos.length).fill(0);
  this.apostas.forEach((aposta) => {
   somaApostas[aposta.cavalo - 1] += aposta.valor;
  });

  return this.cavalos
   .map(
    (cavalo, i) =>
     `${i + 1}. ${cavalo.padEnd(20)} R$: ${somaApostas[i].toFixed(2)}`
   )
   .join("\n");
 }

 gerarResultado(ganhador) {
  if (!this.validarCavalo(ganhador)) {
   throw new Error("Cavalo inválido!");
  }

  const total = this.apostas.reduce((ac, aposta) => ac + aposta.valor, 0);
  return `
  Resultado Final do Páreo
  ${"-".repeat(30)}
  Nº Total de Apostas: ${this.apostas.length}
  Total Geral R$: ${total.toFixed(2)}

  Ganhador Nº ${ganhador} - ${this.obterCavalo(ganhador)}
  Nº de Apostas: ${this.contarApostas(ganhador)}
  Total Apostado R$: ${this.totalizarApostas(ganhador).toFixed(2)}
  `.trim();
 }
};

const gestor = new GestorDeApostas(CAVALOS);


frm.inCavalo.addEventListener("blur", () => {
 const numCavalos = parseInt(frm.inCavalo.value.trim(), 10);

 if (!gestor.validarCavalo(numCavalos)) {
  outCavalo.textContent = '';
  return;
 };

 const nome = gestor.obterCavalo(numCavalos);
 const contaNum = gestor.contarApostas(numCavalos);
 const total = gestor.totalizarApostas(numCavalos);
 outCavalo.textContent = `${nome} (Apostas: ${contaNum}) - R$: ${total.toFixed(2)}`;
});

frm.addEventListener("submit", (e) => {
 e.preventDefault();

 const cavalo = parseInt(frm.inCavalo.value.trim(), 10);
 const valor = parseFloat(frm.inValor.value.trim());

 try {
  gestor.registrarApostas(cavalo, valor);
  outLista.textContent = `Aposta Realizada\n${"-".repeat(25)}\n${gestor.gerarResumo()}`;
  frm.reset();
  frm.inCavalo.focus();
 } catch (err) {
  alert(err.message);
 };
});

frm.btResumo.addEventListener("click", () => {
 const resumo = gestor.gerarResumo();
 outLista.textContent = `Resumo das Apostas\n${'-'.repeat(35)}\n${resumo}`;
});

frm.btGanhador.addEventListener("click", () => {
 const ganhador = parseInt(prompt("Nº Cavalo Ganhador: "), 10);

 try {
  const resultado = gestor.gerarResultado(ganhador);
  outLista.textContent = resultado;

  frm.btApostar.disabled = true;
  frm.btGanhador.disabled = true;
  frm.btNovo.focus();
 } catch (err) {
  alert(err.message);
 }
});

frm.btNovo.addEventListener("click", () => {
 window.location.reload();
});
