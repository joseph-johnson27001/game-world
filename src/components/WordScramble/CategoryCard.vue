<template>
  <div class="category-card" @click="handleClick">
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
    handleClick() {
      this.$emit("selectCategory", this.category);
    },
  },
};
</script>

<style scoped>
.category-card {
  display: block;
  width: 100%;
  background-color: #ff5722;
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s;
}

.category-card:hover {
  background-color: #e64a19;
}
</style>
