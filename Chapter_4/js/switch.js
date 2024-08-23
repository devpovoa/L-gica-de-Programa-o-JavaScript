"use strict";

const prompt = require("prompt-sync")();

console.log(`Lista de Bairros para escolha \n-----------------------------\n1 - Centro\t2 - Fragata\n3 - Três Vendas\t4 - Villa Brasil\n5 - Laranjal\t0 - Outro Bairros não listados.`);
const bairro = Number(prompt("Bairro de Entrega:"));

let taxaEntrega;
switch (bairro) {
    case 1:
        taxaEntrega = 5.00
        break;

    case 2:
    case 3:
    case 4:
        taxaEntrega = 7.00;
        break;

    case 5:
        taxaEntrega = 10.00;
        break
    default:
        taxaEntrega = 8.00
}

console.log(`Taxa R$: ${taxaEntrega.toFixed(2)}`);
