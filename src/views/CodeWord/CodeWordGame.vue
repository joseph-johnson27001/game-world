<template>
  <div class="codeword-game">
    <h1>Code Word</h1>
    <p>Security Level: {{ securityLevel }}/6</p>

    <div class="word-container">
      <span v-for="(letter, index) in wordBlanks" :key="index">
        {{ letter || "_" }}
      </span>
    </div>

    <div class="partial-fragments">
      <h3>Partial Fragments:</h3>
      <span v-for="(fragment, index) in partialFragments" :key="index">
        {{ fragment }}
      </span>
    </div>

    <input v-model="currentGuess" @keyup.enter="guessLetter" maxlength="1" />
    <button @click="guessLetter">Submit Guess</button>

    <p v-if="gameOver">Game Over! You failed to crack the code.</p>
    <p v-if="gameWon">Congratulations! You've cracked the code.</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      currentGuess: "",
    };
  },
  computed: {
    ...mapGetters("codeWord", [
      "getWordToGuess",
      "getCorrectLetters",
      "getPartialFragments",
      "getSecurityLevel",
      "isGameOver",
    ]),
    wordBlanks() {
      const blanks = new Array(this.getWordToGuess.length).fill(null);
      this.getCorrectLetters.forEach(({ letter, index }) => {
        blanks[index] = letter;
      });
      return blanks;
    },
    gameOver() {
      return this.isGameOver;
    },
    gameWon() {
      return this.wordBlanks.join("") === this.getWordToGuess;
    },
  },
  methods: {
    ...mapActions("codeWord", ["guessLetter"]),
    guessLetter() {
      if (this.currentGuess) {
        this.guessLetter(this.currentGuess);
        this.currentGuess = "";
      }
    },
  },
};
</script>

<style scoped>
.codeword-game {
  text-align: center;
}

.word-container {
  display: flex;
  justify-content: center;
  font-size: 2em;
}

.partial-fragments {
  margin-top: 20px;
}

input {
  margin: 10px;
  padding: 5px;
  font-size: 1.2em;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;
}

button:hover {
  background-color: #0056b3;
}
</style>
