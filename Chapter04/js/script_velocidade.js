"use strict";

const frm = document.querySelector("form");
const resp = document.querySelector(".outMulta");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const velocPermitida = Number(frm.inVelocPermitida.value);
    const velocCondutor = Number(frm.inVelocCondutor.value);

    if (velocCondutor <= velocPermitida) {
        resp.textContent = `Situação: Sem Multa.`;
    } else {
        const multa = velocPermitida * 1.2;
        if (velocCondutor <= multa) {
            resp.textContent = `Situação: Multa Leve.`;
        } else {
            resp.textContent = `Situação: Multa Grave.`;
        }
    }
});

frm.addEventListener("reset", () => {
    resp.textContent = '';
});
