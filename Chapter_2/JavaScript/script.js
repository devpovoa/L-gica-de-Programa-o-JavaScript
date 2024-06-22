// // // "use strict";

// // // // Script para mostra o nome.
// // // // function showHello() {
// // // //     let name = document.getElementById("inNome").value;
// // // //     document.getElementById("outResponse").textContent = "Hello, " + name + " !";
// // // // }

// // // // let show = document.getElementById("btShow");
// // // // show.addEventListener("click", showHello);

// // // // Script que converter minutos em horas e minutos Vídeo Locadora

// // // // function convertDuration() {
// // // //     const MINUTES = 60;
// // // //     let title = document.getElementById("inTitle").value;
// // // //     let duration = Number(document.getElementById("inDuration").value);

// // // //     let hours = Math.floor(duration / MINUTES);
// // // //     let minutes = duration % MINUTES;

// // // //     document.querySelector('.outTitle').textContent = title;
// // // //     document.querySelector('.outResponse').textContent = hours + " hours and " + minutes + " minutes ";
// // // // }

// // // // let btConvert = document.getElementById("btConvert").addEventListener("click", convertDuration);

// // // // Script que demonstra o código para Revenda de Veículos.

// // // // function calculateResale() {
// // // //     const VALUEPROHIBITED = 0.50;
// // // //     const VALUEFIXED = 12;

// // // //     let vehicle = document.getElementById("inVehicle").value;
// // // //     let price = Number( document.getElementById("inPrice").value);

// // // //     let calculeteProhibited = price * VALUEPROHIBITED;
// // // //     let calculeteInstallments = calculeteProhibited / VALUEFIXED;

// // // //     document.querySelector('.outVehicle').textContent = "Promotion: " + vehicle;
// // // //     document.querySelector('.outValueProhibited').textContent = "Value of enter: R$ " + calculeteProhibited.toFixed(2);
// // // //     document.querySelector('.outRemainingValue').textContent = " + 12x of R$: " + calculeteInstallments.toFixed(2);
// // // // }

// // // // let btPromotion = document.getElementById("btPromotion").addEventListener("click",calculateResale);

// // // // Script que faz a regra de negócio para o Restaurante JS.

// // // function calculateKiloGram() {
    
// // //     const WEIGHTKILO = 1000;
// // //     let priceKilo =Number(document.getElementById("inPrice").value);
// // //     let consumptionGram =Number(document.getElementById("inConsumption").value);

// // //     consumptionGram *= priceKilo / WEIGHTKILO;

// // //     document.querySelector('.showValue').textContent = "Amount to pay R$: " + consumptionGram.toFixed(2);
    
// // // }

// // // let btCalculate = document.getElementById("btCalculate").addEventListener("click", calculateKiloGram);

// // //  Scritp que demonstra o uso da regra de negócio para a Famárcia JS.

// // function calculaDesconto() {
    
// //     const DESCONTOBASE = 2;
// //     let medicamento = document.getElementById("inRemedio").value;
// //     let preco = Number(document.getElementById("inPreco").value);

// //     let desconto = Math.floor(preco) * DESCONTOBASE;

// //     document.querySelector('.outMedicamento').textContent = "Promoção de " + medicamento; 
// //     document.querySelector('.outPreco').textContent = "Leve 2 por apenas R$ " + desconto.toFixed(2);
// // }

// // let btPromocao = document.getElementById("btPromocao").addEventListener("click", calculaDesconto);

// // Script que demonstra a regra de negócio de uma Lan House.

// function calcularTempo() {
    
//     const TEMPOPADRAO = 15;
//     let precoTempo = Number(document.getElementById("inPrecoTempo").value);
//     let tempoDeUso = Number(document.getElementById("inUsoCliente").value);

//     let calculaTempoUso = Math.floor((precoTempo / TEMPOPADRAO) * tempoDeUso) + precoTempo;

//     document.querySelector('.outResposta').textContent = "Valor a Pagar R$: " + calculaTempoUso.toFixed(2);
// }

// let btCalcular = document.getElementById("btCalcular").addEventListener("click", calcularTempo);

//Script que demonstra a regra de negócio de uma promoção de mercado.

function calcularDesconto() {
    
    const DESCONTO = 2;
    const ITENS = 3;
    let produto = document.getElementById("inProduto").value;
    let preco = document.getElementById("inPreco").value;

    let desconto = ((preco * ITENS ) - (preco / DESCONTO)).toFixed(2);
    
    document.querySelector('.outResposta').textContent = produto + " - Promoção: Leve " + ITENS + " por R$: " + desconto;
    document.querySelector('.outResultado').textContent = "O " + ITENS + "º produto custa apens R$: " + (preco / DESCONTO).toFixed(2);
}

let btPromocao = document.getElementById("btPromocao").addEventListener("click", calcularDesconto);