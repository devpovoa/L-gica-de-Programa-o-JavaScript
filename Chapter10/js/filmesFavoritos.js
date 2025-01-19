"use strict";

const frm = document.querySelector("form");
const tbFilmes = document.querySelector("table");

frm.addEventListener("submit", (e) => {
 e.preventDefault();

 const titulo = frm.inTitulo.value.trim();
 const genero = frm.inGenero.value.trim();

 inserirLinha(titulo, genero);
 gravarFilme(titulo, genero);

 frm.reset();
 frm.inTitulo.focus();
});


const inserirLinha = (titulo, genero) => {

 const linha = tbFilmes.insertRow(- 1);

 const col1 = linha.insertCell(0);
 const col2 = linha.insertCell(1);
 const col3 = linha.insertCell(2);

 col1.textContent = titulo;
 col2.textContent = genero;
 col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008</i>";
};

const gravarFilme = (titulo, genero) => {

 if (localStorage.getItem("filmesTitulo")) {
  const filmesTitulo = localStorage.getItem("filmesTitulo") + ';' + titulo;
  const filmesGenero = localStorage.getItem("filmesTitulo") + ';' + genero;
  localStorage.setItem("filmesTitulo", filmesTitulo);
  localStorage.setItem("filmesGenero", filmesGenero);
 } else {
  localStorage.setItem("filmesTitulo", titulo);
  localStorage.setItem("filmesGenero", genero);
 };
};

window.addEventListener("load", () => {

 if (localStorage.getItem("filmesTitulo")) {
  const titulos = localStorage.getItem("filmesTitulo").split(";");
  const generos = localStorage.getItem("filmesGenero").split(";");

  for (let i = 0; i < titulos.length; i++) {
   inserirLinha(titulos[i], generos[i]);
  };
 };
});

tbFilmes.addEventListener("click", (e) => {

 if (e.target.className.includes("exclui")) {
  const titulo = e.target.parentElement.parentElement.children[0].textContent;

  if (confirm(`Confirma Exclusão do Filme "${titulo}"?`)) {
   e.target.parentElement.parentElement.remove();
   localStorage.removeItem("filmesTitulo");
   localStorage.removeItem("filmesGenero");

   for (let i = 1; i < tbFilmes.rows.length; i++) {
    const auxTitulo = tbFilmes.rows[i].cells[0].textContent;
    const auxGenero = tbFilmes.rows[i].cells[1].textContent;
    gravarFilme(auxTitulo, auxGenero);
   };
  };
 };
});
