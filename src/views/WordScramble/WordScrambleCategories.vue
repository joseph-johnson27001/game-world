<template>
  <div class="word-scramble-categories">
    <!-- Category Selection -->
    <div class="heading-container">
      <!-- HIDDEN CLOCK FOR LEFT HAND SIDE - REMOVE LATER -->
      <span>
        <button class="clock-button" style="opacity: 0" @click="goToSettings">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-stopwatch"
          >
            <circle cx="12" cy="13" r="8" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="1" x2="12" y2="4" />
            <line x1="17" y1="4" x2="7" y2="4" />
            <polyline points="19.2 5.6 17 4 19.2 2.4" />
          </svg>
        </button>
      </span>
      <h1>Select Category</h1>
      <!-- Stopwatch Icon Button -->
      <span>
        <button class="clock-button" @click="goToSettings">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-stopwatch"
          >
            <circle cx="12" cy="13" r="8" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="1" x2="12" y2="4" />
            <line x1="17" y1="4" x2="7" y2="4" />
            <polyline points="19.2 5.6 17 4 19.2 2.4" />
          </svg>
        </button>
      </span>
    </div>

    <div class="card-container">
      <div
        v-for="category in categories"
        :key="category.id"
        class="category-item"
      >
        <div
          class="category-card"
          :class="{
            selected: selectedCategory && selectedCategory.id === category.id,
          }"
          @click="startGame(category)"
        >
          <img :src="category.image" :alt="category.name + ' Image'" />
        </div>
        <div class="category-name">{{ category.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "WordScrambleCategories",
  data() {
    return {
      selectedCategory: null,
    };
  },
  computed: {
    ...mapGetters("wordScramble", ["getCategories"]),
    categories() {
      return this.getCategories;
    },
  },
  methods: {
    ...mapActions("wordScramble", ["selectCategory"]),
    startGame(category) {
      this.selectCategory(category);
      this.$router.push({ name: "WordScrambleGame" });
    },
    goToSettings() {
      // Route to WordScrambleSettings page
      this.$router.push({ name: "WordScrambleSettings" });
    },
  },
};
</script>

<style scoped>
.word-scramble-categories {
  text-align: center;
  position: relative;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.category-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 100px;
  max-width: 100px;
  aspect-ratio: 1;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
}

.category-card:hover {
  transform: scale(1.05);
}

.category-card img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.category-name {
  margin-top: 8px;
  font-size: 1.2em;
}

.clock-button {
  margin-top: 10px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.clock-button svg {
  width: 34px;
  height: 34px;
  stroke: #001a33;
  transition: stroke 0.3s ease;
}

@media (max-width: 540px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 360px) {
  .card-container {
    grid-template-columns: repeat(2, 1fr);
  }
  .clock-button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
  }

  .clock-button svg {
    width: 32px;
    height: 32px;
    stroke: #000;
    transition: stroke 0.3s ease;
  }
}
</style>
