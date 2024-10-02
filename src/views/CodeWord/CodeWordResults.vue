<template>
  <div class="codeword-results">
    <h1>Game Results</h1>
    <p v-if="gameWon">Congratulations! You guessed the word!</p>
    <p v-else>Game Over! You couldn't guess the word in time.</p>

    <p>Attempts Taken: {{ attempts }}</p>
    <p>Security Level: {{ securityLevel }}</p>

    <button @click="playAgain">Play Again</button>
    <button @click="homeScreen">Home</button>
  </div>
</template>

<script>
export default {
  computed: {
    gameWon() {
      return this.$route.params.gameWon;
    },
    attempts() {
      return this.$route.params.attempts;
    },
    securityLevel() {
      return this.$route.params.securityLevel;
    },
  },
  methods: {
    playAgain() {
      this.$router.push({ name: "CodeWordCategories" });
    },
    homeScreen() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
.codeword-results {
  text-align: center;
}

button {
  margin-top: 20px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;
}

button:hover {
  background-color: #0056b3;
}
</style>
