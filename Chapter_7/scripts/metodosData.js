"use strict";

const hoje = new Date();
const amanha = new Date();

const dia = amanha.getDate();
amanha.setDate(dia + 1);

console.log(`Hoje: ${hoje}\nAmanhã: ${amanha}`);