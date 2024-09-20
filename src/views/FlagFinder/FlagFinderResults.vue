<template>
  <div class="results-page">
    <div class="heading-container">
      <span></span>
      <h1>Results</h1>
      <span></span>
    </div>

    <div class="results-container">
      <p>
        You answered {{ correctAnswers }} out of {{ totalQuestions }} questions
        correctly!
      </p>
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
  },
  methods: {
    playAgain() {
      this.$store.dispatch("flagFinder/resetQuestionsAndAnswers");
      this.$router.push({ name: "FlagFinderCategories" });
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
}

button:hover {
  background-color: #2980b9;
}
</style>
