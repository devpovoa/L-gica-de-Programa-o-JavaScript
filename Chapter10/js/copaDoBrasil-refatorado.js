"use strict";

const frm = document.querySelector("form");
const dvJogos = document.querySelector("#dvJogos");

const criarElementoTexto = (tag, texto, className = "", estilo = {}) => {
 const elemento = document.createElement(tag);
 if (className) elemento.className = className;
 Object.assign(elemento.style, estilo);
 elemento.textContent = texto;
 return elemento;
};

const adicionarClube = (clube) => {
 const novoH5 = criarElementoTexto(
  "h5",
  clube,
  "text-end me-2",
  { fontStyle: "italic" }
 );
 dvJogos.appendChild(novoH5);
};

const montarTabelaJogos = () => {
 const h5Elements = dvJogos.querySelectorAll("h5");

 if (h5Elements.length === 0 || h5Elements.length % 2 === 1) {
  alert("O número de clubes inseridos deve ser par.");
  return;
 };

 dvJogos.appendChild(criarElementoTexto("h3", "Tabelas de Jogos"));

 const tabela = document.createElement("table");
 tabela.className = "table table-striped";
 dvJogos.appendChild(tabela);

 h5Elements.forEach((elemento, index) => {
  if (index % 2 === 0) {
   const linha = tabela.insertRow(-1);
   linha.insertCell(0).textContent = elemento.textContent;
  } else {
   tabela.rows[tabela.rows.length - 1].insertCell(1).textContent = elemento.textContent;
  };
 });

 frm.btMontar.disabled = true;
 frm.btAdicionar.disabled = true;
};

const resetarFormulario = () => {
 location.reload();
};

frm.addEventListener("submit", (e) => {
 e.preventDefault();

 const clube = frm.inClube.value.trim();
 if (clube) {
  adicionarClube(clube);
  frm.inClube.value = '';
  frm.inClube.focus();
 }
});

frm.btMontar.addEventListener("click", montarTabelaJogos);
frm.addEventListener("reset", resetarFormulario);