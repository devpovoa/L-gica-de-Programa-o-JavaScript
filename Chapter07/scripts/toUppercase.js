"use strict";

const prompt = require("prompt-sync")();

while (true) {
    console.log("Estou repetindo");

    const continuar = prompt("continuar(S/N)?:");
    if (continuar.toLocaleUpperCase() == "N") {
        break;
    }

}