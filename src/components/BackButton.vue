<!-- src/components/BackButton.vue -->
<template>
  <button v-if="showButton" class="back-button" @click="navigateBack">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-chevron-left"
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  </button>
</template>

<script>
export default {
  name: "BackButton",
  data() {
    return {
      routesWithNoBack: ["Home", "GameSelection"],
    };
  },
  computed: {
    showButton() {
      return !this.routesWithNoBack.includes(this.$route.name);
    },
  },
  methods: {
    navigateBack() {
      if (this.$route.name === "WordScrambleGame") {
        this.$router.push({ name: "WordScrambleCategories" });
      } else if (this.$route.name === "WordScrambleCategories") {
        this.$router.push({ name: "GameSelection" });
      } else if (this.$route.name === "WordScrambleResults")
        this.$router.push({ name: "WordScrambleCategories" });
      else {
        this.$router.go(-1);
      }
    },
  },
};
</script>

<style scoped>
.back-button {
  position: fixed;
  top: 25px;
  left: 20px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #eaeae1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
  transition: background-color ease 0.2s;
}

.back-button:hover {
  background-color: #f0f0f0;
  color: #333;
}

.back-button svg {
  width: 20px;
  height: 20px;
  stroke: #333;
  transition: color ease 0.2s;
}
</style>
