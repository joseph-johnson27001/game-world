<template>
  <div
    class="category-card"
    @click="selectCategory"
    :style="{ backgroundColor: '#f9f5f6' }"
  >
    <div class="category-name">{{ category.name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectCategory() {
      this.$emit("selectCategory", this.category);
    },
  },
};
</script>

<style scoped>
.category-card {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s;
}

.category-card:hover {
  background-color: #e3e0e1; /* Slightly different color on hover */
}
</style>
