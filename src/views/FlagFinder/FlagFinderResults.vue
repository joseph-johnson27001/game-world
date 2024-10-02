<template>
  <div class="flag-finder-results">
    <div class="heading-container">
      <h1>Game Results</h1>
    </div>

    <div class="results-container">
      <p>
        <span v-if="remainingLives > 0" class="lives-container">
          Lives remaining:
          <img
            v-for="index in remainingLives"
            :key="index"
            src="@/assets/icons/heart.svg"
            alt="Heart"
            class="heart-icon"
          />
        </span>
        <span v-else>You ran out of lives!</span>
      </p>
      <p>
        You answered {{ correctAnswers }} out of {{ totalQuestions }} questions
        correctly!
      </p>
      <button @click="playAgain" class="play-again-button">Play Again?</button>
      <button @click="goToHome" class="game-selection-button">
        Game Selection
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("flagFinder", [
      "getCorrectAnswersCount",
      "getQuestionsAsked",
      "getLives", // Adding getter for lives
    ]),
    correctAnswers() {
      return this.getCorrectAnswersCount;
    },
    totalQuestions() {
      return this.getQuestionsAsked;
    },
    remainingLives() {
      return this.getLives || 0; // Use the getter to get the actual lives left
    },
  },
  methods: {
    playAgain() {
      this.$router.push({ name: "FlagFinderCategories" });
    },
    goToHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
.flag-finder-results {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.results-container {
  font-size: 1.5em;
}

.lives-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  margin-top: 20px;
  padding: 15px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.1s ease;
  width: 100%;
  font-size: 1.1em;
}

.play-again-button {
  background-color: #007bff;
}

.play-again-button:hover {
  background-color: #0056b3;
}

.game-selection-button {
  margin-top: 10px;
  background-color: #28a745;
}

.game-selection-button:hover {
  background-color: #218838;
}

.heart-icon {
  width: 30px; /* Adjust size as needed */
  height: 30px; /* Adjust size as needed */
  margin: 0 5px; /* Space between icons */
}
</style>
