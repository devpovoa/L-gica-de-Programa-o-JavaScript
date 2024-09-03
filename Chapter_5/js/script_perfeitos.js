"use strict";

const frm = document.querySelector("form");
const resp1 = document.querySelector("#outSaida");
const resp2 = document.querySelector("#outResposta");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);

    let divisores = `Divisores do ${numero}: 1`;
    let soma = 1;

    for (let i = 2; i <= numero / 2; i++) {
        if (numero % i == 0) {
            divisores += `${', ' + i}`;
            soma += i;
        }
    }

    divisores += ` (Soma: ${soma})`;

    resp1.textContent = divisores;

    if (numero == soma) {
        resp2.textContent = `${numero} É um Número Perfeito.`;
    } else {
        resp2.textContent = `${numero} Não é um Número Perfeito.`;
    }

    frm.inNumero.focus();
    frm.inNumero.value = ''

});

frm.addEventListener("reset", () => {
    frm.inNumero.focus();
    resp1.textContent = '';
    resp2.textContent = '';
});

