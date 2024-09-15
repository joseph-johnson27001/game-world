<template>
  <div class="word-scramble-game-format">
    <h1>Select Game Format</h1>

    <div class="game-format-options">
      <button @click="selectFormat('timed')" class="format-button">
        Timed
      </button>
      <button @click="selectFormat('numbered')" class="format-button">
        Numbered
      </button>
      <button @click="selectFormat('practice')" class="format-button">
        Practice
      </button>
    </div>

    <!-- Number of Questions Selector -->
    <div v-if="selectedFormat === 'numbered'" class="question-selector">
      <label for="question-count">Number of Questions:</label>
      <select v-model="questionCount" id="question-count">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </div>

    <!-- Continue Button -->
    <button
      @click="continueToCategories"
      class="continue-button"
      :disabled="!selectedFormat"
    >
      Continue
    </button>
  </div>
</template>

<script>
export default {
  name: "WordScrambleGameFormat",
  data() {
    return {
      selectedFormat: null,
      questionCount: "5", // default number of questions
    };
  },
  methods: {
    selectFormat(format) {
      this.selectedFormat = format;
    },
    continueToCategories() {
      this.$router.push({
        name: "WordScrambleCategories",
        params: {
          format: this.selectedFormat,
          questionCount: this.questionCount,
        },
      });
    },
  },
};
</script>

<style scoped>
.word-scramble-game-format {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}

.game-format-options {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.format-button {
  background-color: #d8bf8e;
  border: none;
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s;
}

.format-button:hover {
  background-color: #b88b5a;
}

.question-selector {
  margin-bottom: 20px;
}

.question-selector label {
  margin-right: 10px;
}

.continue-button {
  padding: 10px 20px;
  font-size: 1em;
  background-color: #05bdba;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  min-height: 50px;
  min-width: 100px;
}

.continue-button:disabled {
  background-color: #b3a089;
  cursor: not-allowed;
}
</style>
