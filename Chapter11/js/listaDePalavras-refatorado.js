"use strict";

class StorageManager {
 static getData(key) {
  return localStorage.getItem(key)?.split(";") || [];
 }

 static setData(key, data) {
  localStorage.setItem(key, data.join(";"));
 }

 static removeData(keys) {
  keys.forEach((key) => localStorage.removeItem(key));
 }
}

class TableManager {
 constructor(tableElement) {
  this.tableElement = tableElement;
 }

 clearTable() {
  while (this.tableElement.rows.length > 1) {
   this.tableElement.deleteRow(1);
  }
 }

 populateTable(words, hints) {
  this.clearTable();
  words.forEach((word, index) => {
   const row = this.tableElement.insertRow(-1);
   row.insertCell(0).textContent = word;
   row.insertCell(1).textContent = hints[index] || "";
   row.insertCell(2).innerHTML = "<i class='exclui' title='Excluir'>&#10008;</i>";
  });
 }

 getTableData() {
  const words = [];
  const hints = [];
  for (let i = 1; i < this.tableElement.rows.length; i++) {
   words.push(this.tableElement.rows[i].cells[0].textContent);
   hints.push(this.tableElement.rows[i].cells[1].textContent);
  }
  return { words, hints };
 }

 deleteRow(rowElement) {
  rowElement.remove();
 }
}

class WordGameApp {
 constructor(tableElement, checkboxElement) {
  this.tableManager = new TableManager(tableElement);
  this.checkboxElement = checkboxElement;

  this.init();
 }

 init() {
  this.bindEvents();
 }

 bindEvents() {
  this.checkboxElement.addEventListener("change", () => {
   if (this.checkboxElement.checked) {
    this.loadTableData();
   } else {
    this.tableManager.clearTable();
   }
  });

  this.tableManager.tableElement.addEventListener("click", (e) => {
   if (e.target.classList.contains("exclui")) {
    this.handleDelete(e.target);
   }
  });
 }

 loadTableData() {
  const words = StorageManager.getData("jogoPalavra");
  const hints = StorageManager.getData("jogoDica");
  this.tableManager.populateTable(words, hints);
 }

 handleDelete(target) {
  const row = target.parentElement.parentElement;
  const word = row.cells[0].textContent;

  if (confirm(`Confirma Exclusão da Palavra: ${word}?`)) {
   this.tableManager.deleteRow(row);

   const { words, hints } = this.tableManager.getTableData();

   if (words.length === 0) {
    StorageManager.removeData(["jogoPalavra", "jogoDica"]);
   } else {
    StorageManager.setData("jogoPalavra", words);
    StorageManager.setData("jogoDica", hints);
   };
  };
 }
}

document.addEventListener("DOMContentLoaded", () => {
 const tableElement = document.querySelector("table");
 const checkboxElement = document.querySelector("input[type='checkbox']");
 new WordGameApp(tableElement, checkboxElement);
});
