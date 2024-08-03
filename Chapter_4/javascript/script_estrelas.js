"use strict";

function preencherEstrela() {
    
    let numero = Number(document.getElementById("inNumero").value);

    if (numero == 0 || isNaN(numero)) {
        document.getElementById("outSaida").textContent = "Preenchimento incorreto, tente novamente.";
        document.getElementById("inNumero").focus();
        return;
    }

    let estrelas = "";

    for (let i = 1; i <= numero; i++) {
        if (i % 2 == 1) {
            estrelas = `${estrelas + '⭐'}`;
        } else {
            estrelas = `${estrelas + '-'}`; 
        }
    }
    
    document.getElementById("outSaida").textContent = estrelas;

    document.getElementById("inNumero").value = '';
    document.getElementById("inNumero").focus();
}

function limpaTela() {
    document.getElementById("outSaida").textContent = '';
    document.getElementById("inNumero").focus();
}

let btReset = document.getElementById("btReset").addEventListener("click", limpaTela);

let btPreencher = document.getElementById("btPreencher").addEventListener("click", preencherEstrela);