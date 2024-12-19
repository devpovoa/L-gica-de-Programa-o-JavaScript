"use strict";

const frm = document.querySelector("form");
const counterService = document.querySelector(".counterService");
const runningServices = document.querySelector("h4");

const getServices = () => localStorage.getItem("automotiveServices")?.split(";") || [];

const saveServices = (services) => {

 const validator = services.length > 0 ? localStorage.setItem("automotiveServices", services.join(";")) : localStorage.removeItem("automotiveServices");
 return validator;
};

const verificarDuplicidade = (service) => {
 const services = getServices();
 return services.includes(service);
};

const mostrarPendentes = () => {
 const services = getServices();
 counterService.textContent = services.length;
};


frm.btExecutar.addEventListener("click", () => {
 const services = getServices();

 if (services.length === 0) {
  alert("Não há serviços pendentes para executar.");
  return;
 };

 const emExecucao = services.shift();
 runningServices.textContent = emExecucao;
 saveServices(services);

 mostrarPendentes();
});

frm.addEventListener("submit", (e) => {
 e.preventDefault();

 const servico = frm.inServico.value.trim();

 if (!servico) {
  alert("Por favor, insira um serviço válido.");
  return;
 };

 if (verificarDuplicidade(servico)) {
  alert("Este serviço já está na lista de pendentes.");
  return;
 }

 const services = getServices();
 services.push(servico);
 saveServices(services);

 mostrarPendentes();

 frm.reset();
 frm.inServico.focus();
});

window.addEventListener("load", mostrarPendentes);
