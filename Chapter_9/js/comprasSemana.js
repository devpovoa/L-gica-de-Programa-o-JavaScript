"use strict";

const frm = document.querySelector("form");
const outLista = document.querySelector("pre");
const outErro = document.getElementById("erro");

const getLocalStorageArray = (key) => {
 return localStorage.getItem(key) ? localStorage.getItem(key).split(";") : [];
};

const setLocalStorageArray = (key, array) => {
 localStorage.setItem(key, array.join(";"));
};

const verificarExistencia = (produto) => {
 const produtos = getLocalStorageArray("listaProdutos");
 return produtos.includes(produto.toString());
};

const mostrarLista = () => {
 const produtos = getLocalStorageArray("listaProdutos");

 if (produtos.length === 0 || !produtos) {
  outLista.textContent = '';
  return;
 }

 const lista = produtos.map((produto, i) => `${i + 1}. ${produto}`).join("\n");
 outLista.textContent = lista;
};

frm.btLimpar.addEventListener("click", () => {
 if (confirm("Confirmar exclusão da lista de Produtos?")) {
  localStorage.removeItem("listaProdutos");
  mostrarLista();
 };
});

frm.addEventListener("submit", (e) => {
 e.preventDefault();

 const produto = frm.inProduto.value.trim();

 if (!produto) {
  alert("Campo vazio, informe um produto.");
  frm.inProduto.focus();
  return;
 };

 if (verificarExistencia(produto)) {
  alert("Produto já castrado, informer outro.");
  frm.inProduto.focus();
  return;
 };

 const produtos = getLocalStorageArray("listaProdutos");

 produtos.push(produto);
 produtos.sort();

 setLocalStorageArray("listaProdutos", produtos);
 mostrarLista();
 frm.reset();
 frm.inProduto.focus();
});

const validarLetras = (input) => {
 const regex = /^[a-zA-Zà-ÿÀ-Ÿ\s]*$/;
 const isValid = regex.test(input.value);

 outErro.style.display = isValid ? "none" : "block";
 input.value = isValid ? input.value : input.value.replace(/[^a-zA-Zà-ÿÀ-Ÿ\s]/g, '');

};

window.addEventListener("load", mostrarLista());