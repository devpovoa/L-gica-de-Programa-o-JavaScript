"use strict";

const frm = document.querySelector("form");
const resp1 = document.querySelector(".outTitulo");
const resp2 = document.querySelector(".outHm");

frm.addEventListener("submit", (e) => {

    const titulo = frm.inFilme.value;
    const duracao = Number(frm.inDuracao.value);

    const hora = Math.floor(duracao / 60);
    const minutos = duracao % 60;

    resp1.textContent = titulo;
    resp2.textContent = `${hora} horas(s) e ${minutos} minutos(s)`;

    e.preventDefault();
});