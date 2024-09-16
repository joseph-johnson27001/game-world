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
      this.selectCategory(category);
      this.$router.push({ name: "WordScrambleGame" });
    },
  },
};
</script>

<style scoped>
.word-scramble-categories {
  text-align: center;
  position: relative;
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

@media (max-width: 540px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 360px) {
  .card-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
