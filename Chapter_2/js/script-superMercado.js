"use strict";

const frm = document.querySelector("form");
const resp1 = document.querySelector(".outPromocao");
const resp2 = document.querySelector(".outResultado");

frm.addEventListener("submit", (e) => {

    const produto = frm.inProduto.value;
    const preco = frm.inPreco.value;

    const desconto = preco * 0.50;
    const totalPagar = (preco * 3) - desconto;

    resp1.textContent = `${produto} - Promoção: leve 3 por R$: ${totalPagar.toFixed(2)}`;
    resp2.textContent = `O 3º produto custa apenas R$: ${desconto.toFixed(2)}`;

    e.preventDefault();
});