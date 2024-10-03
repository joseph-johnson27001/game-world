<template>
  <div class="codeword-categories">
    <div class="heading-container">
      <h1>Select Difficulty and Time</h1>
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
    <button @click="initiateGame">Start Game</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    // Mapping Vuex state to component for selected difficulty and time
    ...mapState("codeWord", ["selectedDifficulty", "selectedTime"]),
  },
  methods: {
    // Mapping Vuex actions to update difficulty and time in the store
    ...mapActions("codeWord", ["updateDifficulty", "updateTimeLimit"]),

    // Renamed local method for setting difficulty
    setDifficulty(difficulty) {
      this.updateDifficulty(difficulty); // Calls Vuex action
    },

    // Renamed local method for setting time limit
    setTimeLimit(time) {
      this.updateTimeLimit(time); // Calls Vuex action
    },

    // Function to initiate the game
    initiateGame() {
      // Dispatch the action to start the game
      this.$store.dispatch("codeWord/startGame");

      // Navigate to the game view
      this.$router.push({ name: "CodeWordGame" });
    },
  },
};
</script>

<style scoped>
.codeword-categories {
  text-align: center;
}

.category-selection {
  margin: 20px 0;
}

.difficulty-buttons,
.time-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

button {
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

button.selected {
  background-color: #28a745; /* Green color for selected button */
}
</style>
