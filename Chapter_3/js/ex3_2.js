"use strict";

const prompt = require("prompt-sync")();
const veiculo = prompt("Veículo: ");
const preco = Number(prompt("Preço R$: "));

const entrada = preco * 0.50;
const parcela = (preco * 0.50) / 12;

console.log(`Promoção: ${veiculo}\nEntrada de (50%) R$: ${entrada.toFixed(2)}\n+ 12x de R$: ${parcela.toFixed(2)}`);