"use strict";

const frm = document.querySelector("form");
const resp = document.querySelector("#outSaida");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fruta = String(frm.inFruta.value);
    const num = Number(frm.inNumero.value);

    let saida = `${fruta}`;
    for (let i = num - 1; i > 0; i--) {
        saida += `${' * ' + fruta}`;
    }

    resp.textContent = `${saida}`;

    frm.inFruta.value = '';
    frm.inNumero.value = '';
    frm.inFruta.focus();
});

frm.addEventListener("reset", () => {
    resp.textContent = '';
    frm.inFruta.focus();
});



