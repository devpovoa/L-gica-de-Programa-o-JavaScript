"use strict";

setInterval(() => {
    const data = new Date();

    const hora = data.getHours();
    const min = data.getMinutes().toString().padStart(2, "0");
    const seg = data.getSeconds().toString().padStart(2, "0");
    console.log(`Atenção para o horário: ${hora}:${min}:${seg}`);
}, 3000);