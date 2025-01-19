"use strict";

const frm = document.querySelector("form");
const resp = document.querySelector("#outResultado");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const estrelas = Number(frm.inNumero.value);

    let acumuladora = '';
    for (let i = 0; i <= estrelas; i++) {
        for (let j = 1; j <= i; j++) {
            acumuladora += `${'⭐'}`;
        };
        acumuladora += '\n';
    }

    resp.textContent = acumuladora;

    frm.inNumero.focus();
    frm.inNumero.value = '';

});

frm.addEventListener("reset", () => {
    frm.inNumero.focus();
    resp.textContent = '';
});


