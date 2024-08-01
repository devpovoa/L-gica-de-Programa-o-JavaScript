"use strict";

function repeteFruta() {
    
    let fruta = String(document.getElementById("inFruta").value);
    let num = Number(document.getElementById("inNumero").value);

    if (fruta == '' || num == 0 || isNaN(num)) {
        document.getElementById("outSaida").textContent = "Preenchimento incorreto, tente novamente.";
        document.getElementById("inFruta").focus();
        return;
    }

    let saida = `${fruta}`;
    for (let i = num - 1; i > 0 ; i--) {
        saida = `${saida + " * " + fruta}`;
    }

    document.getElementById("outSaida").textContent = saida;

    document.getElementById("inFruta").value = '';
    document.getElementById("inNumero").value = '';
    document.getElementById("inFruta").focus();
}

function resetSaida() {
    document.getElementById("outSaida").textContent = '';
}

let btReset = document.getElementById("btReset").addEventListener("click", resetSaida); 

let btRepetir = document.getElementById("btRepetir").addEventListener("click", repeteFruta);