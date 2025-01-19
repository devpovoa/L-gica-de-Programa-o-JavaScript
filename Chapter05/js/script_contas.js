"use strict";

const frm = document.querySelector("form");
const resp1 = document.querySelector("#outListaContas");
const resp2 = document.querySelector("#outTotal");

let numContas = 0;
let valorTotal = 0;
let resposta = "";

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const descricao = String(frm.inDescricao.value);
    const valor = Number(frm.inValor.value);

    numContas++;
    valorTotal += valor;
    resposta += `${descricao} - R$: ${valor.toFixed(2)}\n`;

    resp1.textContent = `${resposta} -------------------------------`;
    resp2.textContent = `${numContas} Contas(s) - Total R$: ${valorTotal.toFixed(2)}`;

    frm.inDescricao.value = '';
    frm.inValor.value = '';
    frm.inDescricao.focus();
});

frm.addEventListener("reset", () => {
    resp1.textContent = '';
    resp2.textContent = '';
    frm.inDescricao.focus();
});

