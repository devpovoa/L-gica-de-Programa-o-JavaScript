"use strict";

const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

const valores = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);

    valores.push(numero);

    resp1.textContent = `Números: ${valores.join(", ")}`;

    resp2.textContent = '';
    frm.inNumero.value = '';
    frm.inNumero.focus();
});

frm.btVerificar.addEventListener("click", () => {

    if (valores.length == 0) {
        alert("Não há números na lista.");
        frm.inNumero.focus();
        return;
    }

    let ordem = true;

    for (let i = 0; i < valores.length - 1; i++) {
        if (valores[i] > valores[i + 1]) {
            ordem = false;
            break;
        }
    }

    resp2.textContent = ordem ? "OK! Números estão em ordem crescente." : "Atenção, Números não estão em ordem crescente."
});

frm.btReset.addEventListener("click", () => {
    location.reload();
});

