<template>
  <div class="categories">
    <h1>Select Categories</h1>
    <div class="category-list">
      <CategoryCard
        v-for="category in categories"
        :key="category.id"
        :category="category"
        @selectCategory="handleCategorySelect"
      />
    </div>
    <button v-if="selectedCategories.length" @click="startGame">
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
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
