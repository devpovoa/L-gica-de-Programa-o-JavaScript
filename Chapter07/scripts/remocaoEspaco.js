"use strict";

const prompt = require("prompt-sync")();

const palavra = prompt("Digite a frase: ");

const palavra1 = palavra.replace(" ", "");
console.log(palavra1);
const palavra2 = palavra.replace(/ /g, "");
console.log(palavra2);
const palavra3 = palavra.replace(/ /g, "").toLowerCase();
console.log(palavra3);

