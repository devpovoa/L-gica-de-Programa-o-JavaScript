"use strict";

function verificaNumero() {
    
    let numero = Number(document.getElementById("inNumero").value);
    
    if (numero == 0 || isNaN(numero)) {
        document.getElementById("outSaida").textContent = '';
        document.getElementById("outResposta").textContent = "Valor inválido, por favor tente novamente.";
        document.getElementById("inNumero").focus();
        return; 
    }

    let divisores = `Divisores do ${numero}: 1`;
    let soma = 1;

    for (let i = 2; i <= (numero / 2); i++) {
        if (!(numero % i)) {
            divisores += `, ${i}`;
            soma+= i;
        }
    }

    divisores += `. (Soma: ${soma})`
    document.getElementById("outSaida").textContent = divisores;

    if (numero == soma) {
        document.getElementById("outResposta").textContent = `${numero} é um número perfeito.`;
    } else {
        document.getElementById("outResposta").textContent = `${numero} não é um número perfeito.`;
    }
    
    document.getElementById("inNumero").value = '';
    document.getElementById("inNumero").focus();
}

function limpaTela() {
    document.getElementById("inNumero").value = '';
    document.getElementById("outSaida").textContent = '';
    document.getElementById("outResposta").textContent = '';
    document.getElementById("inNumero").focus();
}

let btReset = document.getElementById("btReset").addEventListener("click", limpaTela);

let btMostrar = document.getElementById("btVerifica").addEventListener("click", verificaNumero);