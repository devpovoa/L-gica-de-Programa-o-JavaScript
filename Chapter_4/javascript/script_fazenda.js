"use strict";

const TRIPLO = 3;
function verificaVenda() {

    let numero = Number(document.getElementById("inNumero").value);
    let ano = Number(document.getElementById("inAno").value);

    if (numero < 2 || (numero, ano) == 0 || isNaN(numero, ano)) {
        document.getElementById("outExibir").textContent = "Valor informado incorreto, tente novamente.";
        document.getElementById("inNumeros").focus();
        return;
    }

    let saida = "";
    for (let i = 1 ; i <= ano; i++ ) {
        saida = `${saida + i}º Ano: ${numero} Chinchilas\n`;
        numero*= TRIPLO;
    }

    document.getElementById("outExibir").textContent = saida;

    document.getElementById("inNumero").value = '';
    document.getElementById("inAno").value = '';
    document.getElementById("inNumero").focus();
}

function limpaTela() {
    document.getElementById("inNumero").value = '';
    document.getElementById("inAno").value = '';
    document.getElementById("outExibir").textContent = '';
    document.getElementById("inNumero").focus();
}

let btReset = document.getElementById("btReset").addEventListener("click", limpaTela);
let btMostrar = document.getElementById("btMostrar").addEventListener("click", verificaVenda);