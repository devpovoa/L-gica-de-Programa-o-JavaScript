"use strict";

const INNUMERO = document.getElementById("inNumero");
const BTAPOSTAR = document.getElementById("btApostar");
const BTJOGAR = document.getElementById("btJogar");
const OUTERROS = document.getElementById("outErros");
const OUTCHANCES = document.getElementById("outChances");
const OUTDICA = document.getElementById("outDica");

let erros = [];
let nsorteado = Math.floor(Math.random() * 100) + 1;
const CHANCES = 6;

function apostarNumero() {

    let numero = Number(INNUMERO.value);

    if (numero <= 0 || numero > 100 || isNaN(numero)) {
        alert("Informe um número válido.");
        INNUMERO.focus()
        return;
    }

    if (numero == nsorteado) {
        alert("Parabéns!! Você Acertou!!");
        BTAPOSTAR.disabled = true;
        BTJOGAR.className = "exibe";
        OUTDICA.textContent = `Parabéns!! Número sorteado: ${nsorteado}.`;
    } else {
        if (erros.indexOf(numero) >= 0) {
            alert("Você já apostou o número " + numero + ". Tente outro..");
        } else {
            erros.push(numero);
            let numErros = erros.length;
            let numChances = CHANCES - numErros;
            OUTERROS.textContent = numErros + " (" + erros.join(", ") + ")";
            OUTCHANCES.textContent = numChances;

            if (numChances == 0) {
                alert("Suas chances acabaram.");
                BTAPOSTAR.disabled = true;
                BTJOGAR.className = "exibe";
                OUTDICA.textContent = `Game Over!! Número Sorteado: ${nsorteado}.`;
            } else {
                let dica = numero < nsorteado ? "Maior" : "Menor";
                OUTDICA.textContent = `Dica: Tente um número ${dica} que ${numero}.`;
            }
        }
    }

    INNUMERO.value = '';
    INNUMERO.focus();
}

function jogarNovamente() {
    location.reload();
}

BTJOGAR.addEventListener("click", jogarNovamente);

BTAPOSTAR.addEventListener("click", apostarNumero);
