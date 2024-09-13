<template>
  <router-link
    :to="link"
    class="game-card"
    :style="{ backgroundColor: bgColor }"
  >
    <div class="game-card-icon">{{ icon }}</div>
    <div class="game-card-name">{{ name.toUpperCase() }}</div>
  </router-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.game-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 15px;
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  text-align: center;
  color: #333;
  padding: 10px;
  border: 1px solid black;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
}

.game-card:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}

.game-card-icon {
  font-size: 48px;
  margin-bottom: 10px;
}

.game-card-name {
  font-size: 18px;
  color: #1a1a1a;
}
</style>
