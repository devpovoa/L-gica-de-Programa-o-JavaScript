"use strict";

function showHello() {
    let name = document.getElementById("inNome").value;
    document.getElementById("outResponse").textContent = "Hello, " + name + " !";
}

let show = document.getElementById("btShow");
show.addEventListener("click", showHello);