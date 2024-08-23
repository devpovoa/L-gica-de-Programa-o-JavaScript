"use strict";

const frm = document.querySelector("form");
const resp = document.querySelector(".outPeso");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    const masculino = frm.rbMasculino.checked;
    const altura = Number(frm.inAltura.value);

    const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2);

    resp.textContent = `${nome}: seu peso ideal é ${peso.toFixed(3)} kg.`;
});

frm.addEventListener("reset", () => {
    resp.textContent = '';
});