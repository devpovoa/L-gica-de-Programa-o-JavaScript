"use strict";

const frm = document.querySelector("form");

const { inNome, outResultado } = frm;

const validarNome = (nome) => nome.includes(" ");

const obterSobrenome = (nome) => {
 const ultimoEspaco = nome.lastIndexOf(" ");
 return nome.slice(ultimoEspaco + 1).toLowerCase();
};

const contarVogais = (nome) => {
 const vogais = "aeiou";
 return nome.toLowerCase().split('').filter(letra => vogais.includes(letra)).length.toString().padStart(2, "0");

};


frm.addEventListener("submit", (e) => {
 e.preventDefault();

 const nomeCompleto = inNome.value.trim();

 if (!validarNome(nomeCompleto)) {
  alert("Informe o nome completo do aluno.");
  inNome.focus();
  return;
 };
 outResultado.value = `${obterSobrenome(nomeCompleto)}${contarVogais(nomeCompleto)}`;
});