"use strict";

function ladosGeometricos() {
    
    let ladoA = Number(document.getElementById("inLadoA").value);
    let ladoB = Number(document.getElementById("inLadoB").value);
    let ladoC = Number(document.getElementById("inLadoC").value);

    limparInformacao();
    
    if ((ladoA == 0 || ladoB == 0 || ladoC == 0) || isNaN(ladoA, ladoB, ladoC) ) {
        alert("Favor informe uma valor válido.")
        document.getElementById("inLadoA").focus();
        return;
    }

   if (ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB)) {

    if (ladoA == ladoB && ladoB == ladoC) {
        document.querySelector('.outLados').textContent = "Lados podem formar um triângulo";
        document.querySelector('.outTipo').textContent = "Tipo: equilátero";
    } else if (ladoA == ladoB || ladoA == ladoC || ladoC == ladoB) {
        document.querySelector('.outLados').textContent = "Lados podem formar um triângulo";
        document.querySelector('.outTipo').textContent = "Tipo: Isósceles"; 
    } else {
        document.querySelector('.outLados').textContent = "Lados podem formar um triângulo";
        document.querySelector('.outTipo').textContent = "Tipo: Escaleno"; 
    }

   } else {
    document.querySelector('.outLados').textContent = "Esses valores não formam um triângulo.";
   }

}

function limparInformacao() {
    document.querySelector('.outLados').textContent = "";
    document.querySelector('.outTipo').textContent = ""; 
}

let btReset = document.getElementById("btReset").addEventListener("click", limparInformacoes);

let btVerificar = document.getElementById("btVerificar").addEventListener("click", ladosGeometricos);