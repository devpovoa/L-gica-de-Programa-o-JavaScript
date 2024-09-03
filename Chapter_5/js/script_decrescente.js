"use strict";

const frm = document.querySelector("form");
const resp = document.querySelector("#outNumeros");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inValor.value);

    let resposta = `Entre ${numero} e 1: ${numero}`;
    for (let i = numero - 1; i > 0; i--) {
        resposta += `${', ' + i}`;
    };

    resp.textContent = `${resposta + '.'}`;

    frm.inValor.focus();
    frm.inValor.value = '';
});

frm.addEventListener("reset", () => {
    resp.textContent = '';
});