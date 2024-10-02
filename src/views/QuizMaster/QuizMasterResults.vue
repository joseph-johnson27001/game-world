<template>
  <div class="quiz-results">
    <div class="heading-container">
      <h1>Quiz Results</h1>
    </div>

    <div class="score-container">
      <h2>Your Score: {{ score }} / {{ numQuestions }}</h2>
    </div>

    <button @click="startNewGame" class="play-again-button">
      Start New Game
    </button>
    <button @click="goToGameSelection" class="game-selection-button">
      Game Selection
    </button>
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
    goToGameSelection() {
      this.$router.push({ name: "GameSelection" });
    },
  },
};
</script>

<style scoped>
.quiz-results {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.score-container {
  font-size: 1.5em;
}

.play-again-button,
.game-selection-button {
  margin-top: 20px;
  padding: 15px 20px;
  border: 1px solid white;
  border-radius: 5px;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.1s ease;
  width: 100%;
}

.play-again-button {
  background-color: #007bff;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.play-again-button:hover {
  background-color: #0056b3;
}

.game-selection-button {
  background-color: #28a745;
  color: white;
}

.game-selection-button:hover {
  background-color: #218838;
}
</style>
