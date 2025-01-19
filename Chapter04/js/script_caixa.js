"use strict";

const frm = document.querySelector("form");
const resp1 = document.querySelector(".outResp1");
const resp2 = document.querySelector(".outResp2");
const resp3 = document.querySelector(".outResp3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const saque = Number(frm.inValor.value);

    if (saque % 10 != 0) {
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
        frm.inValor.focus();
        return;
    }

    const notasCem = Math.floor(saque / 100);
    let resto = saque % 100;

    const notasCinquenta = Math.floor(resto / 50);
    resto = resto % 50;

    const notasDez = Math.floor(resto / 10);



    if (notasCem > 0) {
        resp1.textContent = `Notas de R$ 100: ${notasCem}`;
    }

    if (notasCinquenta > 0) {
        resp2.textContent = `Notas de R$ 50: ${notasCinquenta}`;
    }

    if (notasDez > 0) {
        resp3.textContent = `Notas de R$ 10: ${notasDez}`;
    }
});

frm.addEventListener("reset", () => {
    resp1.textContent = '';
    resp2.textContent = '';
    resp3.textContent = '';
    frm.inValor.focus();
});