<template>
  <div class="game-class">
    <!-- Heading -->
    <div class="heading-container">
      <h1>Code Word</h1>
    </div>

    <!-- Display the timer if a time limit is selected -->
    <div v-if="selectedTime !== 'none'" class="timer-container">
      <p>Seconds Remaining: {{ timeRemaining }}</p>
    </div>

    <!-- Display the hidden word (with correct guesses revealed) -->
    <div class="word-display">
      <span
        v-for="(letter, index) in displayedWord"
        :key="index"
        :class="getLetterDisplayClass(letter)"
      >
        {{ letter }}
      </span>
    </div>

    <!-- Display previous guesses with fade effect -->
    <div class="guesses-container">
      <transition-group name="fade" tag="div">
        <div v-for="(guess, index) in guesses" :key="index" class="guess-row">
          <span
            v-for="(letter, letterIndex) in guess.word"
            :key="letterIndex"
            :class="
              getLetterClass(
                guess.word[letterIndex],
                letterIndex,
                guess.feedback
              )
            "
            class="letter"
          >
            {{ letter }}
          </span>
        </div>
      </transition-group>
    </div>

    <!-- Input for user guesses -->
    <div class="input-container">
      <input
        v-model="currentGuess"
        maxlength="5"
        @input="convertToUppercase"
        @keydown.enter="handleHack"
      />
      <button
        @click="handleHack"
        :disabled="currentGuess.length !== 5 || attemptsLeft === 0"
        :class="hackButtonClass"
      >
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
      attemptsLeft: 5,
      guesses: [],
      timeRemaining: 0,
      timerInterval: null,
      selectedWord: "",
    };
  },
  mounted() {
    this.selectedWord = this.getCurrentWord.toUpperCase();
    this.resetTimer();
  },
  beforeUnmount() {
    this.clearTimer();
  },
  computed: {
    ...mapState("codeWord", ["selectedWord", "selectedTime"]),
    ...mapGetters("codeWord", ["getCurrentWord"]),

    displayedWord() {
      const word = this.selectedWord || "";
      let revealedLetters = word.split("").map(() => "*");

      this.guesses.forEach((guess) => {
        guess.feedback.forEach((feedbackType, index) => {
          if (feedbackType === "correct") {
            revealedLetters[index] = guess.word[index];
          }
        });
      });

      return revealedLetters;
    },

    hackButtonClass() {
      if (this.attemptsLeft >= 4) return "green-button";
      if (this.attemptsLeft >= 2 && this.attemptsLeft < 5)
        return "yellow-button";
      if (this.attemptsLeft < 3) return "red-button";
      return "";
    },
  },

  methods: {
    ...mapActions(["codeWord"]),

    handleHack() {
      if (this.currentGuess.length === 5) {
        const feedback = this.getFeedback(this.currentGuess);
        this.guesses.push({ word: this.currentGuess, feedback });

        if (this.currentGuess === this.selectedWord) {
          this.clearTimer();
          setTimeout(() => {
            this.navigateToResults(true);
          }, 1000);
        } else {
          this.attemptsLeft -= 1;

          if (this.attemptsLeft === 0) {
            this.clearTimer();
            this.navigateToResults(false);
          }
        }

        this.currentGuess = "";
      }
    },

    convertToUppercase() {
      this.currentGuess = this.currentGuess.toUpperCase().replace(/\s/g, "");
    },

    getFeedback(guess) {
      const feedback = [];
      const letterCount = {};

      // First pass: Check for correct letters and count letters in selectedWord
      for (let i = 0; i < this.selectedWord.length; i++) {
        const letter = this.selectedWord[i];
        letterCount[letter] = (letterCount[letter] || 0) + 1;

        if (guess[i] === letter) {
          feedback[i] = "correct";
          letterCount[letter]--;
        }
      }

      for (let i = 0; i < guess.length; i++) {
        const letter = guess[i];

        if (feedback[i] !== "correct") {
          if (letterCount[letter] > 0) {
            feedback[i] = "wrong-position";
            letterCount[letter]--;
          } else {
            feedback[i] = "incorrect";
          }
        }
      }

      return feedback;
    },

    getLetterClass(letter, index, feedbackArray) {
      const feedbackType = feedbackArray[index];
      if (feedbackType === "correct") return "correct-letter";
      if (feedbackType === "wrong-position") return "wrong-position-letter";
      return "incorrect-letter";
    },

    getLetterDisplayClass(letter) {
      return letter === "*" ? "hidden-letter" : "revealed-letter";
    },

    navigateToResults(success) {
      this.$router.push({
        name: "CodeWordResults",
        query: { attempts: this.attemptsLeft, success: success },
      });
    },

    resetTimer() {
      this.clearTimer();
      this.timeRemaining =
        this.selectedTime !== "none" ? parseInt(this.selectedTime, 10) : 0;
      this.startTimer();
    },

    startTimer() {
      if (this.selectedTime !== "none" && this.timeRemaining > 0) {
        this.timerInterval = setInterval(() => {
          if (this.timeRemaining > 0) {
            this.timeRemaining -= 1;
          } else {
            this.clearTimer();
            this.navigateToResults(false);
          }
        }, 1000);
      }
    },

    clearTimer() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
    },
  },
};
</script>

<style scoped>
/* General layout styling */
.game-class {
  width: 100%;
  text-align: center;
  color: #f1f1f1;
  font-family: "Courier New", Courier, monospace !important;
  background-color: #1a1a1a !important;
  padding: 30px;
}

/* Heading styles */
.heading-container h1 {
  font-size: 2.5em;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #f14646;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

/* Timer styling */
.timer-container {
  margin-bottom: 40px;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  color: #f1f1f1;
}

/* Word display styling */
.word-display {
  display: flex;
  justify-content: center;
  margin: 10px 0px 40px 0px;
}

.letter {
  font-size: 2.2em;
  margin: 0 5px;
  border-bottom: 1px solid #f1f1f1;
  width: 40px;
  text-align: center;
  color: #f1f1f1;
}

/* Styles for hidden and revealed letters */
.hidden-letter {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #555;
  margin: 5px;
  font-size: 2rem;
  color: white;
  padding: 15px;
}

.revealed-letter {
  background-color: #28a745;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 5px;
  font-size: 2rem;
  color: white;
  border-radius: 5px;
  padding: 15px;
}

/* Guesses styling */
.guess-row {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}

/* Fade transition styles using keyframes */
.fade-enter-active {
  animation: fadeIn 0.5s forwards;
}
.fade-leave-active {
  opacity: 1;
  transition: opacity 0.5s ease;
}
.fade-leave-to {
  opacity: 0;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.correct-letter {
  background-color: #28a745;
  color: white;
}

.wrong-position-letter {
  background-color: #ffc107;
  color: white;
}

.incorrect-letter {
  background-color: transparent;
  color: white;
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  font-size: 1.5em;
  padding: 10px;
  text-align: center;
  border: 2px solid #555;
  background-color: #333;
  color: #f1f1f1;
  border-radius: 2px;
  width: 180px;
  margin: 10px 0;
  width: 100%;
  outline: none;
}

button {
  font-size: 1.8em;
  padding: 10px 20px;
  background-color: #333;
  color: #f1f1f1;
  border: 2px solid #555;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  width: 100%;
}

/* Hack button color changes */
.green-button {
  background-color: #28a745;
  border-color: #28a745;
  box-shadow: 0px 0px 10px rgba(40, 167, 69, 1);
}

.yellow-button {
  background-color: #ffc107;
  border-color: #ffc107;
  box-shadow: 0px 0px 10px rgba(255, 193, 7, 1);
}

.red-button {
  background-color: #dc3545;
  border-color: #dc3545;
  box-shadow: 0px 0px 10px rgba(220, 53, 69, 1);
}

/* Attempts container */
.attempts-container {
  margin-top: 20px;
  font-size: 1.3em;
  color: #f1f1f1;
}
</style>
