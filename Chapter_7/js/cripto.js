"use strict";

const frm = document.querySelector("form");
const resp = document.querySelector("p");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const mensagem = frm.inTexto.value;

    let resposta = '';
    const tamanho = mensagem.length;

    for (let i = 1; i < tamanho; i = i + 2) {
        resposta += mensagem.charAt(i)
    }

    for (let i = 0; i < tamanho; i = i + 2) {
        resposta += mensagem.charAt(i)
    }

    resp.textContent = resposta;
});

frm.btDescripto.addEventListener("click", () => {

    if (!frm.checkValidity()) {
        alert("informe a mensagem criptografada...");
        frm.querySelector('#inTexto').focus();
        return;
    }

    const mensagem = resp.textContent;

    const tamanho = mensagem.length;
    const metade = Math.floor(tamanho / 2);
    let resposta = '';

    if (tamanho % 2 == 0) {
        for (let i = metade; i < tamanho; i++) {
            resposta += mensagem.charAt(i);
            resposta += mensagem.charAt(i - metade);
        }
    } else {
        for (let i = metade; i < tamanho - 1; i++) {
            resposta += mensagem.charAt(i);
            resposta += mensagem.charAt(i - metade)
        }
        resposta += mensagem.charAt(tamanho - 1);
    }

    resp.textContent = resposta;
});