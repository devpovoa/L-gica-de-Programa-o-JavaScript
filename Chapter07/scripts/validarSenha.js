"use strict";

const prompt = require("prompt-sync")();

const palavra = prompt("Senha: ");
const vetor1 = palavra.match(/[a-z]/g);
console.log(vetor1);
const vetor2 = palavra.match(/[A-Z]/g);
console.log(vetor2);
const vetor3 = palavra.match(/[0-9]/g);
console.log(vetor3);
const vetor4 = palavra.match(/\W|_/g);
console.log(vetor4);
const vetor5 = palavra.match(/[T-Z]/g);
console.log(vetor5);