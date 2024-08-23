"use strict";

const frm = document.querySelector("form");
const resp = document.querySelector(".outRaiz");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero = Number(frm.inNumero.value);

    const raizQuadrada = Math.sqrt(numero);
    if (Number.isInteger(raizQuadrada)) {
        resp.textContent = `Raiz: ${raizQuadrada}.`;
    } else {
        resp.textContent = `Não há raiz exata para o ${numero}.`;
    }
});

frm.addEventListener("reset", () => {
    resp.textContent = '';
});
