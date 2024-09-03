"use strict";


const frm = document.querySelector("form");
const resp = document.querySelector("#outExibir");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);
    const ano = Number(frm.inAno.value);

    let saida = '';
    let mult = numero;
    for (let i = 1; i <= ano; i++) {
        saida += `${i}º Ano: ${mult} Chinchilas\n`;
        mult *= 3;
    }

    resp.textContent = `${saida}`;

    frm.inNumero.value = '';
    frm.inAno.value = '';
    frm.inNumero.focus();
});

frm.addEventListener("reset", () => {
    resp.textContent = '';
    frm.inNumero.focus();
});


