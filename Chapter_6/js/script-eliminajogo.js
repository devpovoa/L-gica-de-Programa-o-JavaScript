"use strict";

const frm = document.querySelector("form");
const restLista = document.querySelector("pre");

const clubes = [];


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const clube = String(frm.inClube.value);

    clubes.push(clube);

    frm.btListar.dispatchEvent(new Event("click"));

    frm.inClube.value = '';
    frm.inClube.focus();

});


frm.btListar.addEventListener("click", () => {
    if (clubes.length == 0) {
        alert("Não há clubes na lista.");
        frm.inClube.focus();
        return;
    }

    let lista = '';
    clubes.forEach((time, i) => (lista += `${i + 1}. ${time}\n`));

    restLista.textContent = lista;
});

frm.btTabela.addEventListener("click", () => {

    const lista = clubes.length;

    if (lista == 0 || (lista % 2 == 1)) {
        alert("Adicione um clube para fechar a tabela de jogos.");
        frm.inClube.focus();
        return;
    }

    let jogos = '';
    let ultimoClube = lista - 1;

    for (let i = 0; i < lista / 2; i++) {
        jogos += `${clubes[i]} x ${clubes[ultimoClube - i]}\n`;
    }

    restLista.textContent = jogos;
});

