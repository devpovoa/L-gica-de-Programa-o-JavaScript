"use strict";

function verificaPrimo() {
    
    let numero = Number(document.getElementById("inValor").value);

    if (numero == 0 || isNaN(numero)) {
        document.getElementById("outResposta").textContent = "Preenchimento incorreto, tente novamente.";
        document.getElementById("inValor").focus();
        return;
    }

    let divisor = 0;
    for (let i = 2; i <= numero / 2; i++) {
        if (numero % i == 0) {
            divisor = 1;
            break;
        }
    }

    if (numero > 1 && !divisor) {
        document.getElementById("outResposta").textContent = `${numero} É primo`;
    } else {
        document.getElementById("outResposta").textContent = `${numero} Não é primo`;
    }

    document.getElementById("inValor").value = '';
    document.getElementById("inValor").focus();
}

function limpaTela() {
    document.getElementById("outResposta").textContent = '';
    document.getElementById("inValor").focus();
}

let btLimpar = document.getElementById("btLimpar").addEventListener("click", limpaTela);

let btVerificar = document.getElementById("btVerificar").addEventListener("click", verificaPrimo);