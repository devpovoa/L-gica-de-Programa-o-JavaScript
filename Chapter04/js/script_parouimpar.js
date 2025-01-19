"use strict";

const frm = document.querySelector("form");
const resp = document.querySelector(".outResposta");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);

    const verifica = numero % 2 == 0 ? `é par` : `é ímpar`;
    resp.textContent = `${numero} ${verifica}`;

    frm.inNumero.focus();
    frm.inNumero.value = '';

});

frm.addEventListener("reset", () => {
    resp.textContent = '';
});

