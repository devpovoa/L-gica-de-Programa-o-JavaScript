"use strict";

const frm = document.querySelector("form");
const resp = document.querySelector(".outValorPagar");

frm.addEventListener("submit", (e) => {

    const precoKg = Number(frm.inPreco.value);
    const precoCons = Number(frm.inConsumo.value);

    const totalPagar = (precoKg / 1000) * precoCons;

    resp.textContent = `Valor a pagar R$: ${totalPagar.toFixed(2)}`;

    e.preventDefault();
});