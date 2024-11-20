"use strict";

const frm = document.querySelector("form");
const resp = document.querySelector("p");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const frase = frm.inTexto.value.toUpperCase();

    if (!frase.trim().includes(" ")) {
        alert("Informe, por favor, uma frase.");
        frm.querySelector("#inTexto").focus();
        return;
    }

    const fraseSemEspaco = frase.replace(/ /g, "");
    const fraseInvertida = fraseSemEspaco.split("").reverse().join("");

    const resultado = (fraseSemEspaco === fraseInvertida) ? `${frase} é um Palíndromo.` : `${frase} Não é um Palíndromo.`;

    resp.textContent = resultado;
});
