"use strict";

const prompt = require("prompt-sync")();

const quantPessoas = Number(prompt("Quantas pessoas: "));
const quantPeixes = Number(prompt("Quantos peixes pegos: "));

let pagar;
if (quantPeixes <= quantPessoas) {
    pagar = quantPessoas * 20;
} else {
    pagar = (quantPessoas * 20) + ((quantPeixes - quantPessoas) * 12);
}

console.log(`Pagar R$: ${pagar.toFixed(2)}`);