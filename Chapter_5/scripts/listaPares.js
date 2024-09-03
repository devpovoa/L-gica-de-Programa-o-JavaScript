"use strict";

const prompt = require("prompt-sync")();

let numero;
do {
    numero = Number(prompt("Número: "));
    if (numero == 0 || isNaN(numero)) {
        console.log(`Digite um número válido...`);
    }
} while (numero == 0 || isNaN(numero));

let pares = `Pares entre 1 e ${numero}: `;
for (let i = 2; i <= numero; i += 2) {
    pares = `${pares + i + ', '}`;
}

console.log(pares);