<template>
  <router-link
    :to="link"
    class="card game-card"
    :style="{ backgroundColor: bgColor, borderColor: borderColor }"
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
    borderColor: {
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
  justify-content: center;
  text-align: center;
  width: 200px;
  height: 200px;
  position: relative;
}

.game-card:hover {
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
}

.game-card-icon {
  font-size: 48px;
  margin-bottom: 10px;
}

.game-card-name {
  color: #f5f5f5;
  font-weight: bold;
  font-size: 1.3rem;
  font-family: "Vibes", system-ui;
  letter-spacing: 0.04rem;
}

@media (max-width: 480px) {
  .game-card {
    width: 150px;
    height: 150px;
  }
}
</style>
