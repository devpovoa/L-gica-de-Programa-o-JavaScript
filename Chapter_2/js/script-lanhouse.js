"use strict";

const frm = document.querySelector("form");
const resp = document.querySelector(".outResposta");

frm.addEventListener("submit", (e) => {

    const preco = Number(frm.inPrecoTempo.value);
    const usocliente = Number(frm.inUsoCliente.value);

    const tempoCalculado = Math.ceil(usocliente / 15) * preco;

    resp.textContent = `Valor a pagar R$: ${tempoCalculado.toFixed(2)}`;

    e.preventDefault();
});