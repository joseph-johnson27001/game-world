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
  position: relative;
  aspect-ratio: 1 / 1;
  border: 2px solid transparent;
  transition: transform 0.3s, box-shadow 0.3s;
  max-height: 225px;
  max-width: 225px;
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

@media (max-width: 580px) {
  .game-card {
    height: 225px;
    width: 225px;
  }
}

@media (max-width: 480px) {
  .game-card {
    height: 200px;
    width: 200px;
  }
}

@media (max-width: 420px) {
  .game-card {
    height: 180px;
    width: 180px;
  }
  .game-card-icon {
    font-size: 38px;
    margin-bottom: 5px;
  }
  .game-card-name {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    .game-card {
      height: 150px;
      width: 150px;
    }
  }

  @media (max-width: 320px) {
    .game-card {
      height: 225px;
      width: 225px;
    }
  }

  @media (max-width: 260px) {
    .game-card {
      height: 200px;
      width: 200px;
    }
  }
}
</style>
