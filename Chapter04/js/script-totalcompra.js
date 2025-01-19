"use strict";

const prompt = require("prompt-sync")();

const valor = Number(prompt("Total Compra R$: "));
const aux = Math.floor(valor / 20);

const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux;
const valorParcelas = valor / parcelas;

console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcelas.toFixed(2)}`);

