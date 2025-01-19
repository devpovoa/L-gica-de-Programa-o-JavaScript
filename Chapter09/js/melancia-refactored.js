"use strict";

const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

const getLocalStorageArray = (key) => {
 return localStorage.getItem(key) ? localStorage.getItem(key).split(";") : [];
};

const setLocalStorageArray = (key, array) => {
 localStorage.setItem(key, array.join(";"));
};

const verApostaExiste = (peso) => {
 const pesos = getLocalStorageArray("melanciaPeso");
 return pesos.includes(peso.toString());
};

const mostrarApostas = () => {
 const nomes = getLocalStorageArray("melanciaNome");
 const pesos = getLocalStorageArray("melanciaPeso");

 if (nomes.length === 0) {
  respLista.textContent = "";
  return;
 };

 const linhas = nomes.map((nome, i) => `${nome} - ${pesos[i]}gr`).join("\n");
 respLista.textContent = linhas;
};

const calcularVencedor = (pesoCorreto, nomes, pesos) => {
 return nomes.reduce(
  (vencedor, nomeAtual, i) => {
   const pesoAtual = parseFloat(pesos[i]);
   const diferencaAtual = Math.abs(pesoAtual - pesoCorreto);

   if (diferencaAtual < vencedor.diferenca) {
    return { nome: nomeAtual, peso: pesoAtual, diferenca: diferencaAtual };
   };
   return vencedor;
  },
  { nome: nomes[0], peso: parseFloat(pesos[0]), diferenca: Math.abs(parseFloat(pesos[0]) - pesoCorreto) }
 );
};

frm.btVencedor.addEventListener("click", () => {
 const nomes = getLocalStorageArray("melanciaNome");
 const pesos = getLocalStorageArray("melanciaPeso");

 if (nomes.length === 0) {
  alert("Não há apostas cadastradas.");
  return;
 };

 const pesoCorreto = parseFloat(prompt("Qual o peso correto da melância?"));

 if (!pesoCorreto || isNaN(pesoCorreto)) {
  alert("Peso inválido! Tente novamente.");
  return;
 };

 const vencedor = calcularVencedor(pesoCorreto, nomes, pesos);

 const mensagem = `Resultado - Peso Correto: ${pesoCorreto}gr\n${"-".repeat(20)}\nVencedor: ${vencedor.nome}\nAposta: ${vencedor.peso}gr`;
 alert(mensagem);

});


frm.btLimpar.addEventListener("click", () => {
 if (confirm("Confirmar exclusão de todos as apostas?")) {
  localStorage.removeItem("melanciaNome");
  localStorage.removeItem("melanciaPeso");
  mostrarApostas();
 }
});

frm.addEventListener("submit", (e) => {
 e.preventDefault();

 const nome = frm.inNome.value.trim();
 const peso = parseFloat(frm.inPeso.value);

 if (!nome || isNaN(peso) || peso < 0) {
  alert("Informe um nome válido e um peso positivo.");
  frm.inNome.focus();
  return;
 };

 if (verApostaExiste(peso)) {
  alert("Alguém já apostou este peso, informe outro...");
  frm.inPeso.focus();
  return;
 };

 const nomes = getLocalStorageArray("melanciaNome");
 const pesos = getLocalStorageArray("melanciaPeso");

 nomes.push(nome);
 pesos.push(peso);

 setLocalStorageArray("melanciaNome", nomes);
 setLocalStorageArray("melanciaPeso", pesos);

 mostrarApostas();
 frm.reset();
 frm.inNome.focus();
});

window.addEventListener("load", mostrarApostas);

