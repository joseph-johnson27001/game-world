<template>
  <div
    class="card category-card"
    :class="{ selected: isSelected }"
    @click="selectCategory"
  >
    <div class="category-name">{{ category.name.toUpperCase() }}</div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
    isSelected: {
      type: Boolean,
      default: false,
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  border-radius: 15px;
  background-color: #ff7043;
  border: 2px solid #ff5722;
  cursor: pointer;
  text-align: center;
  overflow: hidden;
}

.category-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

.category-card.selected {
  background-color: #2196f3;
  border: 2px solid #1976d2;
}

.category-name {
  color: #f5f5f5;
  font-weight: bold;
  font-size: 1.3rem;
  font-family: "Vibes", system-ui;
  letter-spacing: 0.04rem;
  position: relative;
  z-index: 2;
}

@media (max-width: 480px) {
  .category-card {
    height: 80px;
  }
}
</style>
