"use strict";

const INNUMERO = document.getElementById("inNumero");
const OUTRESULTADO = document.getElementById("outResultado");
const BTCRIAR = document.getElementById("btCriar");
const BTRESET =  document.getElementById("btReset");

function mostraEstrelas() {
    
    let numero = Number(INNUMERO.value);

    let verifica = Boolean(numero == 0 || numero == '' || isNaN(numero));
    if (verifica) {
        OUTRESULTADO.textContent = 'Valor inválido, favor tente novamente.';
        INNUMERO.focus();
        return;
    }

    let acumuladora = ' ';
    for (let i = 0; i <= numero;i++) {
        for (let j = 1; j <= i;j++) {
            acumuladora += `${'⭐'}`; 
        }
        acumuladora += '\n';
    } 
    OUTRESULTADO.textContent =  acumuladora;

    INNUMERO.value = '';
    INNUMERO.focus();
}

function limpaTela() {
    OUTRESULTADO.textContent = '';
    INNUMERO.value = '';
    INNUMERO.focus();
}

BTRESET.addEventListener("click", limpaTela);

BTCRIAR.addEventListener("click", mostraEstrelas);