"use strict";

function verificaValor() {
    
    let numero =Number(document.getElementById("inNumero").value);

    document.querySelector('.outResposta').textContent = '';

    if (numero == 0 || isNaN(numero)) {
        alert("Informações inválida, tente novamente.");
        document.getElementById("inNumero").focus();
        return;
    }

    if (numero % 2 == 0) {
        document.querySelector('.outResposta').textContent = `Resposta: ${numero} é Par.`;
    } else {
        document.querySelector('.outResposta').textContent = `Resposta: ${numero} é Ímpar.`; 
    }

}

let btResposta = document.getElementById("btResposta").addEventListener("click", verificaValor);    