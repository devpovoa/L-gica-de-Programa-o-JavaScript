"use strict";

const INMODELO = document.getElementById("inModelo");
const INPRECO = document.getElementById("inPreco");
const BTADD = document.getElementById("btAdd");
const BTLISTAR = document.getElementById("btListar");
const BTFILTRO = document.getElementById("btFiltro");
const OUTLISTA = document.getElementById("outLista");

let carros = [];

function adicionarCarros() {

    let modelo = String(INMODELO.value);
    let preco = Number(INPRECO.value);

    if (modelo == '' || preco == 0 || isNaN(preco)) {
        OUTLISTA.textContent = "Informe corretamente os dados.";
        INMODELO.focus();
        return;
    }

    carros.push({ modelo: modelo, preco: preco });
    INMODELO.value = '';
    INPRECO.value = '';
    INMODELO.focus();

    listarCarros();
}

BTADD.addEventListener("click", adicionarCarros);

function listarCarros() {

    if (carros.length == 0) {
        OUTLISTA.textContent = "Não há carros na lista.";
        return;
    }

    let lista = "";
    for (let i = 0; i < carros.length; i++) {
        lista += `${carros[i].modelo} - R$: ${carros[i].preco.toFixed(2)}\n`;
    }

    OUTLISTA.textContent = lista;
}

BTLISTAR.addEventListener("click", listarCarros);

function filtarCarros() {

    let maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"));

    if (maximo == 0 || isNaN(maximo)) {
        return;
    }

    let lista = '';
    for (let i = 0; i < carros.length; i++) {
        if (carros[i].preco <= maximo) {
            lista += `${carros[i].modelo} - R$: ${carros[i].preco.toFixed(2)}\n`;
        }
    }

    if (lista == '') {
        OUTLISTA.textContent = `Não há carros com o preço até R$ ${maximo.toFixed(2)}`;
    } else {
        OUTLISTA.textContent = `Carros até R$ ${maximo.toFixed(2)}\n--------------------------\n${lista}`;
    }
}

BTFILTRO.addEventListener("click", filtarCarros);