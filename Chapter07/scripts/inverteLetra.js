"use strict";

const prompt = require("prompt-sync")();

const palavra = prompt("Palavra: ");
const tam = palavra.length;

let inverso = palavra.charAt(tam - 1).toLocaleUpperCase();

for (let i = tam - 2; i >= 0; i--) {
    inverso += palavra.charAt(i).toLocaleLowerCase();
}

console.log(`Palavra: ${palavra}\nInvertida: ${inverso}`);