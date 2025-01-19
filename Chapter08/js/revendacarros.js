"use strict";

const frm = document.querySelector('form');

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const modelo = frm.inModelo.value.trim();
    const ano = parseInt(frm.inAno.value);
    const valor = parseFloat(frm.inValor.value);

    if (!isValidInput(modelo, ano, valor)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const classificacao = classificarVeiculoAno(ano);
    const entrada = calcularEntrada(valor, classificacao);
    const parcela = calcularParcelas(valor, entrada);


    frm.outDescricao.value = `${modelo} - ${classificacao}`;
    frm.outEntrada.value = `${entrada.toFixed(2)}`;
    frm.outParcelas.value = `${parcela.toFixed(2)}`;

});

const isValidInput = (modelo, ano, valor) => {
    return modelo && !isNaN(ano) && ano > 1900 && !isNaN(valor) && valor > 0;
}

const classificarVeiculoAno = (ano) => {
    const anoAtual = new Date().getFullYear();

    if (ano === anoAtual) { return "Novo"; };
    if (ano >= anoAtual - 2) { return "Seminovo"; };
    return "Usado";
};

const calcularEntrada = (valor, classificacao) => {
    const percentual = classificacao === "Novo" ? 0.5 : 0.3;
    return valor * percentual;
};

const calcularParcelas = (valor, entrada) => {
    const valorFinanciado = valor - entrada;
    const parcelas = valorFinanciado / 10;
    return parcelas;
};