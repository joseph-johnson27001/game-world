<template>
  <div class="flag-finder-game">
    <div class="heading-container">
      <span></span>
      <h1>Flag Finder</h1>
      <span></span>
    </div>

    <!-- Lives Counter with Heart Icons -->
    <div class="lives-container">
      <p>
        Lives:
        <img
          v-for="index in lives"
          :key="index"
          src="@/assets/icons/heart.svg"
          alt="Heart"
          class="heart-icon"
        />
      </p>
    </div>

    <!-- Game Area -->
    <div v-if="currentQuestion">
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
        <div
          v-for="(option, index) in options"
          :key="index"
          class="option-card"
          @click="checkAnswer(option)"
        >
          <img
            v-if="gameMode === 'countryToFlag'"
            :src="option.flag"
            alt="Flag Option"
            class="option-flag"
          />
          <span v-if="gameMode === 'flagToCountry'">{{ option.name }}</span>
        </div>
      </div>
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
      questionsAsked: 0, // Count of questions asked
      usedFlags: new Set(), // To track used flags
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

      // Check if we've used all flags
      if (this.usedFlags.size >= flags.length) {
        this.redirectToResults(); // Redirect to results if all flags used
        return;
      }

      let randomFlag;
      do {
        randomFlag = flags[Math.floor(Math.random() * flags.length)];
      } while (this.usedFlags.has(randomFlag.name)); // Ensure no repeats

      this.currentQuestion = randomFlag;
      this.correctAnswer = randomFlag;
      this.usedFlags.add(randomFlag.name); // Mark this flag as used
      this.questionsAsked++;

      // Generate 3 random incorrect options
      let incorrectOptions = flags.filter(
        (flag) =>
          flag.name !== randomFlag.name && !this.usedFlags.has(flag.name)
      );
      incorrectOptions = this.shuffleArray(incorrectOptions).slice(0, 3);

      // Combine correct and incorrect options and shuffle them
      this.options = this.shuffleArray([randomFlag, ...incorrectOptions]);
    },

    // Handle answer selection
    checkAnswer(option) {
      if (option.name === this.correctAnswer.name) {
        this.setNewQuestion(); // Move to the next question
      } else {
        this.decrementLives();
        if (this.lives === 0) {
          this.endGame();
        }
      }
    },

    // Shuffle array (used for randomizing answer options)
    shuffleArray(array) {
      return array.sort(() => Math.random() - 0.5);
    },

    // End game and redirect to results
    endGame() {
      this.resetLives();
      this.$router.push({
        name: "FlagFinderResults",
        params: {
          correctAnswers: this.correctAnswersCount, // Add your logic to count correct answers
          totalQuestions: this.questionsAsked,
        },
      });
    },
    // Redirect to results page
    redirectToResults() {
      this.$router.push({
        name: "ResultsPage",
        params: { questionsAsked: this.questionsAsked, lives: this.lives },
      });
    },

    // Reset the game
    resetGame() {
      this.resetLives(); // Reset lives in Vuex store
      this.questionsAsked = 0; // Reset question count
      this.usedFlags.clear(); // Clear used flags
      this.setNewQuestion(); // Start a new game
    },
  },
  mounted() {
    this.setNewQuestion(); // Set the first question when the component is mounted
  },
};
</script>

<style scoped>
.flag-finder-game {
  min-width: 95%;
}

/* Lives Counter Styling */
.lives-container {
  text-align: center;
  margin-bottom: 1em;
  font-size: 1.5em;
  color: #333;
}

.lives-container p {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Heart Icon Styling */
.heart-icon {
  width: 30px; /* Adjust size as needed */
  height: 30px; /* Adjust size as needed */
  margin: 0 5px; /* Spacing between hearts */
}

/* Flag Styling */
.flag-image {
  width: 300px;
  height: 180px;
  display: block;
  margin: 0 auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

/* Options Container Styling */
.options-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  margin: 2em auto;
  width: 80%;
}

@media screen and (min-width: 550px) {
  .options-container {
    grid-template-columns: 1fr 1fr;
  }
}

/* Option Card Styling */
.option-card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1em;
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  border-radius: 15px;
  border: 3px solid #2980b9;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.option-card:hover {
  background: linear-gradient(135deg, #2980b9, #3498db);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.option-card span {
  font-size: 1.2em;
  text-align: center;
}

.option-flag {
  max-width: 80px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Button Styling for Game Over */
button {
  background-color: #e74c3c;
  color: white;
  padding: 0.75em 1.5em;
  font-size: 1.2em;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1.5em;
}

button:hover {
  background-color: #c0392b;
}
</style>
