<template>
  <div class="game-card" @click="handleClick">
    <img :src="image" :alt="name + ' Image'" class="game-image" />
  </div>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit("navigate", this.name);
    },
  },
};
</script>

<style scoped>
.game-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 100px;
  max-width: 100px;
  aspect-ratio: 1;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
}

.game-card:hover {
  transform: scale(1.05);
}

.game-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
