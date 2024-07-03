"use strict";

function mostraNotaNaTela() {
    
    const CEM = 100;
    const CINQUENTA = 50;
    const DEZ = 10;


    let valorSolicitado = Number(document.getElementById("inValor").value);

    document.querySelector('.outValores100').textContent = "";
    document.querySelector('.outValores50').textContent = "";
    document.querySelector('.outValores10').textContent = "";

    if (valorSolicitado == 0 || isNaN(valorSolicitado)) {
        alert("Informa um valor válido.");
        document.getElementById("inValor").focus();
        return;
    }

    if (valorSolicitado % 10 != 0) {
        alert(`Valor inválido para notas disponíves de R$(${CEM}, ${CINQUENTA}, ${DEZ}).`);
        document.getElementById("inValor").focus();
        return;
    }

    let valores100 = Math.floor(valorSolicitado / CEM);
    let resto = valorSolicitado % CEM;
    
    let valores50 = Math.floor(resto / CINQUENTA);
    resto %= 50;

    let valores10 = Math.floor(resto / DEZ);

    if (valores100 > 0) {
        document.querySelector('.outValores100').textContent = `Notas de R$ 100: ${valores100}.`;
    }

    if(valores50 > 0){
        document.querySelector('.outValores50').textContent = `Notas de R$ 50: ${valores50}.`;
    }
    
    if(valores10 > 0){
        document.querySelector('.outValores10').textContent = `Notas de R$ 10: ${valores10}.`;
    }
}


let btValores = document.getElementById("btValores").addEventListener("click", mostraNotaNaTela);