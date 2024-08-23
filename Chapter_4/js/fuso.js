"use strict";

const frm = document.querySelector("form");
const resp = document.querySelector(".outFusoHorario");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const horaLocal = Number(frm.inHora.value);

    let horaNaFranca = horaLocal + 5;
    if (horaNaFranca > 24) {
        horaNaFranca -= 24;
    }

    resp.textContent = `Hora na França: ${horaNaFranca.toFixed(2)}`;
});

frm.addEventListener("reset", () => {
    resp.textContent = '';
});
