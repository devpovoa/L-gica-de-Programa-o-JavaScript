"use strict";

const prompt = require("prompt-sync")();
const salario = Number(prompt("Qual salário R$: "));
const tempoServico = Number(prompt("Tempo (anos) de trabalho: "));

const quadrienios = Math.floor(tempoServico / 4);
const acrescimo = salario * quadrienios / 100;

console.log(`Quadriênios: ${quadrienios}%\nSalário Final R$: ${(salario + acrescimo).toFixed(2)}`);