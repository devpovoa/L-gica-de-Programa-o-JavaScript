"use strict";

const frm = document.querySelector("form");
const resp = document.querySelector("span");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const senha = frm.inSenha.value;
    const erros = [];
    const regexNum = /\d/g;
    const regexLower = /[a-z]/g;
    const regexUpper = /[A-Z]/g;
    const regexSymbol = /[\W|_]/g;

    if (senha.length < 8 || senha.length > 15) {
        erros.push("possuir entre 8 e 15 caracteres");
    }

    if (!regexNum.test(senha)) {
        erros.push("possuir números (no mínimo, 1)");
    }

    if (!regexLower.test(senha)) {
        erros.push("possuir letras minúsculas (no mínimo, 1)");
    }

    const upperMatches = senha.match(regexUpper) || [];
    if (upperMatches.length < 2) {
        erros.push("possuir letras maiúsculas (no mínimo, 2)");
    }

    if (!regexSymbol.test(senha)) {
        erros.push("possuir símbolos (no mínimo, 1)");
    }

    resp.textContent = erros.length == 0 ? `OK!, Senha Válida.` : `Erro... A senha deve ${erros.join(", ")}.`;
    frm.inSenha.focus();
});

frm.btReset.addEventListener("click", () => {
    window.location.reload();
});