<template>
  <div class="word-scramble-categories">
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
import { mapGetters } from "vuex";

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
    selectCategory(category) {
      this.selectedCategory = category;
    },
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
  width: 100px; /* Square size */
  height: 100px; /* Square size */
  background-color: #f0f0f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.category-card:hover {
  transform: scale(1.05);
}

.category-card.selected {
  border: 3px solid #007bff;
  background-color: #e0e0e0;
}

.category-card img {
  max-width: 80%;
  max-height: 80%;
  object-fit: cover;
}

.category-name {
  margin-top: 8px;
  font-size: 1.2em;
}
</style>
