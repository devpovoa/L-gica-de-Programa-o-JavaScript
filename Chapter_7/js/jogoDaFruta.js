"use strict";

const frm = document.querySelector("form");
const resp = document.querySelector("span");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fruta = frm.inFruta.value.toUpperCase();
    let resposta = '';

    for (const letra of fruta) {
        if (letra == fruta.charAt(0)) {
            resposta += fruta.charAt(0);
        } else {
            resposta += '_';
        }
    }

    resp.textContent = resposta;
    frm.inFruta.value = '*'.repeat(fruta.length);
});