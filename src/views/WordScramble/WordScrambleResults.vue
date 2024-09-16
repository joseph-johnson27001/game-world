<template>
  <div class="word-scramble-results">
    <div class="heading-container">
      <h1>Game Results</h1>
    </div>
    <p>Your score: {{ score }}</p>
    <p>Time Taken: {{ formattedTime }}</p>
    <button @click="playAgain" class="play-again-button">Play Again</button>
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
  },
};
</script>

<style scoped>
.word-scramble-results {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 10px;
}

.play-again-button {
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 15px 20px;
  font-size: 1em;
  background-color: #05bdba;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
