"use strict";

const prompt = require("prompt-sync")();
const anoAtual = new Date().getFullYear();

const idade = prompt(`Idade atual para esse ano ${anoAtual}: `);
const anoNasc = anoAtual - idade;
console.log(`Ano de nascimento: ${anoNasc}`);