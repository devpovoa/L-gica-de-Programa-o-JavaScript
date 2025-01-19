"use strict";

const hoje = new Date();
const dia = hoje.getDate();
const mes = hoje.getMonth();
const ano = hoje.getFullYear();
console.log(hoje.toDateString());
console.log(`Data: ${dia}/${mes + 1}/${ano}`);