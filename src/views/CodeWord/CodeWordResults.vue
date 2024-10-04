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
    </div>

    <button @click="restartGame" class="restart-button">Play Again</button>
  </div>
</template>

<script>
export default {
  computed: {
    attempts() {
      return this.$route.query.attempts;
    },
    success() {
      return this.$route.query.success === "true";
    },
    resultMessage() {
      // Update the result message based on success
      return this.success ? "You Have Escaped!" : "You Failed!";
    },
  },
  methods: {
    restartGame() {
      // Logic to restart the game, e.g., navigate back to the game page
      this.$router.push({ name: "CodeWordGame" }); // Adjust the route name as necessary
    },
  },
};
</script>

<style scoped>
/* General styles for the results page */
.code-word-results {
  width: 100%;
  text-align: center;
  padding: 30px;
  color: #f1f1f1;
  font-family: "Courier New", Courier, monospace !important;
  background-color: #1a1a1a !important;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
  border-radius: 10px;
}

/* Heading styles */
.heading-container h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

/* Dynamic styles for success and failure */
.success {
  color: #28a745; /* Green for success */
}

.failure {
  color: #dc3545; /* Red for failure */
}

/* Result message styles */
.result-message {
  font-size: 1.5em;
  margin: 20px 0;
}

/* Restart button styling */
.restart-button {
  font-size: 1.5em;
  padding: 10px 20px;
  background-color: #333;
  color: #f1f1f1;
  border: 2px solid #555;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;
}

.restart-button:hover {
  background-color: #444; /* Darker on hover */
}
</style>
