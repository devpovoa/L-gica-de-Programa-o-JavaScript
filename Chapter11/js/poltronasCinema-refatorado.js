"use strict";

const POLTRONAS = 240;
const reservadas = [];
const frm = document.querySelector("form");
const dvTela = document.querySelector("#dvTela");

const carregarPoltronasOcupadas = () => {
 const ocupadas = localStorage.getItem("poltronasOcupadas");
 return ocupadas ? ocupadas.split(";") : [];
};

const salvarPoltronasOcupadas = (ocupadas) => {
 localStorage.setItem("poltronasOcupadas", ocupadas.join(";"));
};

const criarPoltrona = (numero, ocupadas) => {
 const figure = document.createElement("figure");
 const imgStatus = document.createElement("img");

 imgStatus.src = ocupadas.includes(numero.toString())
  ? "img/ocupada.jpg"
  : "img/disponivel.jpg";
 imgStatus.className = "poltrona";

 const figureCap = document.createElement("figcaption");
 const zeros = numero < 10 ? "00" : numero < 100 ? "0" : "";
 const num = document.createTextNode(`[${zeros}${numero}]`);

 figureCap.appendChild(num);
 figure.appendChild(imgStatus);
 figure.appendChild(figureCap);

 if (numero % 24 === 12) figure.style.marginRight = "280px";
 dvTela.appendChild(figure);

 if (numero % 24 === 0) dvTela.appendChild(document.createElement("br"));
};

const inicializarPoltronas = () => {
 const ocupadas = carregarPoltronasOcupadas();
 for (let i = 1; i <= POLTRONAS; i++) {
  criarPoltrona(i, ocupadas);
 }
};


const reservarPoltrona = (poltrona) => {
 const ocupadas = carregarPoltronasOcupadas();

 if (poltrona > POLTRONAS || ocupadas.includes(poltrona.toString())) {
  alert(`Poltrona ${poltrona} inválida ou já ocupada.`);
  return false;
 }

 const imgPoltrona = dvTela.querySelectorAll("img")[poltrona - 1];
 imgPoltrona.src = "img/reservada.jpg";
 reservadas.push(poltrona);

 return true;
};

const confirmarReservas = () => {
 if (reservadas.length === 0) {
  alert("Não há poltronas reservadas.");
  return;
 }

 const ocupadas = carregarPoltronasOcupadas();

 reservadas.forEach((poltrona) => {
  ocupadas.push(poltrona);
  const imgPoltrona = dvTela.querySelectorAll("img")[poltrona - 1];
  imgPoltrona.src = "img/ocupada.jpg";
 });

 reservadas.length = 0; // Limpa as reservas
 salvarPoltronasOcupadas(ocupadas);
};

const resetarSistema = () => {
 localStorage.removeItem("poltronasOcupadas");
 location.reload();
};

window.addEventListener("load", inicializarPoltronas);

frm.addEventListener("submit", (e) => {
 e.preventDefault();
 const poltrona = parseInt(frm.inPoltrona.value.trim());

 if (isNaN(poltrona)) {
  alert("Informe um número de poltrona válido.");
 } else {
  reservarPoltrona(poltrona);
 }

 frm.inPoltrona.value = "";
 frm.inPoltrona.focus();
});

frm.btConfirmar.addEventListener("click", confirmarReservas);

frm.addEventListener("reset", resetarSistema);
