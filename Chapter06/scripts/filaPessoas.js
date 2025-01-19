"use strict";

const prompt = require("prompt-sync")();

console.log("Informe o nome e a Idade em ordem de chegada, para sair digite 'Fim'");
const clientes = [];

do {
    const nome = prompt("Nome: ");
    if (nome == "Fim") {
        break;
    }

    const idade = Number(prompt("idade: "));
    clientes.push({ nome, idade });
    console.log("OK!, cliente cadastrado...");
} while (true);

console.log(`\nFila Preferencial\n${'-'.repeat(40)}`);
const filaPref = clientes.filter(cliente => cliente.idade >= 60);
filaPref.forEach((fila, i) => { console.log(`${i + 1}. ${fila.nome}`) });

console.log(`\nFila Normal\n${'-'.repeat(40)}`);
const filaNorm = clientes.filter(cliente => cliente.idade < 60);
filaNorm.forEach((fila, i) => { console.log(`${i + 1}. ${fila.nome}`) });

console.log("Bye, bye..")