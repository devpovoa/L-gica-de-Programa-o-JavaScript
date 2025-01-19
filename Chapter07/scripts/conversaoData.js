"use strict";

const hoje = new Date();
const dia = hoje.getDate();
const mes = hoje.getMonth() + 1;
const ano = hoje.getFullYear();
const dia1 = dia.toString().padStart(2, "0");
const mes1 = mes.toString().padStart(2, "0");
console.log(`Data: ${dia1}/${mes1}/${ano}`);