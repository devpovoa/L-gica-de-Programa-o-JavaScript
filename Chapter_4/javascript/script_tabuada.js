"use strict";

function limparTela() {
    document.getElementById("outTabuada").textContent = ""; 
}

function mostraTabuada() {
    
    let valor = parseFloat(document.getElementById("inValor").value);

    limparTela();

    if (valor == 0 || isNaN(valor)) {
        document.getElementById("outTabuada").textContent = `Esse valor informador é inválido.`;
        document.getElementById("inValor").focus();
        return;

    }

    let resposta = "";
    for (let i = 1;  i <= 10; i++) {
        resposta = `${resposta + valor} x ${i} = ${valor * i}\n`; 
        
    }

    document.getElementById("outTabuada").textContent = resposta;

}



let btReset = document.getElementById("btReset").addEventListener("click", limparTela);

let btMostrar = document.getElementById("btMostrar").addEventListener("click", mostraTabuada);