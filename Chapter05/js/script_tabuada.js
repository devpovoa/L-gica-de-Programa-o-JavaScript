"use strict";

const frm = document.querySelector("form");
const resp = document.querySelector("#outTabuada");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inValor.value);

    let resposta = '';
    for (let i = 1; i <= 10; i++) {
        resposta += `${numero} x ${i} = ${numero * i}\n`;
    }

    resp.textContent = resposta;

    frm.inValor.focus();
    frm.inValor.value = '';
});


frm.addEventListener("reset", () => {
    resp.textContent = '';
});
