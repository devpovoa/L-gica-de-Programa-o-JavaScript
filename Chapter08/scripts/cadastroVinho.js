"use strict";

const prompt = require("prompt-sync")();

const vinhos = [];

const incluir = () => {
	console.log(titulo("===< Inclusão de Vinhos >==="));

	const marca = prompt("Marca...: ");
	const tipo = prompt("Tipo...: ");
	const preco = obterPrecoValido();

	vinhos.push({ marca, tipo, preco });
	console.log("OK! Vinho cadastrado com sucesso!");
};

const listar = () => {
	console.log(titulo("===< Lista de Vinhos Cadastrados >==="));

	if (vinhos.length === 0) {
		console.log("Não há vinhos cadastrados.");
		return;
	};

	console.log("Marca...........Tipo...........Preço R$:");
	vinhos.forEach(vinho => {
		console.log(formatarVinho(vinho));
	});
};

const pesquisar = () => {
	console.log(titulo("===< Pesquisar por Tipo de Vinho >==="));

	const pesquisa = prompt("Tipo: ").toUpperCase();

	const vinhosEncontrados = vinhos.filter(vinho => vinho.tipo.toUpperCase().includes(pesquisa));

	if (vinhosEncontrados.length === 0) {
		console.log(`Obs.: Não há vinhos cadastrados do tipo "${pesquisa}"`);
		return;
	};

	console.log("Marca...........Tipo...........Preço R$:");
	vinhosEncontrados.forEach(vinho => {
		console.log(formatarVinho(vinho));
	});
};

const calcularMedia = () => {
	console.log(titulo("===< Média e Destaque do Cadastro de Vinhos >==="));

	const num = vinhos.length;

	if (num === 0) {
		console.log(`Obs.: Não há vinhos cadastrados`);
		return;
	};

	const total = vinhos.reduce((acumulador, vinho) => acumulador + vinho.preco, 0);
	const media = total / num;

	const vinhosOrdenados = [...vinhos].sort((a, b) => a.preco - b.preco);
	const menor = vinhosOrdenados[0];
	const maior = vinhosOrdenados[num - 1];

	console.log(imprimeMediaDestaque(media, menor, maior));

};

const formatarVinho = (vinho) => {
	return `${vinho.marca.padEnd(16)}${vinho.tipo.padEnd(15)}${vinho.preco.toFixed(2).padEnd(9)}`;
};

const imprimeMediaDestaque = (media, menor, maior) => {
	return `Preço Médio dos Vinhos R$ ${media.toFixed(2)}\nMenor Valor R$: ${menor.preco.toFixed(2)} - ${menor.marca}\nMaior valor R$: ${maior.preco.toFixed(2)} - ${maior.marca}`;
};

const obterPrecoValido = () => {
	let preco;

	do {
		preco = parseFloat(prompt("Preço R$: "));
	} while (isNaN(preco) || preco <= 0);

	return preco;
};

const titulo = (texto) => {
	return `\n${texto}\n${'='.repeat(28)}`;
};

const listaOpcoes = () => {
	return `1. Inclusão de Vindos\n2. Listagem de Vinhos\n3. Pesquisa por Tipo\n4. Média e Destaques\n5. Finalizar`
};


const obterOpcao = () => {
	let opcao;

	do {
		console.log(titulo("===< Cadastro de Vinhos >==="));
		console.log(listaOpcoes());
		opcao = parseInt(prompt("Opção: "));
	} while (isNaN(opcao) || opcao < 1 || opcao > 5);

	return opcao;
};

do {

	const opcao = obterOpcao();

	switch (opcao) {
		case 1:
			incluir();
			break;
		case 2:
			listar();
			break;
		case 3:
			pesquisar();
			break;
		case 4:
			calcularMedia();
			break;
		case 5:
			console.log("Sistema finalizado.")
			break;
	};

	if (opcao === 5) break;

} while (true);
