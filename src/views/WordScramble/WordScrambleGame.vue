<template>
  <div>
    <!-- Display game board based on selected categories -->
  </div>
</template>

<script>
export default {
  mounted() {
    const categories = this.$route.query.categories;
    if (categories) {
      this.selectedCategories = categories.split(","); // Array of category IDs
      // Use the selected categories to load relevant words
    }
  },
  data() {
    return {
      selectedCategories: [],
    };
  },
};
</script>
