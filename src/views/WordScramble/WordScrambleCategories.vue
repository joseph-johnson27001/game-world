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
      START GAME
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
  width: 80%;
}

.category-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.start-game-button {
  width: 100%;
  display: block;
  margin: 20px auto;
  padding: 12px 24px;
  font-size: 1.6rem;
  font-family: "Vibes", system-ui;
  color: #f5f5f5;
  background-color: #4bb543;
  border: 2px solid #388e3c;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s, transform 0.2s;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  text-transform: bold;
}

.start-game-button:hover {
  background-color: #388e3c;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
}

.start-game-button:active {
  transform: scale(0.98);
}
</style>
