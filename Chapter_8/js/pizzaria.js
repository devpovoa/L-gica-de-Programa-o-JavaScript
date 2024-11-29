"use strict";

const frm = document.querySelector("form");

const intes = [];

const { btPizza, btBebida, inPizza, inBebida, inDetalhes, outSaida } = frm;

const toggleVisibility = (showPizza) => {
 inPizza.classList.toggle('exibe', showPizza);
 inPizza.classList.toggle('oculta', !showPizza);
 inBebida.classList.toggle('exibe', !showPizza);
 inBebida.classList.toggle('oculta', showPizza);
}

btPizza.addEventListener("click", () => toggleVisibility(true));
btBebida.addEventListener("click", () => toggleVisibility(false));

const getSelectProduct = () => {
 if (btPizza.checked) {
  const selectedIndex = inPizza.selectedIndex;
  return inPizza.options[selectedIndex].text;
 }

 const selectedIndex = inBebida.selectedIndex;
 return inBebida.options[selectedIndex].text;
};

inDetalhes.addEventListener("focus", () => {

 if (btPizza.checked) {
  const pizzaSize = inPizza.value;
  const numFlavors = pizzaSize == 'media' ? 2 : pizzaSize === 'grande' ? 3 : 4;
  inDetalhes.placeholder = `Até ${numFlavors} sabores`;

 }
});

inDetalhes.addEventListener("blur", () => {
 inDetalhes.placeholder = '';
});


frm.addEventListener("submit", (e) => {
 e.preventDefault();

 const produto = getSelectProduct();
 const detalhes = inDetalhes.value;
 intes.push(`${produto} (${detalhes})`)

 outSaida.textContent = intes.join("\n");

 frm.reset();
 toggleVisibility(true);
});