"use strict";

const frm = document.querySelector("form");
const resp = document.querySelector("#outSaida");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);

    let estrelas = '';
    for (let i = 1; i <= numero; i++) {
        if (i % 2 == 1) {
            estrelas = `${estrelas + '*'}`;
        } else {
            estrelas = `${estrelas + '-'}`;
        }
    };

    resp.textContent = estrelas;

    frm.inNumero.value = '';
    frm.inNumero.focus();
});

frm.addEventListener("reset", () => {
    resp.textContent = '';
    frm.inNumero.focus();
});

