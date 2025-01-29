"use strict";

class StorageManager {
 static getData(key) {
  return localStorage.getItem(key)?.split(";") || [];
 }

 static addData(key, value) {
  const existingData = this.getData(key);
  existingData.push(value);
  localStorage.setItem(key, existingData.join(";"));
 }

 static setData(key, data) {
  localStorage.setItem(key, data.join(";"));
 }
}

class InputValidator {
 static isValidWord(word) {
  return word && !word.includes(" ");
 }

 static isNotEmpty(value) {
  return value.trim().length > 0;
 }
}

class WordGameApp {
 constructor(formElement) {
  this.formElement = formElement;

  this.bindEvents();
 }

 bindEvents() {
  this.formElement.addEventListener("submit", (e) => this.handleFormSubmit(e));
 }

 handleFormSubmit(e) {
  e.preventDefault();

  const palavra = this.formElement.inPalavra.value.trim();
  const dica = this.formElement.inDica.value.trim();

  if (!InputValidator.isValidWord(palavra)) {
   alert("Informe uma palavra válida (sem espaços).");
   this.formElement.inPalavra.focus();
   return;
  }

  if (!InputValidator.isNotEmpty(dica)) {
   alert("Informe uma dica válida.");
   this.formElement.inDica.focus();
   return;
  }

  StorageManager.addData("jogoPalavra", palavra);
  StorageManager.addData("jogoDica", dica);

  alert(`OK! Palavra "${palavra}" cadastrada com sucesso!`);

  this.formElement.reset();
  this.formElement.inPalavra.focus();
 }
}

document.addEventListener("DOMContentLoaded", () => {
 const formElement = document.querySelector("form");
 new WordGameApp(formElement);
});
