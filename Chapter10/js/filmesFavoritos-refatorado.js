"use strict";

const frm = document.querySelector("form");
const tbFilmes = document.querySelector("table");

const getLocalStorageData = (key) => (localStorage.getItem(key) || "").split(";").filter(Boolean);

const setLocalStorageData = (key, data) => {
 localStorage.setItem(key, data.join(";"));
};

const syncLocalStorage = () => {

 const titulos = Array.from(tbFilmes.rows).slice(1).map((row) => row.cells[0].textContent);
 const generos = Array.from(tbFilmes.rows).slice(1).map((row) => row.cells[1].textContent);

 setLocalStorageData("filmesTitulo", titulos);
 setLocalStorageData("filmesGenero", generos);
};

const inserirLinha = (titulo, genero) => {

 const linha = tbFilmes.insertRow(- 1);
 linha.insertCell(0).textContent = titulo;
 linha.insertCell(1).textContent = genero;
 linha.insertCell(2).innerHTML = "<i class='exclui' title='Excluir'>&#10008</i>";
};

const carregarFilmes = () => {

 const titulos = getLocalStorageData("filmesTitulo");
 const generos = getLocalStorageData("filmesGenero");

 titulos.forEach((titulo, i) => inserirLinha(titulo, generos[i]));
};

const adicionaFilme = (e) => {
 e.preventDefault();

 const titulo = frm.inTitulo.value.trim();
 const genero = frm.inGenero.value.trim();

 if (!titulo || !genero) {
  alert("Por favor, preencha todos os campos.");
  return;
 };

 inserirLinha(titulo, genero);
 syncLocalStorage();

 frm.reset();
 frm.inTitulo.focus();
};

const excluirFilme = (e) => {

 if (!e.target.classList.contains("exclui")) return;

 const linha = e.target.closest("tr");
 const titulo = linha.cells[0].textContent;

 if (confirm(`Confirmar exclusão de filme "${titulo}"?`)) {
  linha.remove();

  if (tbFilmes.rows.length === 1) {
   localStorage.removeItem("filmesTitulo");
   localStorage.removeItem("filmesGenero");
  } else {
   syncLocalStorage();
  }
 };
};

frm.addEventListener("submit", adicionaFilme);
tbFilmes.addEventListener("click", excluirFilme);
window.addEventListener("load", carregarFilmes);