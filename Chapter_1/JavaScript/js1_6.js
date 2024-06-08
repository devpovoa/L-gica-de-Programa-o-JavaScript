"use strict";

// Calcula a janta e o total de serviços do garçon.
// let totalJantar = parseFloat(prompt("Total da Janta R$: "));
// let taxa = totalJantar * 0.10;
// alert( "Total de Janta : R$" + totalJantar + "\nTaxa de serviço: R$" + taxa.toFixed(2) + "\nValor total da conta: R$" + (totalJantar + taxa).toFixed(2));

// Calcula o tempo de de viagem em dias com horas.
// let diasDeViagem = parseInt(prompt("Quantos dias de viagem ?:"));
// let horasDeViagem = parseInt(prompt("Quantas horas à mais além dos dias ?:"))
// let horaDia = 24;
// let totalHorasPorDia = (diasDeViagem * horaDia) + horasDeViagem;
// alert("Sua viagem teve " + totalHorasPorDia + " horas.");

// Elaborar um programa que leia um número. Calcule e informe os seus vizinhos, ou seja, o número anterior e posterior.
// let numero = parseInt(prompt("Digite um número"))
// let vizinhoDireita = numero + 1;
// let vizinhoEsqueda = numero - 1;
// alert("O número " + numero + " tem a sequência de : " + vizinhoEsqueda + ", " + numero + ", " + vizinhoDireita);

// Elaborar um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pagor por cliente.
// let valorTotal = parseFloat(prompt("Informe o valor total:"));
// let pessoasNaMesa = parseInt(prompt("Pessoas na mesa?"));
// let soma = valorTotal.toFixed(2) / pessoasNaMesa;
// alert("Total: R$" + valorTotal + "\nNúmero de indivíduos: " + pessoasNaMesa + "\nValor por indivíduo: R$" + soma.toFixed(2));

// Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e valor em 3x.
// let preco = Number(prompt("Preço do Produto:"));
// alert("À vista com (10% off) ou à prazo (3x).");
// let desconto = 0.10;
// let prazo = 3;
// let precoDesc = preco - (preco * desconto);
// let precoPrazo = preco / prazo;
// alert("Preço: R$ " + preco + "\nÀ vista: R$ " + precoDesc + "\nÀ prazo (3x): R$ " + precoPrazo.toFixed(2));

// Elaborar um programa que leia 2 notas de um aluno em uma disciplina. Calcule e informe o média das notas.
let nota1 = parseFloat(prompt("Nota 1:"));
let nota2 = parseFloat(prompt("Nota 2"));
let somaNota = nota1 + nota2;
let media = 2;
alert("Nota 1: " + nota1 + "\nNota 2: "+ nota2 + "\nTotal: " + somaNota + "\nMédia: " + (somaNota / media));