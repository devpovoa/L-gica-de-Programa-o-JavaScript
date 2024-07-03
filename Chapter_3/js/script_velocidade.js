"use strict";

function verificaVelocidade() {
    
    const VINTEPORCENTO = 1.2;

    let velocidadePadrao = Number(document.getElementById("inVelocidadePadrao").value);
    let velocidadeCondutor = Number(document.getElementById("inVelocidadeCondutor").value);

    document.querySelector('.outMulta').textContent = "";

    if ((velocidadePadrao == 0 || isNaN(velocidadePadrao)) || (velocidadeCondutor == 0 || isNaN(velocidadeCondutor))) {
        alert("Informações inválida, favor tente novamente.");
        document.getElementById("inVelocidadePadrao").focus();
        return;
    }

    if (velocidadeCondutor <= velocidadePadrao) {
        document.querySelector('.outMulta').textContent = `Situação: Sem Multa, velocidade Permitida: ${velocidadePadrao}.`;
    } else {
        let multa = velocidadePadrao * VINTEPORCENTO;
        if (velocidadeCondutor <= multa) {
            document.querySelector('.outMulta').textContent = `Situação: Multa Leve, velocidade Permitida: ${velocidadePadrao}.`;  
        } else{
            document.querySelector('.outMulta').textContent = `Situação: Multa Grave, velocidade Permitida: ${velocidadePadrao}.`; 
        }
        
    }
}

let btVelocidade = document.getElementById("btVelocidade").addEventListener("click", verificaVelocidade);