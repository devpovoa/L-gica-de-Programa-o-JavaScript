"use strict";

class Game {
  constructor(uiManager, wordRepository) {
    this.uiManager = uiManager;
    this.wordRepository = wordRepository;
    this.resetGame();
  }

  resetGame() {
    const { word, hint } = this.wordRepository.getRandomWordAndHint();
    this.word = word.toUpperCase();
    this.hint = hint;
    this.errors = "";
    this.remainingChances = parseInt(this.uiManager.respChances.textContent);
    this.hintUsed = false;

    const firstLetter = this.word[0];
    this.guessedWord = this.word
      .split("")
      .map((char) => (char === firstLetter ? char : "_"))
      .join("");

    this.uiManager.initializeGameState(this.guessedWord, this.remainingChances);
  }

  useHint() {
    if (this.hintUsed) {
      this.uiManager.alert("Você já solicitou a dica...");
      return;
    }

    this.hintUsed = true;
    this.remainingChances--;
    this.uiManager.displayHint(this.hint, this.remainingChances);
    this.checkGameEnd();
  }

  guessLetter(letter) {
    if (this.errors.includes(letter) || this.guessedWord.includes(letter)) {
      this.uiManager.alert("Você já apostou esta letra.");
      return;
    }

    if (this.word.includes(letter)) {
      this.updateGuessedWord(letter);
    } else {
      this.errors += letter;
      this.remainingChances--;
      this.uiManager.updateChances(this.remainingChances);
    }

    this.uiManager.updateGameState(this.guessedWord, this.errors);
    this.checkGameEnd();
  }

  updateGuessedWord(letter) {
    let updatedWord = "";
    for (let i = 0; i < this.word.length; i++) {
      updatedWord += this.word[i] === letter ? letter : this.guessedWord[i];
    }
    this.guessedWord = updatedWord;
  }

  checkGameEnd() {
    if (this.remainingChances === 0) {
      this.uiManager.displayGameOver(false, this.word);
      this.uiManager.disableInputs();
    } else if (this.guessedWord === this.word) {
      this.uiManager.displayGameOver(true, this.word);
      this.uiManager.disableInputs();
    }
  }
}

class WordRepository {
  constructor() {
    const words = localStorage.getItem("jogoPalavra")?.split(";") || [];
    const hints = localStorage.getItem("jogoDica")?.split(";") || [];
    this.wordHintPairs = words.map((word, index) => ({
      word: word,
      hint: hints[index] || "",
    }));
  }

  getRandomWordAndHint() {
    const randomIndex = Math.floor(Math.random() * this.wordHintPairs.length);
    return this.wordHintPairs[randomIndex] || { word: "", hint: "" };
  }
}

class UIManager {
  constructor() {
    this.form = document.querySelector("form");
    this.respPalavra = document.querySelector("#outPalavra");
    this.respErros = document.querySelector("#outErros");
    this.respDica = document.querySelector("#outDica");
    this.respChances = document.querySelector("#outChances");
    this.respMensagemFinal = document.querySelector("#outMensagemFinal");
    this.imgStatus = document.querySelector("img");
  }

  initializeGameState(guessedWord, chances) {
    this.respPalavra.textContent = guessedWord;
    this.respErros.textContent = "";
    this.respDica.textContent = "";
    this.respChances.textContent = chances;
    this.respMensagemFinal.textContent = "";
    this.imgStatus.src = `img/status${chances}.jpg`;

    this.enableInputs();
  }

  displayHint(hint, chances) {
    this.respDica.textContent = `* ${hint}`;
    this.respErros.textContent += "*";
    this.respChances.textContent = chances;
    this.updateStatusImage(chances);
  }

  updateGameState(guessedWord, errors) {
    this.respPalavra.textContent = guessedWord;
    this.respErros.textContent = errors;
  }

  updateChances(chances) {
    this.respChances.textContent = chances;
    this.updateStatusImage(chances);
  }

  updateStatusImage(chances) {
    if (chances > 0) {
      this.imgStatus.src = `img/status${chances}.jpg`;
    }
  }

  displayGameOver(won, word) {
    this.respMensagemFinal.className = `display-3 text-${won ? "primary" : "danger"}`;
    this.respMensagemFinal.textContent = won
      ? "Parabéns!! Você Ganhou."
      : `Ah...é ${word}. Você Perdeu!`;
  }

  alert(message) {
    alert(message);
  }

  enableInputs() {
    this.form.inLetra.disabled = false;
    this.form.btJogar.disabled = false;
    this.form.btVerDica.disabled = false;
  }

  disableInputs() {
    this.form.inLetra.disabled = true;
    this.form.btJogar.disabled = true;
    this.form.btVerDica.disabled = true;
  }
}

window.addEventListener("load", () => {
  if (!localStorage.getItem("jogoPalavra")) {
    alert("Cadastre palavras para jogar");
    const form = document.querySelector("form");
    form.inLetra.disabled = true;
    form.btJogar.disabled = true;
    form.btVerDica.disabled = true;
    return;
  }

  const wordRepository = new WordRepository();
  const uiManager = new UIManager();
  const game = new Game(uiManager, wordRepository);

  uiManager.form.btVerDica.addEventListener("click", () => game.useHint());
  uiManager.form.addEventListener("submit", (e) => {
    e.preventDefault();
    const letter = uiManager.form.inLetra.value.toUpperCase();
    game.guessLetter(letter);
    uiManager.form.inLetra.value = "";
    uiManager.form.inLetra.focus();
  });
});
