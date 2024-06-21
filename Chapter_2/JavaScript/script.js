"use strict";

// Script para mostra o nome.
// function showHello() {
//     let name = document.getElementById("inNome").value;
//     document.getElementById("outResponse").textContent = "Hello, " + name + " !";
// }

// let show = document.getElementById("btShow");
// show.addEventListener("click", showHello);

// Script que converter minutos em horas e minutos Vídeo Locadora

// function convertDuration() {
//     const MINUTES = 60;
//     let title = document.getElementById("inTitle").value;
//     let duration = Number(document.getElementById("inDuration").value);

//     let hours = Math.floor(duration / MINUTES);
//     let minutes = duration % MINUTES;

//     document.querySelector('.outTitle').textContent = title;
//     document.querySelector('.outResponse').textContent = hours + " hours and " + minutes + " minutes ";
// }

// let btConvert = document.getElementById("btConvert").addEventListener("click", convertDuration);

// Script que demonstra o código para Revenda de Veículos.

// function calculateResale() {
//     const VALUEPROHIBITED = 0.50;
//     const VALUEFIXED = 12;

//     let vehicle = document.getElementById("inVehicle").value;
//     let price = Number( document.getElementById("inPrice").value);

//     let calculeteProhibited = price * VALUEPROHIBITED;
//     let calculeteInstallments = calculeteProhibited / VALUEFIXED;

//     document.querySelector('.outVehicle').textContent = "Promotion: " + vehicle;
//     document.querySelector('.outValueProhibited').textContent = "Value of enter: R$ " + calculeteProhibited.toFixed(2);
//     document.querySelector('.outRemainingValue').textContent = " + 12x of R$: " + calculeteInstallments.toFixed(2);
// }

// let btPromotion = document.getElementById("btPromotion").addEventListener("click",calculateResale);

// Script que faz a regra de negócio para o Restaurante JS.

function calculateKiloGram() {
    
    const WEIGHTKILO = 1000;
    let priceKilo =Number(document.getElementById("inPrice").value);
    let consumptionGram =Number(document.getElementById("inConsumption").value);

    consumptionGram *= priceKilo / WEIGHTKILO;

    document.querySelector('.showValue').textContent = "Amount to pay R$: " + consumptionGram.toFixed(2);
    
}

let btCalculate = document.getElementById("btCalculate").addEventListener("click", calculateKiloGram);
