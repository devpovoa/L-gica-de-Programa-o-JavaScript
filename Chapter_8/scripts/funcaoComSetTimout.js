"use strict";

const mostrarHora = () => {
    const data = new Date();

    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds().toString().padStart(2, "0");

    console.log(`Atenção para o horário: ${hora}:${min}:${seg}`);
}; setTimeout(mostrarHora, 2000);
