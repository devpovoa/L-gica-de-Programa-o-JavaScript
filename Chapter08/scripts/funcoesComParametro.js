"use strict";

const prompt = require("prompt-sync")();

const situacao = (nota, media) => {
    if (isNaN(nota)) {
        throw new Error("A nota informada não é válida. Por favor, insira um número.");
    }

    if (nota < 0) {
        throw new Error("A nota não pode ser negativa.");
    }

    const resultado = nota >= media ? "Aprovado" : "Reprovado";
    return resultado;
};

const obterNota = () => {
    const media = 7;
    let avaliacao;

    while (true) {
        const inNota = prompt("Qual a nota: ");
        avaliacao = parseFloat(inNota);

        if (!isNaN(avaliacao) && avaliacao >= 0) {
            break;
        } else {
            console.log("Entrada inválida! Por favor, insira um número positivo válido")
        }
    }

    return situacao(avaliacao, media);
}


try {
    const resultado = obterNota();
    console.log(`Resultado: ${resultado}`)
} catch (erro) {
    console.error(erro.message);
}



