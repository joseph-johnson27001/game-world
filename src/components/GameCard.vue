<template>
  <router-link :to="link" class="game-card">
    <div class="game-card-icon">{{ icon }}</div>
    <div class="game-card-name">{{ name }}</div>
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
  },
};
</script>

<style scoped>
.game-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  color: black;
  padding: 10px;
  font-family: "Comic Sans MS", cursive, sans-serif;
}

.game-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.game-card-icon {
  font-size: 48px;
  margin-bottom: 10px;
}

.game-card-name {
  font-size: 18px;
  font-weight: bold;
}
</style>
