"use strict";

const prompt = require("prompt-sync")();

const senha = prompt("digite e palavra: ");

const senha1 = senha.replace("A", "X");
console.log(senha1);
const senha2 = senha.replace(/A/g, "X");
console.log(senha2);
