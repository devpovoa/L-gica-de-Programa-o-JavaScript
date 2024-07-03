"use strict";

function calculaRaiz() {
    
    let numero = Number(document.getElementById("inNumero").value);

    if (numero == 0 || isNaN(numero)) {
        alert("Digita um valor válido.");
        document.getElementById("inNumero").focus();
        return;
    }

    let raizQuadrada = Math.sqrt(numero); 
    if(raizQuadrada == Math.floor(raizQuadrada)){
        document.querySelector('.outRaiz').textContent = `Raiz: ${raizQuadrada}.`;
    } else{
        document.querySelector('.outRaiz').textContent = `Não há raiz exata para o ${numero}.`;
    }
}

function limparTela() {
    location.reload();
    document.getElementById("inNumero").focus();
}

let btReset = document.getElementById("btReset").addEventListener("click", limparTela);

let btRaiz = document.getElementById("btRaiz").addEventListener("click", calculaRaiz);