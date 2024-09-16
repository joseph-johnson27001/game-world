<template>
  <div>
    <!-- Heading Section -->
    <div class="heading-container">
      <span></span>
      <h1>Settings</h1>
      <span></span>
    </div>

    <!-- Game Format Options -->
    <div class="game-format-options">
      <!-- Timed Options -->
      <h3>Timed</h3>
      <div class="format-group">
        <div
          class="format-option"
          :class="{ active: selectedOption === '60s' }"
          @click="selectOption('60s')"
        >
          1 minute
        </div>
        <div
          class="format-option"
          :class="{ active: selectedOption === '120s' }"
          @click="selectOption('120s')"
        >
          2 minutes
        </div>
        <div
          class="format-option"
          :class="{ active: selectedOption === '5min' }"
          @click="selectOption('5min')"
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
          @click="selectOption('10rounds')"
        >
          10 Rounds
        </div>
        <div
          class="format-option"
          :class="{ active: selectedOption === '20rounds' }"
          @click="selectOption('20rounds')"
        >
          20 Rounds
        </div>
        <div
          class="format-option"
          :class="{ active: selectedOption === '40rounds' }"
          @click="selectOption('40rounds')"
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
          @click="selectOption('freePlay')"
        >
          Free Play
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: "",
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
    },
  },
};
</script>

<style scoped>
.game-format-options {
  margin-top: 20px;
}

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
</style>
