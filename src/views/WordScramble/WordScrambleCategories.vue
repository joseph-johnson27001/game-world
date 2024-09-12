<template>
  <div class="categories">
    <h1>Select Categories</h1>
    <div class="category-list">
      <CategoryCard
        v-for="category in categories"
        :key="category.id"
        :category="category"
        :isSelected="isSelected(category)"
        @selectCategory="handleCategorySelect"
      />
    </div>
    <button
      v-if="selectedCategories.length"
      @click="startGame"
      class="start-game-button"
    >
      Start Game
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CategoryCard from "@/components/WordScramble/CategoryCard.vue";

export default {
  components: {
    CategoryCard,
  },
  data() {
    return {
      selectedCategories: [],
    };
  },
  computed: {
    ...mapGetters("wordScramble", ["getCategories"]),
    categories() {
      return this.getCategories;
    },
  },
  methods: {
    handleCategorySelect(category) {
      const index = this.selectedCategories.findIndex(
        (c) => c.id === category.id
      );
      if (index === -1) {
        this.selectedCategories.push(category);
      } else {
        this.selectedCategories.splice(index, 1);
      }
    },
    isSelected(category) {
      return this.selectedCategories.some((c) => c.id === category.id);
    },
    startGame() {
      this.$router.push({
        name: "WordScrambleGame",
        query: {
          categories: this.selectedCategories.map((c) => c.id).join(","),
        },
      });
    },
  },
};
</script>

<style scoped>
.categories {
  padding: 20px;
}

.category-list {
  display: flex;
  flex-direction: column; /* Stack cards vertically */
  gap: 20px; /* Space between cards */
}

.start-game-button {
  width: 100%;
  display: block;
  margin: 20px auto;
  padding: 12px 24px;
  font-size: 1.1rem;
  color: #fff;
  background-color: #007bff; /* Primary blue color */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.start-game-button:hover {
  background-color: #0056b3; /* Darker blue for hover effect */
}

.start-game-button:active {
  transform: scale(0.98); /* Slightly shrink the button on click */
}
</style>
