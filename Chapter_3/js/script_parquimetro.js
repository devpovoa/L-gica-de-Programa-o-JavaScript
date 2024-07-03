"use strict";

function calculaTempo() {
    
    const TABELA1 = 1.00;
    const TABELA2 = 1.75;
    const TABELA3 = 3.00;

    let valorDepositado = Number(document.getElementById("inValor").value);

    document.getElementById("inValor").textContent = "";
    document.querySelector('.outTempo').textContent = "";
    document.querySelector('.outTroco').textContent = "";

    if (valorDepositado == 0 || valorDepositado == '' || isNaN(valorDepositado)) {
        alert("Informe um valor válido por favor.");
        document.getElementById("inValor").focus();
        return;
    }else if (valorDepositado < TABELA1) {
        alert(`Valor R$ ${valorDepositado} insuficiente.`);
        document.getElementById("inValor").focus();
        return;
    }

    if (valorDepositado == TABELA1) {
        document.querySelector('.outTempo').textContent = "Tempo: 30 min";
    } else if ((valorDepositado > TABELA1) && (valorDepositado < TABELA2)) {
        document.querySelector('.outTroco').textContent = `R$ ${valorDepositado.toFixed(2)} insuficiente. Depósite valores conforme a tabela.`;
    } else if ((valorDepositado == TABELA2) || (valorDepositado > TABELA2 && valorDepositado < TABELA3)) {
        valorDepositado -= TABELA2;
        document.querySelector('.outTempo').textContent = "Tempo: 60 min";
        document.querySelector('.outTroco').textContent = `Troco R$: ${valorDepositado.toFixed(2)}`;
        
    } else if ((valorDepositado == TABELA3) || (valorDepositado > TABELA3)) {
        valorDepositado -= TABELA3;
        document.querySelector('.outTempo').textContent = "Tempo: 120 min";
        document.querySelector('.outTroco').textContent = `Troco R$: ${valorDepositado.toFixed(2)}`;
    }
}

let btDeposito = document.getElementById("btDeposito").addEventListener("click", calculaTempo);