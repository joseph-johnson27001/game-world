<template>
  <div class="codeword-categories">
    <h1>Select Difficulty and Time</h1>
    <div class="category-selection">
      <label>Select Difficulty:</label>
      <select v-model="selectedDifficulty">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>

    <div class="category-selection">
      <label>Select Time Limit:</label>
      <select v-model="selectedTime">
        <option value="30">30 Seconds</option>
        <option value="60">1 Minute</option>
        <option value="300">5 Minutes</option>
        <option value="none">No Time Limit</option>
      </select>
    </div>

    <button @click="startGame">Start Game</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDifficulty: "easy",
      selectedTime: "none",
    };
  },
  methods: {
    startGame() {
      // Pass the selected options to the game route
      this.$router.push({
        name: "CodeWordGame",
        params: {
          difficulty: this.selectedDifficulty,
          timeLimit: this.selectedTime,
        },
      });
    },
  },
};
</script>

<style scoped>
.codeword-categories {
  text-align: center;
  margin: 20px;
}

.category-selection {
  margin: 10px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
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
