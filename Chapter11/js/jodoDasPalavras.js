"use strict";

const frm = document.querySelector("form");

frm.addEventListener("submit", (e) => {
 e.preventDefault();

 const palavra = frm.inPalavra.value.trim();
 const dica = frm.inDica.value.trim();

 if (palavra.includes(" ")) {
  alert("Informe uma palavra válida (sem espaços).");
  frm.inPalavra.focus();
  return;
 };

 if (localStorage.getItem("jogoPalavra")) {
  localStorage.setItem("jogoPalavra", localStorage.getItem("jogoPalavra") + ";" + palavra);
  localStorage.setItem("jogoDica", localStorage.getItem("jogoDica") + ";" + dica);
 } else {
  localStorage.setItem("jogoPalavra", palavra);
  localStorage.setItem("jogoDica", dica);
 };

 if (localStorage.getItem("jogoPalavra")) {
  alert(`OK! Palavra ${palavra} Cadastrada com Sucesso!`);
 };

 frm.reset();
 frm.inPalavra.focus();
});