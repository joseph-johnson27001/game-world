<template>
  <div class="word-scramble-categories">
    <!-- Category Selection -->
    <h1>Select Category</h1>
    <div class="card-container">
      <div
        v-for="category in categories"
        :key="category.id"
        class="category-item"
      >
        <div
          class="category-card"
          :class="{
            selected: selectedCategory && selectedCategory.id === category.id,
          }"
          @click="startGame(category)"
        >
          <img src="/game-tile.jpg" alt="Category Image" />
        </div>
        <div class="category-name">{{ category.name }}</div>
      </div>
    </div>
    <!-- Back Button -->
    <button class="back-button" @click="goBack">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-chevron-left"
      >
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "WordScrambleCategories",
  data() {
    return {
      selectedCategory: null,
    };
  },
  computed: {
    ...mapGetters("wordScramble", ["getCategories"]),
    categories() {
      return this.getCategories;
    },
  },
  methods: {
    ...mapActions("wordScramble", ["selectCategory"]),
    startGame(category) {
      // Set the selected category in the store
      this.selectCategory(category);
      // Navigate to the game page
      this.$router.push({ name: "WordScrambleGame" });
    },
    goBack() {
      // Navigate back to the game selection page
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.word-scramble-categories {
  text-align: center;
}

.back-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 50px;
}

.back-button svg {
  width: 40px;
  height: 40px;
  stroke: #333;
  transition: stroke 0.3s ease;
}

.back-button svg:hover {
  stroke: #000;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.category-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 100px;
  max-width: 100px;
  aspect-ratio: 1;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
}

.category-card:hover {
  transform: scale(1.05);
}

.category-card img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.category-name {
  margin-top: 8px;
  font-size: 1.2em;
}

@media (max-width: 768px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
