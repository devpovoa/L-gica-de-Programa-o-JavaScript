"use strict";

function calculaPesoIdeal() {
    const HOMENS = 22;
    const MULHERES = 21;

    let nome = document.getElementById("inNome").value;
    let masculino = document.getElementById("rbMasculino").checked;
    let feminino = document.getElementById("rbFeminino").checked;
    let altura = Number(document.getElementById("inAltura").value);

    if (nome == "" || (masculino == false && feminino == false)) {
        alert("Por favor, informe o nome e selecione o sexo.");
        document.getElementById("inNome").focus();
        return;
    }

    if (altura == 0 || isNaN(altura)) {
        alert("Por favor, informe a altura corretamente.");
        document.getElementById("inAltura").focus();
        return;
    }
    
    let peso = 0;
    if (masculino) {
        peso = HOMENS * Math.pow(altura, 2);
    } else {
        peso = MULHERES * Math.pow(altura, 2);
    }

    document.querySelector('.outPeso').textContent = nome + " : Seu peso ideal é " + peso.toFixed(3) + " kg";
}

let btPeso = document.getElementById("btPeso").addEventListener("click", calculaPesoIdeal);
