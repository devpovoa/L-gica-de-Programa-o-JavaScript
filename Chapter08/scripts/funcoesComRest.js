"use strict";

const prompt = require("prompt-sync")();

const calcularMedia = (...notas) => {

    if (notas.length === 0) {
        throw new Error("Nenhuma nota foi fornecida.");
    };

    const notasInvalidas = notas.some(nota => isNaN(nota) || nota < 0);
    if (notasInvalidas) {
        throw new Error("Todas as notas devem ser números válidos e não negativos.");
    };

    const soma = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    const media = soma / notas.length;
    return media.toFixed(1);
};

const obterNotas = () => {
    while (true) {
        const inNotas = prompt("Digite as notas separadas por vírgula (,): ");
        const notas = inNotas.split(',').map(nota => parseFloat(nota.trim()));

        try {
            const media = calcularMedia(...notas);
            return `Média: ${media}`;
        } catch (erro) {
            console.log(`Erro: ${erro.message}. Tente novamente.`);
        }
    };
};

const resultado = obterNotas();
console.log(`Resultado - ${resultado}`);
