"use strict";

const frm = document.querySelector("form");
const resp = document.querySelector("span");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeCompleto = frm.inNome.value.trim();

    if (!nomeCompleto.includes(" ")) {
        alert("Informe o nome completo...");
        return;
    }

    const primeiroNome = nomeCompleto.indexOf(" ");
    const ultimoNome = nomeCompleto.lastIndexOf(" ");
    const cracha = nomeCompleto.substr(0, primeiroNome) + nomeCompleto.substr(ultimoNome);

    resp.textContent = cracha;
});