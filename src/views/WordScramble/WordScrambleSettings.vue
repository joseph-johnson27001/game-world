<template>
  <div>
    <!-- Heading Section -->
    <div class="heading-container">
      <h1>Settings</h1>
    </div>

    <!-- Game Format Options -->
    <div class="game-format-options">
      <!-- Timed Options -->
      <h3>Timed</h3>
      <div class="format-group">
        <div
          class="format-option"
          :class="{ active: selectedOption === '60s' }"
          @click="selectOption('timed', '60s')"
        >
          1 minute
        </div>
        <div
          class="format-option"
          :class="{ active: selectedOption === '120s' }"
          @click="selectOption('timed', '120s')"
        >
          2 minutes
        </div>
        <div
          class="format-option"
          :class="{ active: selectedOption === '5min' }"
          @click="selectOption('timed', '5min')"
        >
          5 minutes
        </div>
      </div>

      <!-- Rounds Options -->
      <h3>Rounds</h3>
      <div class="format-group">
        <div
          class="format-option"
          :class="{ active: selectedOption === '10rounds' }"
          @click="selectOption('rounds', '10rounds')"
        >
          10 Rounds
        </div>
        <div
          class="format-option"
          :class="{ active: selectedOption === '20rounds' }"
          @click="selectOption('rounds', '20rounds')"
        >
          20 Rounds
        </div>
        <div
          class="format-option"
          :class="{ active: selectedOption === '40rounds' }"
          @click="selectOption('rounds', '40rounds')"
        >
          40 Rounds
        </div>
      </div>

      <!-- Free Play Option -->
      <h3>Free Play</h3>
      <div class="format-group">
        <div
          class="format-option"
          :class="{ active: selectedOption === 'freePlay' }"
          @click="selectOption('freePlay', 'freePlay')"
        >
          Free Play
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      selectedOption: "", // Stores the currently selected option locally
    };
  },
  computed: {
    ...mapGetters("wordScramble", ["getGameFormat"]),
    prettyState() {
      // Return the Vuex state as a pretty JSON string
      return JSON.stringify(this.$store.state, null, 2);
    },
  },
  methods: {
    ...mapActions("wordScramble", ["selectGameFormat"]),

    selectOption(type, value) {
      this.selectedOption = value;
      this.selectGameFormat({ type, value });
    },
  },
  mounted() {
    // Initialize the local selectedOption from Vuex store if there's already a selected game format
    const currentFormat = this.getGameFormat;
    if (currentFormat && currentFormat.value) {
      this.selectedOption = currentFormat.value;
    }
  },
};
</script>

<style scoped>
h3 {
  margin: 10px 0;
}

.format-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.format-option {
  padding: 15px 30px;
  border-radius: 8px;
  background-color: #d8bf8e;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  transition: scale 0.2s;
  color: black;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.format-option:hover {
  transform: scale(1.05);
}

.format-option.active {
  color: black;
  border: 1px solid black;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}

pre {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 5px;
  max-height: 300px;
  overflow: auto;
}
</style>
