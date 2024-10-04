<template>
  <div class="codeword-categories">
    <div class="heading-container">
      <h1>Game Settings</h1>
    </div>

    <!-- Difficulty Selection -->
    <div class="category-selection">
      <label>Select Difficulty:</label>
      <div class="difficulty-buttons">
        <button
          :class="{ selected: selectedDifficulty === 'easy' }"
          @click="setDifficulty('easy')"
        >
          Easy
        </button>
        <button
          :class="{ selected: selectedDifficulty === 'medium' }"
          @click="setDifficulty('medium')"
        >
          Medium
        </button>
        <button
          :class="{ selected: selectedDifficulty === 'hard' }"
          @click="setDifficulty('hard')"
        >
          Hard
        </button>
      </div>
    </div>

    <!-- Time Limit Selection -->
    <div class="category-selection">
      <label>Select Time Limit:</label>
      <div class="time-buttons">
        <button
          :class="{ selected: selectedTime === '30' }"
          @click="setTimeLimit('30')"
        >
          30 Seconds
        </button>
        <button
          :class="{ selected: selectedTime === '60' }"
          @click="setTimeLimit('60')"
        >
          1 Minute
        </button>
        <button
          :class="{ selected: selectedTime === '300' }"
          @click="setTimeLimit('300')"
        >
          5 Minutes
        </button>
        <button
          :class="{ selected: selectedTime === 'none' }"
          @click="setTimeLimit('none')"
        >
          No Time Limit
        </button>
      </div>
    </div>

    <!-- Start Game Button -->
    <button @click="initiateGame" class="start-button">Start Game</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState("codeWord", ["selectedDifficulty", "selectedTime"]),
  },
  methods: {
    ...mapActions("codeWord", ["updateDifficulty", "updateTimeLimit"]),
    setDifficulty(difficulty) {
      this.updateDifficulty(difficulty);
    },

    setTimeLimit(time) {
      this.updateTimeLimit(time);
    },

    initiateGame() {
      this.$store.dispatch("codeWord/startGame");
      this.$router.push({ name: "CodeWordGame" });
    },
  },
};
</script>

<style scoped>
.codeword-categories {
  width: 100%;
  text-align: center;
  color: #f1f1f1;
  font-family: "Courier New", Courier, monospace !important;
  background-color: #1a1a1a;
  padding: 30px;
}

.heading-container h1 {
  font-size: 2.5em;
  font-family: "Courier New", Courier, monospace !important;
  margin-bottom: 30px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #f14646;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.category-selection {
  margin-bottom: 40px;
  display: grid;
}

.category-selection label {
  font-size: 1.3em;
  color: #f1f1f1;
}

.difficulty-buttons,
.time-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
}

button {
  width: 100%;
  padding: 12px 25px;
  background-color: #333;
  color: #f1f1f1;
  border: 2px solid #555;
  border-radius: 2px;
  cursor: pointer;
  font-size: 1.1em;
  transition: background-color 0.2s, border-color 0.2s;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

button:hover {
  background-color: #f14646;
  border-color: #f14646;
  color: white;
}

button.selected {
  background-color: #f14646;
  border-color: #f14646;
  color: white;
  font-weight: bold;
}

.start-button {
  margin-top: 30px;
  padding: 15px 40px;
  background-color: #f14646;
  border-color: #f14646;
  color: white;
  font-size: 1.3em;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0px 0px 15px rgba(255, 0, 0, 1);
  transition: box-shadow 0.3s, transform 0.3s;
}

.start-button:hover {
  transform: scale(1.05);
}

@media (max-width: 650px) {
  .difficulty-buttons,
  .time-buttons {
    flex-direction: column;
  }

  button {
    width: 100%;
    margin-bottom: 15px;
  }

  .start-button {
    margin-top: 20px;
  }
}
</style>
