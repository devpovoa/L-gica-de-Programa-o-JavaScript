"use strict";

const frm = document.querySelector("form");
const resp = document.querySelector("#outResposta");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inValor.value);

    let numDivisores = 0;
    for (let i = 2; i <= numero / 2; i++) {
        if (numero % i == 0) {
            numDivisores = 1;
            break;
        }
    };

    if (numero > 1 && !numDivisores) {
        resp.textContent = `${numero} É primo.`;
    } else {
        resp.textContent = `${numero} Não é primo.`;
    }

    frm.inValor.value = '';
    frm.inValor.focus();
});

frm.addEventListener("reset", () => {
    resp.textContent = '';
    frm.inValor.focus();
});

