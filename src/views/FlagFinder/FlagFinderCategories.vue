<template>
  <div>
    <div class="heading-container">
      <span></span>
      <h1>Flag Finder</h1>
      <span></span>
    </div>

    <div class="difficulty-card" @click="selectDifficulty('easy')">
      <h2>Easy</h2>
      <p>Test your knowledge with easy flags!</p>
    </div>

    <div class="difficulty-card" @click="selectDifficulty('medium')">
      <h2>Medium</h2>
      <p>Up the challenge with medium-level flags!</p>
    </div>

    <div class="difficulty-card" @click="selectDifficulty('hard')">
      <h2>Hard</h2>
      <p>Only the toughest flags for the ultimate challenge!</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    selectDifficulty(difficulty) {
      this.$store.dispatch("flagFinder/setDifficulty", difficulty);
      this.$router.push({ name: "FlagFinderGame" });
    },
  },
};
</script>

<style scoped>
.difficulty-card {
  border: 2px solid #ccc;
  padding: 1.5em;
  margin: 1em auto;
  width: 80%;
  max-width: 500px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.difficulty-card h2 {
  font-size: 1.8em;
}

.difficulty-card p {
  font-size: 1.2em;
}
</style>
