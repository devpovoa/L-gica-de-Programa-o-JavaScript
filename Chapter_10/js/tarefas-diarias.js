"use strict";

const frm = document.querySelector("form");
const quadroTarefas = document.querySelector("#quadro-tarefas");

frm.addEventListener("submit", (e) => {
 e.preventDefault();

 const tarefa = frm.inTarefa.value.trim();

 const h5 = document.createElement("h5");
 const texto = document.createTextNode(tarefa);

 quadroTarefas.appendChild(h5).appendChild(texto);

 frm.inTarefa.value = '';
 frm.inTarefa.focus();
});

frm.btSelecionar.addEventListener("click", () => {

 const tarefas = document.querySelectorAll("h5");

 if (tarefas.length === 0) {
  alert("Não há farefas para selecionar.");
  return;
 };

 let aux = - 1;

 for (let i = 0; i < tarefas.length; i++) {
  if (tarefas[i].className == "tarefa-selecionada") {
   tarefas[i].className = "tarefa-normal";
   aux = i;
   break;
  };
 };

 if (aux == tarefas.length - 1) {
  aux = - 1;
 };

 tarefas[aux + 1].className = "tarefa-selecionada";
});

frm.btRetirar.addEventListener("click", () => {

 const tarefas = document.querySelectorAll("h5");

 let aux = - 1;

 tarefas.forEach((tarefa, i) => {
  if (tarefa.className == "tarefa-selecionada") {
   aux = i;
  };
 });

 if (aux == - 1) {
  alert("Selecione uma tarefa para removê-la...");
  return;
 };

 if (confirm(`Confirma Exclusão de "${tarefas[aux].textContent}"?`)) {
  quadroTarefas.removeChild(tarefas[aux]);
 };
});

frm.btGravar.addEventListener("click", () => {

 const tarefas = document.querySelectorAll("h5");

 if (tarefas.length === 0) {
  alert("Não há tarefas para serem salvas");
  return;
 };

 let dados = '';

 tarefas.forEach(tarefa => {
  dados += tarefa.textContent + ";";
 });

 localStorage.setItem("tarefasDia", dados.slice(0, -1));

 if (localStorage.getItem("tarefasDia")) {
  alert("OK! Tarefas Salvas");
 };
});

window.addEventListener("load", () => {
 if (localStorage.getItem("tarefasDia")) {
  const dados = localStorage.getItem("tarefasDia").split(";");

  dados.forEach(dado => {
   const h5 = document.createElement("h5");
   const texto = document.createTextNode(dado);
   quadroTarefas.appendChild(texto).appendChild(h5);
  });
 };
});