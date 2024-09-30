<template>
  <div class="quiz-results">
    <div class="heading-container">
      <h1>Quiz Results</h1>
    </div>

    <div class="score-container">
      <h2>Your Score: {{ score }} / {{ numQuestions }}</h2>
    </div>

    <button @click="startNewGame">Start New Game</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "QuizMasterResults",
  computed: {
    ...mapState("quizMaster", ["score", "numQuestions"]),
  },
  methods: {
    startNewGame() {
      this.$router.push({ name: "QuizMasterCategories" });
    },
  },
};
</script>

<style scoped>
.quiz-results {
  text-align: center;
}

.score-container {
  margin-top: 20px;
  font-size: 1.5em;
}

button {
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
