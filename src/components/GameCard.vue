<template>
  <router-link
    :to="link"
    class="game-card"
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
  background-color: #ff7043;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 200px;
  height: 200px;
  border-radius: 15px;
  border: 2px solid;
  transition: transform 0.3s, box-shadow 0.3s;
  text-decoration: none;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  padding: 10px;
  position: relative;
}

.game-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0) 60%
  );
  pointer-events: none;
  z-index: 1;
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

@media (max-width: 768px) {
  .game-card {
    width: 150px;
    height: 150px;
  }
}

@media (max-width: 480px) {
  .game-card {
    width: 100px;
    height: 100px;
    font-size: 14px;
  }
}
</style>
