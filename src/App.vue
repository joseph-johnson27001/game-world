<template>
  <div id="app">
    <BackButton class="back-button" />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import BackButton from "./components/BackButton.vue";

export default {
  name: "App",
  components: {
    BackButton,
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
  position: relative;
  background: linear-gradient(to bottom, #ffdab9, #fff1e6);
  display: flex;
  font-family: "Patrick Hand", cursive;
  flex-direction: column;
  min-height: 100vh;
}

main {
  max-width: 768px;
  width: 95vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

h1 {
  color: #000000;
  font-size: 3rem;
  font-weight: 100;
}

.heading-container {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
