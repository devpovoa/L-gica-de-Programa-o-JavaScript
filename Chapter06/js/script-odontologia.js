"use strict";

const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = String(frm.inPaciente.value);

    pacientes.push(nome);

    let lista = '';
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));

    respLista.textContent = lista;
    frm.inPaciente.value = '';
    frm.inPaciente.focus();
});

frm.btUrgencia.addEventListener("click", () => {

    if (!frm.checkValidity()) {
        alert("Informe o nome do paciente a ser atendido em caráter de urgência.");
        frm.inPaciente.focus();
        return;
    }

    const nome = String(frm.inPaciente.value);

    pacientes.unshift(nome);

    let lista = '';
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));

    respLista.textContent = lista;
    frm.inPaciente.value = '';
    frm.inPaciente.focus();
});

frm.btAtender.addEventListener("click", () => {

    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera.");
        frm.inPaciente.focus();
        return;
    }

    const atender = pacientes.shift();
    respNome.textContent = atender;

    let lista = '';
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));

    respLista.textContent = lista;
});















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

