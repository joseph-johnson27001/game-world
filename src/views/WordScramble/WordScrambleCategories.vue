<template>
  <div class="categories">
    <h1>Select a Category</h1>
    <div class="category-list">
      <router-link
        v-for="category in categories"
        :key="category.id"
        :to="{ name: 'WordScrambleGame' }"
        @click="selectCategory(category)"
        class="category-card"
        :style="{ backgroundColor: category.bgColor }"
      >
        <div class="category-name">{{ category.name }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "WordScrambleCategories",
  computed: {
    ...mapGetters("wordScramble", ["getCategories"]),
    categories() {
      return this.getCategories;
    },
  },
  methods: {
    ...mapActions("wordScramble", ["selectCategory"]),
  },
};
</script>
