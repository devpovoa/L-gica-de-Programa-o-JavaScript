"use strict";

const frm = document.querySelector("form");
const resp1 = document.querySelector(".outMedicamento");
const resp2 = document.querySelector(".outPreco");

frm.addEventListener("submit", (e) => {

    const medicamento = frm.inRemedio.value;
    const preco = frm.inPreco.value;

    const desconto = Math.floor(preco) * 2;

    resp1.textContent = `Promoção de ${medicamento}`;
    resp2.textContent = `Leve 2 por apenas R$: ${desconto.toFixed(2)}`;

    e.preventDefault();
});