"use strict";

// Mostra nome.
// function showHello() {
//     let name = document.getElementById("inNome").value;
//     document.getElementById("outResponse").textContent = "Hello, " + name + " !";
// }

// let show = document.getElementById("btShow");
// show.addEventListener("click", showHello);

// Vídeo Locadora

function convertDuration() {
    const MINUTES = 60;
    let title = document.getElementById("inTitle").value;
    let duration = Number(document.getElementById("inDuration").value);

    let hours = Math.floor(duration / MINUTES);
    let minutes = duration % MINUTES;

    document.querySelector('.outTitle').textContent = title;
    document.querySelector('.outResponse').textContent = hours + " hours and " + minutes + " minutes ";
}

let btConvert = document.getElementById("btConvert").addEventListener("click", convertDuration);





