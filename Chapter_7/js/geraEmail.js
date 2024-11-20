"use strict";

const frm = document.querySelector("form");
const resp = document.querySelector("span");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;

    if (!nome.includes(" ")) {
        alert("Informe o nome completo...");
        return;
    }
    const partes = nome.split(" ");

    let email = '';
    const tamanho = partes.length;
    // for (let i = 0; i < tamanho - 1; i++) {
    //     email += partes[i].charAt(0);
    // }
    email = partes.slice(0, tamanho - 1).map(p => p.charAt(0)).join('');

    email += `${partes[tamanho - 1]}@empresa.com.br`;
    resp.textContent = email.toLowerCase();
    frm.inNome.focus();
});

frm.btReset.addEventListener("click", () => {
    location.reload()
});