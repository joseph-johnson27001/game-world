<template>
  <div :class="gameClass">
    <!-- Heading -->
    <div class="heading-container">
      <h1>Code Word</h1>
    </div>

    <!-- Display the hidden word (with correct guesses revealed) -->
    <div class="word-display">
      <span
        v-for="(letter, index) in displayedWord"
        :key="index"
        class="letter"
      >
        {{ letter }}
      </span>
    </div>

    <!-- Display previous guesses -->
    <div class="guesses-container">
      <div v-for="(guess, index) in guesses" :key="index" class="guess-row">
        <span
          v-for="(letter, letterIndex) in guess.word"
          :key="letterIndex"
          :class="
            getLetterClass(guess.word[letterIndex], letterIndex, guess.feedback)
          "
          class="letter"
        >
          {{ letter }}
        </span>
      </div>
    </div>

    <!-- Input for user guesses -->
    <div class="input-container">
      <input
        v-model="currentGuess"
        maxlength="5"
        placeholder="Enter 5-letter word"
        @input="convertToUppercase"
      />
      <button @click="handleHack" :disabled="currentGuess.length !== 5">
        Hack
      </button>
    </div>

    <!-- Remaining attempts -->
    <div class="attempts-container">
      <p>Attempts Remaining: {{ attemptsLeft }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      currentGuess: "",
      selectedWord: "",
      guesses: [],
    };
  },
  mounted() {
    this.selectedWord = this.getCurrentWord.toUpperCase();
  },
  computed: {
    ...mapState("codeWord", ["selectedWord", "attemptsLeft"]),
    ...mapGetters("codeWord", ["getCurrentWord"]),

    displayedWord() {
      const word = this.selectedWord || "";
      return word.split("").map((letter, index) => {
        const correctGuess = this.guesses.find(
          (guess) => guess.feedback[index] === "correct"
        );
        return correctGuess ? correctGuess.word[index] : "*";
      });
    },

    gameClass() {
      if (this.attemptsLeft === 5) return "green-background";
      if (this.attemptsLeft === 3 || this.attemptsLeft === 4)
        return "yellow-background";
      return "red-background";
    },
  },

  methods: {
    ...mapActions("codeWord", ["decreaseAttempts"]),

    handleHack() {
      if (this.currentGuess.length === 5) {
        const feedback = this.getFeedback(this.currentGuess);
        this.guesses.push({ word: this.currentGuess, feedback });

        this.currentGuess = "";
        this.decreaseAttempts();
      }
    },

    convertToUppercase() {
      this.currentGuess = this.currentGuess.toUpperCase(); // Convert to uppercase
    },

    getFeedback(guess) {
      const feedback = [];

      guess.split("").forEach((letter, index) => {
        if (letter === this.selectedWord[index]) {
          feedback.push("correct");
        } else if (this.selectedWord.includes(letter)) {
          feedback.push("wrong-position");
        } else {
          feedback.push("incorrect");
        }
      });

      return feedback;
    },

    getLetterClass(letter, index, feedback) {
      if (feedback[index] === "correct") return "correct-letter";
      if (feedback[index] === "wrong-position") return "wrong-position-letter";
      return "incorrect-letter";
    },
  },
};
</script>

<style scoped>
.word-display {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.letter {
  font-size: 2em;
  margin: 0 5px;
  border-bottom: 2px solid black;
  width: 40px;
  text-align: center;
}

.guesses-container {
  margin-top: 20px;
}

.guess-row {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.correct-letter {
  background-color: #28a745;
  color: white;
}

.wrong-position-letter {
  background-color: #ffc107;
  color: black;
}

.incorrect-letter {
  background-color: transparent;
  color: black;
}

.input-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

input {
  font-size: 1.5em;
  padding: 5px;
  text-align: center;
  margin-right: 10px;
}

button {
  font-size: 1.5em;
  padding: 5px 20px;
}

.attempts-container {
  margin-top: 20px;
  text-align: center;
}
</style>
