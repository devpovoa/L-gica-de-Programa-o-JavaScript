"use strict";

const prompt = require("prompt-sync")();

const palavra = prompt("Nome da Palavra:");

const copia1 = palavra.substr(2);
console.log(copia1);
const copia2 = palavra.substr(2, 4);
console.log(copia2);
const copia3 = palavra.substr(0, palavra.length - 1);
console.log(copia3);
const copia4 = palavra.substr(-2);
console.log(copia4);