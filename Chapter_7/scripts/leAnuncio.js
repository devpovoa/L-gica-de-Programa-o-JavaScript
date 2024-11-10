"use strict";

// Uso do método CharAt().
const prompt = require("prompt-sync")();

const anuncio = prompt("Anúncio: ");
let numPalavras = 0;

for (const letra of anuncio) {
    if (letra == " ") {
        numPalavras++;
    }
}

// const tamanho = anuncio.length;

// for (let i = 0; i < tamanho; i++) {
//     if (anuncio.charAt(i) == " ") {
//         numPalavras++;
//     }
// }

console.log(`Anúncio: ${anuncio}\nNº Palavras: ${(numPalavras + 1)}`);