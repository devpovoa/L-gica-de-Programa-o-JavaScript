"use strict";

var totalJantar = parseFloat(prompt("Total da Janta R$: "));
var taxa = totalJantar * 0.1;
alert( "Total de Janta : R$" +totalJantar + "\nTaxa de serviço: R$" + taxa.toFixed(2) + "\nValor total da conta: R$" + (totalJantar + taxa).toFixed(2));