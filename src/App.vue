<template>
  <div :class="appClass" id="app">
    <BackButton class="back-button" />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import BackButton from "./components/BackButton.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "App",
  components: {
    BackButton,
  },
  setup() {
    const route = useRoute();

    const isCodeWordPage = computed(() => {
      return ["CodeWordGame", "CodeWordResults", "CodeWordCategories"].includes(
        route.name
      );
    });

    return {
      isCodeWordPage,
    };
  },
  computed: {
    appClass() {
      return this.isCodeWordPage ? "app-dark" : "app-light";
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Patrick Hand", cursive;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

h1 {
  color: #000000;
  font-size: 2rem;
  font-weight: 100;
}

.heading-container {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
}

/* Default light background for non-CodeWord pages */
.app-light {
  background: linear-gradient(to bottom, #ffdab9, #fff1e6);
}

/* Dark background for Code Word pages */
.app-dark {
  background-color: #1a1a1a !important;
}
</style>
