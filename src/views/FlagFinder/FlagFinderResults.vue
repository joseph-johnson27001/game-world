<template>
  <div class="results-page">
    <div class="heading-container">
      <h1>Results</h1>
    </div>

    <div class="results-container">
      <p>
        <span v-if="remainingLives > 0">
          Lives remaining: {{ remainingLives }}</span
        >
        <span v-else>You ran out of lives!</span>
      </p>
      <p>
        You answered {{ correctAnswers }} out of {{ totalQuestions }} questions
        correctly!
      </p>
      <button @click="goToHome">Game Selection</button>
      <button @click="playAgain">Play again?</button>
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
    ]),
    correctAnswers() {
      return this.getCorrectAnswersCount;
    },
    totalQuestions() {
      return this.getQuestionsAsked;
    },
    remainingLives() {
      return this.$route.params.remainingLives || 0; // Retrieve remaining lives from route params
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
.results-page {
  text-align: center;
}

.results-container {
  margin: 20px 0;
  font-size: 1.5em;
}

/* Button Styling */
button {
  background-color: #3498db;
  color: white;
  padding: 0.75em 1.5em;
  font-size: 1.2em;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0.5em; /* Optional: Add some margin for spacing */
}

button:hover {
  background-color: #2980b9;
}
</style>
