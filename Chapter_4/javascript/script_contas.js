"use strict";
let numContas = 0;
let valorTotal = 0;
let resposta = "";


function registraConta() {
    
    let descricao = String(document.getElementById("inDescricao").value);
    let valor = Number(document.getElementById("inValor").value);

    if (descricao == '' || valor == 0 || isNaN(valor)) {
        document.getElementById("outListaContas").textContent = "Preenchimento incorreto, tente novamente.";
        document.getElementById("inDescricao").focus();
        return;
    }

    numContas++;
    valorTotal+= valor;
    resposta = `${resposta + descricao} - R$: ${valor.toFixed(2)}\n`;

    document.getElementById("outListaContas").textContent = resposta + "----------------------------------";
    document.getElementById("outTotal").textContent = `${numContas} Contas(s) - Total R$: ${valorTotal.toFixed(2)}`;

    document.getElementById("inDescricao").value = '';
    document.getElementById("inValor").value = '';
    document.getElementById("inDescricao").focus();

}

function limpaTela() {
    document.getElementById("outListaContas").textContent = '';
    document.getElementById("outTotal").textContent = '';
    document.getElementById("inDescricao").focus();
}

let btLimpar = document.getElementById("btLimpar").addEventListener("click", limpaTela);

let btRegistrar = document.getElementById("btRegistrar").addEventListener("click", registraConta);