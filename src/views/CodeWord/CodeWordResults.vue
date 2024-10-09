<template>
  <div class="code-word-results">
    <div class="heading-container">
      <h1 :class="{ success: success, failure: !success }">
        {{ resultMessage }}
      </h1>
    </div>

    <div class="result-message">
      <p v-if="success">
        🎉 Congratulations! You managed to escape with {{ attempts }} attempts
        remaining. 🎉
      </p>
      <p v-else>
        ❌ You ran out of attempts and were captured! Better luck next time! ❌
      </p>

      <!-- Show the correct answer if the player fails -->
      <p v-if="!success" class="correct-answer">
        The correct answer was: <strong>{{ correctAnswer }}</strong>
      </p>
    </div>

    <div class="button-container">
      <button @click="restartGame" class="restart-button">Play Again?</button>
      <button @click="goToGameSelection" class="selection-button">
        Game Selection
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("codeWord", ["getCurrentWord"]),
    attempts() {
      return this.$route.query.attempts;
    },
    success() {
      return this.$route.query.success === "true";
    },
    resultMessage() {
      return this.success ? "You Have Escaped!" : "You Failed!";
    },
    correctAnswer() {
      return this.getCurrentWord.toUpperCase();
    },
  },
  methods: {
    ...mapActions("codeWord", ["startGame"]),
    async restartGame() {
      await this.startGame();
      this.$router.push({ name: "CodeWordGame" });
    },
    goToGameSelection() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
/* General styles for the results page */
.code-word-results {
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
  margin-bottom: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.success {
  color: #28a745;
}

.failure {
  color: #dc3545;
}

.result-message {
  font-size: 1.5em;
  margin: 20px 0;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.restart-button,
.selection-button {
  font-size: 1.5em;
  padding: 10px 20px;
  background-color: #333;
  color: #f1f1f1;
  border: 2px solid #555;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;
}

.restart-button:hover,
.selection-button:hover {
  background-color: #444;
}

.correct-answer {
  margin-top: 10px;
}
</style>
