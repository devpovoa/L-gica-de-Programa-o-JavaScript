"use strict";

const frm = document.querySelector("form");
const dvTela = document.querySelector("#dvTela");

const POLTRONAS = 240;
const reservadas = [];

window.addEventListener("load", () => {
 const ocupadas = localStorage.getItem("poltronasOcupadas") ? localStorage.getItem("poltronasOcupadas").split(";") : [];

 for (let i = 1; i <= POLTRONAS; i++) {
  const figure = document.createElement("figure");
  const imgStatus = document.createElement("img");

  imgStatus.src = ocupadas.includes(i.toString())
   ? "img/ocupada.jpg"
   : "img/disponivel.jpg";
  imgStatus.className = "poltrona";
  const figureCap = document.createElement("figcaption");

  const zeros = i < 10 ? "00" : i < 100 ? "0" : "";

  const num = document.createTextNode(`[${zeros}${i}]`);

  figureCap.appendChild(num);
  figure.appendChild(imgStatus);
  figure.appendChild(figureCap);

  if (i % 24 == 12) figure.style.marginRight = "280px";
  dvTela.appendChild(figure);

  (i % 24 == 0) && dvTela.appendChild(document.createElement("br"));

 };
});

frm.addEventListener("submit", (e) => {
 e.preventDefault();

 const poltrona = parseInt(frm.inPoltrona.value.trim());

 if (poltrona > POLTRONAS) {
  alert("Informe um número de poltrona válido.");
  frm.inPoltrona.focus();
  return;
 };

 const ocupadas = localStorage.getItem("poltronasOcupadas") ? localStorage.getItem("poltronasOcupadas").split(";") : [];

 if (ocupadas.includes(poltrona.toString())) {
  alert(`Poltrona ${poltrona} já está ocupada...`);
  frm.inPoltrona.value = '';
  frm.inPoltrona.focus();
  return;
 };

 const imgPoltrona = dvTela.querySelectorAll("img")[poltrona - 1];
 imgPoltrona.src = "img/reservada.jpg";
 reservadas.push(poltrona);
 frm.inPoltrona.value = '';
 frm.inPoltrona.focus();
});

frm.btConfirmar.addEventListener("click", () => {
 if (reservadas.length == 0) {
  alert("Não há poltronas reservadas.");
  frm.inPoltrona.focus();
  return;
 };

 const ocupadas = localStorage.getItem("poltronasOcupadas") ? localStorage.getItem("poltronasOcupadas").split(";") : [];

 for (let i = reservadas.length - 1; i >= 0; i--) {
  ocupadas.push(reservadas[i]);
  const imgPoltrona = dvTela.querySelectorAll("img")[reservadas[i] - 1];

  imgPoltrona.src = "img/ocupada.jpg";
  reservadas.pop();
 };
 localStorage.setItem("poltronasOcupadas", ocupadas.join(";"))
});

frm.addEventListener("reset", () => {
 localStorage.removeItem("poltronasOcupadas");
 location.reload();
});


