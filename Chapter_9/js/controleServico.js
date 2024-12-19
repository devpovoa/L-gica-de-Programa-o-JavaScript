"use strict";

const frm = document.querySelector("form");
const counterService = document.querySelector(".counterService");
const runningServices = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
 e.preventDefault();

 const servico = frm.inServico.value.trim();

 if (localStorage.getItem("automotiveServices")) {
  localStorage.setItem("automotiveServices", localStorage.getItem("automotiveServices") + ";" + servico);
 } else {
  localStorage.setItem("automotiveServices", servico);
 };

 mostrarPendentes();

 frm.reset();
 frm.inServico.focus();
});

const mostrarPendentes = () => {
 let numPendentes;

 if (localStorage.getItem("automotiveServices")) {
  numPendentes = localStorage.getItem("automotiveServices").split(";").length;
 } else {
  numPendentes = 0;
 };

 counterService.textContent = numPendentes;
};

window.addEventListener("load", mostrarPendentes);

frm.btExecutar.addEventListener("click", () => {

 if (!localStorage.getItem("automotiveServices")) {
  alert("Não há serviços pendentes para executar.");
  localStorage.removeItem("automotiveServices");
  return;
 };

 const servicos = localStorage.getItem("automotiveServices").split(";");
 const emExecucao = servicos.shift();

 runningServices.textContent = emExecucao;
 localStorage.setItem("automotiveServices", servicos.join(";"));
 mostrarPendentes();
});