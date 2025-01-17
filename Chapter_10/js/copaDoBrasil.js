"use strict";

const frm = document.querySelector("form");
const dvJogos = document.querySelector("#dvJogos");

frm.addEventListener("submit", (e) => {
 e.preventDefault();

 const clube = frm.inClube.value.trim();

 const novoH5 = document.createElement("h5");
 novoH5.className = "text-end me-2";
 novoH5.style.fontStyle = "italic";

 const texto = document.createTextNode(clube);

 dvJogos.appendChild(novoH5).appendChild(texto);

 frm.inClube.value = '';
 frm.inClube.focus();
});

frm.btMontar.addEventListener("click", () => {

 const h5 = dvJogos.querySelectorAll("h5");

 if (h5.length == 0 || h5.length % 2 == 1) return alert("O número de clubes inseridos deve ser par.");

 const novoh3 = document.createElement("h3");
 const texto = document.createTextNode("Tabela de Jogos");
 dvJogos.appendChild(novoh3).appendChild(texto);

 const novaTabela = document.createElement("table");
 novaTabela.className = "table table-striped";
 dvJogos.appendChild(novaTabela);

 let linha;
 for (let i = 0; i < h5.length; i++) {
  if (i % 2 == 0) {
   linha = novaTabela.insertRow(-1);
   const col1 = linha.insertCell(0);
   col1.textContent = h5[i].innerText;
  } else {
   const col2 = linha.insertCell(1);
   col2.textContent = h5[i].innerText;
  };
 };

 frm.btMontar.disabled = true;
 frm.btAdicionar.disabled = true;
});

frm.addEventListener("reset", () => {
 location.reload();
});