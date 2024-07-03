"use strict";

function fusoHorario() {
    
    const FRANCA = 5;
    const TIMEGLOBAL = 24;
    let horaLocal = Number(document.getElementById("inHora").value);
    
    if (horaLocal == "" || isNaN(horaLocal)) {
        alert("Infome a hora correta.")
        document.getElementById("inHora").focus();
        return;
    }

    let horaNaFranca = horaLocal + FRANCA;
    if (horaNaFranca > TIMEGLOBAL) {
        horaNaFranca -= TIMEGLOBAL;
    }

    document.querySelector('.outFusoHorario').textContent = `Hora na França: ${horaNaFranca.toFixed(2)}`;

}

function LimparTela() {
    location.reload();
    document.getElementById("inHora").focus();
}

let btReset = document.getElementById("btReset").addEventListener("click", LimparTela);

let btExibir = document.getElementById("btExibir").addEventListener("click", fusoHorario);