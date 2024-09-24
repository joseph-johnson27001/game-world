<template>
  <div>
    <div class="heading-container">
      <span></span>
      <h1>Flag Finder</h1>
      <span></span>
    </div>

    <!-- Updated Category Buttons Layout -->
    <div class="card-container">
      <div
        v-for="difficulty in difficulties"
        :key="difficulty.id"
        class="category-item"
      >
        <div
          class="category-card"
          :class="{ selected: selectedDifficulty === difficulty.id }"
          @click="selectDifficulty(difficulty.id)"
        >
          <img
            :src="`/FlagFinder/${difficulty.icon}`"
            :alt="difficulty.name + ' Image'"
            class="category-image"
          />
        </div>
        <div class="category-name">{{ difficulty.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      difficulties: [
        { id: "easy", name: "Easy", icon: "flag-one-icon.PNG" },
        { id: "medium", name: "Medium", icon: "flag-two-icon.PNG" },
        { id: "hard", name: "Hard", icon: "flag-four-icon.PNG" },
        { id: "random", name: "Mix", icon: "flag-three-icon.PNG" },
      ],
      selectedDifficulty: null,
    };
  },
  methods: {
    selectDifficulty(difficulty) {
      this.selectedDifficulty = difficulty;
      this.$store.dispatch("flagFinder/setDifficulty", difficulty);
      this.$router.push({ name: "FlagFinderGame" });
    },
  },
};
</script>

<style scoped>
/* General Layout for Card Container */
.card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  gap: 20px;
}

/* Category Item */
.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Category Card Styling */
.category-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  max-height: 100px;
  max-width: 100px;
  aspect-ratio: 1;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
}

.category-card:hover {
  transform: scale(1.05);
}

/* Category Image Styling */
.category-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Category Name Styling */
.category-name {
  margin-top: 8px;
  font-size: 1.2em;
}

/* Media Query for Smaller Viewports */
@media (max-width: 540px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Media Query for Smaller Viewports */
@media (max-width: 360px) {
  .card-container {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 250px) {
    .card-container {
      grid-template-columns: 1fr;
    }
  }
}
</style>
