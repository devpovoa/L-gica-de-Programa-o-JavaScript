"use strict";

let bairro = prompt("Bairro de Entrega: ");
let taxaEntrega;

switch (bairro) {
    case "Centro":
        taxaEntrega = 5.00
        break;
    
    case "Fragata":
    case "Tês Vendas":
    case "Vila Brasil":
        taxaEntrega = 7.00;
        break;
    
    case "Laranjal":
        taxaEntrega = 10.00;
        break
    default:
        taxaEntrega = 8.00
        break;
}
alert("Taxa R$: " + taxaEntrega.toFixed(2));