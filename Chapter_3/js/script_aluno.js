"use strict";

// Programa para avaliar situação do Aluno.

function mediaAluno() {
    const MEDIA = 7.0;
    
    let nomeAluno = document.getElementById("inAluno").value;
    let nota1 = Number(document.getElementById("inNota1").value);
    let nota2 = Number(document.getElementById("inNota2").value);
    
    let somaMedia = (nota1 + nota2) / 2;
    document.querySelector('.outMedia').textContent = "Média das Notas: " + somaMedia.toFixed(1);

   
    if (somaMedia >= MEDIA) {
      document.querySelector('.outAprovado').textContent = "Parabéns " + nomeAluno + "! Você foi aprovado(a).";
    } else {
        document.querySelector('.outReprovado').textContent = "Ops... " + nomeAluno + "! Você foi reprovado(a).";
    }
}

let btSituacao = document.getElementById("btSituacao").addEventListener("click", mediaAluno);
