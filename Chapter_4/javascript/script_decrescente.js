"use strict";

function limparTela() {
    document.getElementById("outNumeros").textContent = "";
    document.getElementById("inValor").focus();
}

function valorDecrescente() {
    
    let numero = Number(document.getElementById("inValor").value);

    limparTela();

    if (numero == 0 || isNaN(numero)) {
        document.getElementById("outNumeros").textContent = "Valor inválido, tente novamente.";
        document.getElementById("inValor").focus();
        return;
    }
    // váriavel acumuladora.
    let resposta = `Entre ${numero} e 1: ${numero}`;
    for (let i = numero - 1; i > 0; i--) {
        resposta = `${resposta + ", " + i}`; 
    }
   

    document.getElementById("outNumeros").textContent = `${resposta + "."}`;
}

let btReset = document.getElementById("btReset").addEventListener("click", limparTela);

let btDecrescer = document.getElementById("btDecrescer").addEventListener("click", valorDecrescente);