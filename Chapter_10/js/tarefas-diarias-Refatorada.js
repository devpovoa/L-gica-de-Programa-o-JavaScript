"use strict";

const frm = document.querySelector("form");
const quadroTarefas = document.querySelector("#quadro-tarefas");


const criarElementoTarefa = (texto) => {
 const h5 = document.createElement("h5");
 h5.textContent = texto;
 h5.className = "tarefa-normal";
 return h5;
};

const carregarTarefasSalvas = () => {
 const tarefasSalvas = localStorage.getItem("tarefasDia");
 if (tarefasSalvas) {
  tarefasSalvas.split(";").forEach(tarefa => {
   quadroTarefas.appendChild(criarElementoTarefa(tarefa));
  });
 };
};

const salvarTarefas = () => {
 const tarefas = [...document.querySelectorAll("h5")];
 if (tarefas.length === 0) {
  alert("Não há tarefas para serem salvas");
  localStorage.removeItem("tarefasDia");
  return;
 };

 const dados = tarefas.map(tarefa => tarefa.textContent).join(";");
 localStorage.setItem("tarefasDia", dados);
 alert("OK! Tarefas Salvas");
};

const selecionarTarefa = () => {
 const tarefas = [...document.querySelectorAll("h5")];
 if (tarefas.length === 0) {
  alert("Não há tarefas para selecionar.");
  return;
 };

 const tarefaSelecionada = tarefas.find(tarefa => tarefa.className === "tarefa-selecionada");
 if (tarefaSelecionada) {
  tarefaSelecionada.className = "tarefa-normal";
 };

 const proximaTarefa = tarefaSelecionada ? tarefas[(tarefas.indexOf(tarefaSelecionada) + 1) % tarefas.length] : tarefas[0];
 proximaTarefa.className = "tarefa-selecionada";
};

const removerTarefaSelecionada = () => {
 const tarefaSelecionada = document.querySelector("h5.tarefa-selecionada");
 if (!tarefaSelecionada) {
  alert("Selecione uma tarefa para removê-la...");
  return;
 };

 if (confirm(`Confirmar Exclusão de "${tarefaSelecionada.textContent}"?`)) {
  quadroTarefas.removeChild(tarefaSelecionada);
 };

 const tarefasRestantes = document.querySelectorAll("h5");
 if (tarefasRestantes.length === 0) {
  localStorage.removeItem("tarefasDia");
 };
};

frm.addEventListener("submit", (e) => {
 e.preventDefault();

 const tarefa = frm.inTarefa.value.trim();
 if (tarefa) {
  quadroTarefas.appendChild(criarElementoTarefa(tarefa));
  frm.inTarefa.value = "";
  frm.inTarefa.focus();
 };
});

frm.btSelecionar.addEventListener("click", selecionarTarefa);
frm.btRetirar.addEventListener("click", removerTarefaSelecionada);
frm.btGravar.addEventListener("click", salvarTarefas);

window.addEventListener("load", carregarTarefasSalvas);