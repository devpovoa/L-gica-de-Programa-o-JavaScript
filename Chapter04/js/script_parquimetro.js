"use strict";

const frm = document.querySelector("form");
const resp1 = document.querySelector(".outTempo");
const resp2 = document.querySelector(".outTroco");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const valor = frm.inValor.value;


    let tempo;
    let troco;
    if (valor >= 3.00) {
        tempo = 120;
        troco = valor - 3.00;
    } else if (valor >= 1.75) {
        tempo = 60;
        troco = valor - 1.75;
    } else {
        tempo = 60;
        troco = valor - 1.00;
    }

    resp1.textContent = `Tempo: ${tempo} min`;

    if (troco > 0) {
        resp2.textContent = `Troco R$: ${troco.toFixed(2)}`;
    }

    frm.inValor.focus();
    frm.inValor.value = '';
});

frm.addEventListener("reset", () => {
    resp1.textContent = '';
    resp2.textContent = '';
    frm.inValor.focus();
});


