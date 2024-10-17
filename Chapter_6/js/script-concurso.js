"use strict";

const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const candidatos = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = String(frm.inCandidato.value);
    const acertos = Number(frm.inAcertos.value);

    candidatos.push({ nome, acertos });

    frm.inCandidato.value = '';
    frm.inAcertos.value = '';
    frm.inCandidato.focus();

    frm.btListar.dispatchEvent(new Event("click"));
});

frm.btListar.addEventListener("click", () => {
    if (candidatos.length == 0) {
        alert("Não há candidatos na lista.");
        return;
    }

    let lista = '';
    for (const candidato of candidatos) {
        lista += `${candidato.nome} - ${candidato.acertos} acertos.\n`;
    }

    resp.textContent = lista;
});

frm.btAprovados.addEventListener("click", () => {

    if (candidatos.length == 0) {
        alert("Não há candidatos na lista.")
        return;
    }

    const notaCorte = Number(prompt("Nota de corte para Aprovação?"));

    if (notaCorte == 0 || isNaN(notaCorte)) {
        alert("Valor inválido.");
        return;
    }

    const listaCopia = candidatos.slice();

    listaCopia.sort((a, b) => {
        if (a.acertos > b.acertos) {
            return 1;
        }

        if (a.acertos < b.acertos) {
            return - 1;
        }

        return 0;
    });

    listaCopia.reverse();

    let aprovados = '';
    for (const candidato of listaCopia) {
        if (candidato.acertos >= notaCorte) {
            aprovados += `${candidato.nome} - ${candidato.acertos} acertos.\n`;
        }
    }

    if (aprovados == '') {
        resp.textContent = "Não há candidatos aprovados.";
    } else {
        resp.textContent = aprovados;
    }
});