<template>
  <div>
    <div class="heading-container">
      <span></span>
      <h1>Flag Finder</h1>
      <span></span>
    </div>

    <!-- Lives Counter -->
    <div class="lives-container">
      <p>Lives: {{ lives }}</p>
    </div>

    <!-- Game Area -->
    <div v-if="currentQuestion">
      <!-- Display Flag if mode is 'flagToCountry', else display country name -->
      <div class="game-question">
        <img
          v-if="gameMode === 'flagToCountry'"
          :src="currentQuestion.flag"
          alt="Flag"
          class="flag-image"
        />
        <h2 v-if="gameMode === 'countryToFlag'">{{ currentQuestion.name }}</h2>
      </div>

      <!-- Options -->
      <div class="options-container">
        <button
          v-for="(option, index) in options"
          :key="index"
          @click="checkAnswer(option)"
        >
          {{ gameMode === "flagToCountry" ? option.name : option.flag }}
        </button>
      </div>
    </div>

    <!-- Game Over Message -->
    <div v-else>
      <h2>Game Over! You ran out of lives.</h2>
      <button @click="resetGame">Play Again</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      currentQuestion: null, // Current flag or country
      options: [], // Array of 4 options to display
      correctAnswer: null, // Track the correct answer
    };
  },
  computed: {
    ...mapGetters("flagFinder", [
      "getFlagsByDifficulty",
      "getGameMode",
      "getLives",
    ]),
    lives() {
      return this.getLives;
    },
    gameMode() {
      return this.getGameMode;
    },
  },
  methods: {
    ...mapActions("flagFinder", ["decrementLives", "resetLives"]),

    // Set up a new round/question
    setNewQuestion() {
      const flags = this.getFlagsByDifficulty;
      const randomFlag = flags[Math.floor(Math.random() * flags.length)]; // Randomly select a flag
      this.currentQuestion = randomFlag;
      this.correctAnswer = randomFlag;

      // Generate 3 random incorrect options
      let incorrectOptions = flags.filter(
        (flag) => flag.name !== randomFlag.name
      );
      incorrectOptions = this.shuffleArray(incorrectOptions).slice(0, 3);

      // Combine correct and incorrect options and shuffle them
      this.options = this.shuffleArray([randomFlag, ...incorrectOptions]);
    },

    // Handle answer selection
    checkAnswer(option) {
      if (option.name === this.correctAnswer.name) {
        alert("Correct!");
        this.setNewQuestion(); // Move to the next question
      } else {
        alert("Incorrect!");
        this.decrementLives(); // Lose a life
        if (this.lives === 1) {
          this.endGame();
        }
      }
    },

    // Shuffle array (used for randomizing answer options)
    shuffleArray(array) {
      return array.sort(() => Math.random() - 0.5);
    },

    // End game and reset lives
    endGame() {
      this.currentQuestion = null; // Hide game interface
    },

    // Reset the game
    resetGame() {
      this.resetLives(); // Reset lives in Vuex store
      this.setNewQuestion(); // Start a new game
    },
  },
  mounted() {
    this.setNewQuestion(); // Set the first question when the component is mounted
  },
};
</script>

<style scoped>
.lives-container {
  text-align: center;
  margin-bottom: 1em;
  font-size: 1.2em;
}

.flag-image {
  max-width: 200px;
  margin: 1.5em auto;
}

.options-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.options-container button {
  margin: 0.5em;
  padding: 1em 2em;
  font-size: 1.1em;
  cursor: pointer;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

.game-over {
  text-align: center;
}
</style>
