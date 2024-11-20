"use strict";

// const prompt = require("prompt-sync")();

// const tipoVariavel = prompt("Digite uma palavra ou valor: ");
const tipoVariavel = 2;
console.log(typeof tipoVariavel, `: valor ${tipoVariavel}`);
const tipo1 = tipoVariavel.toString();
console.log(typeof tipo1, `: valor ${tipo1}`);
const tipo2 = tipo1.padStart(2, "0");
console.log(typeof tipo2, `: valor ${tipo2}`);
