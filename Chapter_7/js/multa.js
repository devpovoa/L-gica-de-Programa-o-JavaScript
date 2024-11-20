"use strict";

const frm = document.querySelector("form");
const resp1 = document.querySelector("#outDataLimite");
const resp2 = document.querySelector("#outComDesconto");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = frm.inData.value;
    const valor = parseFloat(frm.inMulta.value);

    const formatarData = (data) => {
        const dia = data.getDate().toString().padStart(2, "0");
        const mes = (data.getMonth() + 1).toString().padStart(2, "0");
        const ano = data.getFullYear();

        return `${dia}/${mes}/${ano}`
    }

    const calcularDataLimite = (data) => {
        const dataLimite = new Date();
        dataLimite.setDate(dataLimite.getDate() + 90);

        return dataLimite;
    }


    const stringParaData = (dataString) => {
        const partes = dataString.split('-');

        return new Date(partes[0], partes[1] - 1, partes[2])
    }

    const dataConvertida = stringParaData(data);
    const dataLimite = calcularDataLimite(dataConvertida)

    const valorComDesconto = valor * 0.80;

    resp1.textContent = `Data Limite para Pagto com Desconto: ${formatarData(dataLimite)}`;

    resp2.textContent = `Valor com Desconto R$: ${valorComDesconto.toFixed(2)}`;
});