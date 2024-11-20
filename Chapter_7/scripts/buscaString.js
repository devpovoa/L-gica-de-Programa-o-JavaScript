"use strict";

const prompt = require("prompt-sync")();

const palavra = prompt("Digite uma palavra: ");

const posicao1 = palavra.indexOf('a');
console.log(posicao1);
const posicao2 = palavra.lastIndexOf('a');
console.log(posicao2);
const posicao3 = palavra.indexOf('sal');
console.log(posicao3);
const posicao4 = palavra.indexOf('e');
console.log(posicao4);
const existe = palavra.includes('d');
console.log(existe);
