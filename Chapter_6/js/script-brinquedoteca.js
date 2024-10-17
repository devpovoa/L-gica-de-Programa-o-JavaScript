"use strict";

const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const criancas = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    const idade = Number(frm.inIdade.value);

    criancas.push({ nome, idade });
    frm.reset();
    frm.inNome.focus();

    frm.btListar.dispatchEvent(new Event("click"));
});

frm.btListar.addEventListener("click", () => {
    if (criancas.length == 0) {
        alert("Não há crianças na lista.");
        return;
    }

    let lista = "";
    for (const criança of criancas) {
        const { nome, idade } = criança;
        lista += nome + " - " + idade + " anos\n";
    }

    resp.textContent = lista;
});

frm.btResumir.addEventListener("click", () => {
    if (criancas.length == 0) {
        alert("Não há crianças na lista.");
        return;
    }

    const copia = [...criancas];
    copia.sort((a, b) => a.idade - b.idade);

    let resumo = "";
    let aux = copia[0].idade;
    let nomes = [];
    for (const criança of copia) {
        const { nome, idade } = criança;
        if (idade == aux) {
            nomes.push(nome);
        } else {
            resumo += `${aux} anos(s): ${nomes.length} crianças(s) - ${((nomes.length / copia.length) * 100).toFixed(2)}%\n(${nomes.join(", ")})\n\n`;
            aux = idade;
            nomes = [];
            nomes.push(nome);
        }
    }

    resumo += `${aux} anos(s): ${nomes.length} crianças(s) - ${((nomes.length / copia.length) * 100).toFixed(2)}%\n(${nomes.join(", ")})\n\n`;
    resp.textContent = resumo;
});
