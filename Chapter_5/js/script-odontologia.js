"use strict";

const INPACIENTE = document.getElementById("inPaciente");
const OUTATENDIMENTO = document.getElementById("outAtendimento");
const OUTLISTA = document.getElementById("outLista");
const OUTERRO = document.getElementById("outErro");
const BTADICIONAR = document.getElementById("btAdicionar");
const BTURGENCIA = document.getElementById("btUrgencia");
const BTATENDER = document.getElementById("btAtender");

let paciente = [];

function adicionarPaciente() {

    let nome = String(INPACIENTE.value);

    if (nome == '') {
        OUTERRO.textContent = "Informe o nome do paciente.";
        INPACIENTE.focus();
        return;
    }

    paciente.push(nome);

    let lista = "";
    for (let i = 0; i < paciente.length; i++) {
        lista += `${i + 1}. ${paciente[i]}\n`;
    }

    OUTLISTA.textContent = lista;
    INPACIENTE.value = '';
    INPACIENTE.focus();
    OUTERRO.textContent = '';

}

function ugenciaPaciente() {

    let nome = String(INPACIENTE.value);

    if (nome == '') {
        OUTERRO.textContent = "Informe o nome do paciente.";
        INPACIENTE.focus();
        return;
    }

    paciente.unshift(nome);

    let lista = "";
    for (let i = 0; i < paciente.length; i++) {
        lista += `${i + 1}. ${paciente[i]}\n`;
    }

    OUTLISTA.textContent = lista;
    INPACIENTE.value = '';
    INPACIENTE.focus();
    OUTERRO.textContent = '';

}

function atenderPaciente() {

    if (paciente.length == 0) {
        OUTERRO.textContent = "Não há pacientes na lista de espera."
        INPACIENTE.focus();
        return;
    }

    let atender = paciente.shift();
    OUTATENDIMENTO.textContent = atender;

    let lista = "";
    for (let i = 0; i < paciente.length; i++) {
        lista += `${i + 1}. ${paciente[i]}\n`;
    }

    OUTLISTA.textContent = lista;
    OUTERRO.textContent = '';
}

BTADICIONAR.addEventListener("click", adicionarPaciente);
BTURGENCIA.addEventListener("click", ugenciaPaciente);
BTATENDER.addEventListener("click", atenderPaciente);