<template>
  <div>
    <div class="heading-container">
      <span></span>
      <h1>Flag Finder</h1>
      <span></span>
    </div>

    <!-- Difficulty Buttons -->
    <div class="difficulty-buttons">
      <div class="difficulty-card easy" @click="selectDifficulty('easy')">
        <div class="icon">
          <img src="@/assets/icons/easy-icon.svg" alt="Easy" />
        </div>
        <h2>Easy</h2>
      </div>

      <div class="difficulty-card medium" @click="selectDifficulty('medium')">
        <div class="icon">
          <img src="@/assets/icons/medium-icon.svg" alt="Medium" />
        </div>
        <h2>Medium</h2>
      </div>

      <div class="difficulty-card hard" @click="selectDifficulty('hard')">
        <div class="icon">
          <img src="@/assets/icons/hard-icon.svg" alt="Hard" />
        </div>
        <h2>Hard</h2>
      </div>

      <!-- New Random Option -->
      <div class="difficulty-card random" @click="selectDifficulty('random')">
        <div class="icon">
          <img src="@/assets/icons/random-icon.svg" alt="Random" />
        </div>
        <h2>Random</h2>
      </div>
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
/* General Layout for Difficulty Buttons */
.difficulty-buttons {
  display: flex;
  justify-content: center;
  gap: 1em;
  margin: 2em auto;
}

/* Media Query for Smaller Viewports */
@media (max-width: 600px) {
  .difficulty-buttons {
    flex-direction: column;
    align-items: center;
  }
}

.difficulty-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 15px;
  border: 4px solid transparent;
  padding: 1.5em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

/* Updated Styling for Icons */
.difficulty-card .icon {
  width: 60px;
  height: 60px;
  margin-bottom: 0.75em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.difficulty-card .icon img {
  max-width: 100%;
  max-height: 100%;
}

/* Text Styling */
.difficulty-card h2 {
  font-size: 1.4em;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
}

/* Easy Difficulty Styles */
.easy {
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  border-color: #1e8449;
}
.easy:hover {
  background: linear-gradient(135deg, #2ecc71, #27ae60);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Medium Difficulty Styles */
.medium {
  background: linear-gradient(135deg, #f39c12, #f1c40f);
  border-color: #e67e22;
}
.medium:hover {
  background: linear-gradient(135deg, #f1c40f, #f39c12);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Hard Difficulty Styles */
.hard {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  border-color: #c0392b;
}
.hard:hover {
  background: linear-gradient(135deg, #c0392b, #e74c3c);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Random Difficulty Styles */
.random {
  background: linear-gradient(135deg, #8e44ad, #9b59b6);
  border-color: #8e44ad;
}
.random:hover {
  background: linear-gradient(135deg, #9b59b6, #8e44ad);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
