# Vetores e Arrays

### Inclusão e exclusão de itens

```js
codigo.push();
codido.unshift();
codigo.pop();
codigo.shift();
codigo.splice();
```

### Formas de percorrer Vetores e Arrays

```js
for(const cidade of cidades){
    console.log(cidade);
};

cidades.forEach((cidade, i) => {
    console.log(`${i + 1}ª Cidades: ${cidade}`);
});

const numeros = [5,10,15,20];
let soma = 0;
numeros.forEach(num => soma += num);
console.log(`Soma dos Números: ${soma}`);
```

### Formas de verificar a existência de um conteúdo no vetor

```js
indexOf();
lastIndexOf();
includes();
```

### Vetores e Objetos

```js
const carros = [];
carros.push({modelo: " ", preco: });
```

### Desestruturação e operador Rest/Spread

```js
for(const carro of carros){
    const {modelo, preco} = carro;
    console.log(`${modelo} - R$: ${preco}`);
}

const pacientes = ["Thiago", "Daiana", "Ysabelle", "Arthur"];
const [atender, proximo, ...outros] = pacientes;
console.log(atender);
console.log(proximo);
console.log(outros);
```

### Flags ou sinalizadores

```js
const idades = [12,16,15,17,14];
let sinalizador = false;
for(const idade of idades){
  if(idade >= 18){
      console.log(idade);
      sinalizador = true;
  }  
};

if(!sinalizador){
    console.log(`Não há idades maiores que 18 na lista: ${idades.join(", ")}.`);
};
```

### Map, Filter e Reduce

***Método Map().***

```js
const numeros = [10, 13, 20, 8, 15];
const dobro = numeros.map(num => num * 2);
console.log(dobro.join(", "));
```

***Método Filter().***

```js
const numeros = [10, 13, 20, 8, 15];
const pares = numeros.filter(num => num % 2 == 0);
console.log(pares.join(", "));
```

***Método Reduce().***

```js
const numeros = [10, 13, 20, 8, 15];
const soma = numeros.reduce((acumulador, num)=> acumulador + num, 0);
console.log(`Soma: ${soma}`);
```



### Formas de exibição

```js
toString();
join();
```

### Formas de classificar os itens de um vetor

```js
sort();
slice();
reverse();
```
