"use strict";

const frm = document.querySelector("form");
const resp1 = document.querySelector(".outResp1");
const resp2 = document.querySelector(".outResp2");
const resp3 = document.querySelector(".outResp3");

frm.addEventListener("submit", (e) => {

    const veiculo = frm.inVeiculo.value;
    const preco = Number(frm.inPreco.value);

    const entrada = preco * 0.60;
    const saldo = (preco * 0.40) / 12;

    resp1.textContent = `Promoção: ${veiculo}`;
    resp2.textContent = `Valor de entrada (60%) R$: ${entrada.toFixed(2)}`;
    resp3.textContent = `Restante em 12x R$: ${saldo.toFixed(2)}**`;

    e.preventDefault();
});