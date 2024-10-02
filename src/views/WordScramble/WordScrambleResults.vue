<template>
  <div class="word-scramble-results">
    <div class="heading-container">
      <h1>Game Results</h1>
    </div>
    <p>Words Solved: {{ score }}</p>
    <p>Time Taken: {{ formattedTime }}</p>
    <button @click="playAgain" class="play-again-button">Play Again?</button>
    <button @click="homeScreen" class="game-selection-button">
      Game Selection
    </button>
  </div>
</template>

<script>
export default {
  name: "WordScrambleResults",
  computed: {
    score() {
      return this.$store.getters["wordScramble/getScore"];
    },
    time() {
      return this.$store.getters["wordScramble/getTime"];
    },
    formattedTime() {
      const minutes = Math.floor(this.time / 60);
      const seconds = this.time % 60;
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    },
  },

  methods: {
    playAgain() {
      this.$router.push({ name: "WordScrambleCategories" });
    },
    homeScreen() {
      this.$router.push({ name: "GameSelection" });
    },
  },
};
</script>

<style scoped>
.word-scramble-results {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
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
</style>
