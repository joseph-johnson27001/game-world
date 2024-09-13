<template>
  <div id="app">
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
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
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  min-height: 100vh;
}

main {
  font-family: "Roboto", sans-serif;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  padding-top: 60px;
  min-height: 100vh;
  margin-top: 60px;
}

h1 {
  text-align: center;
  font-family: "Vibes", system-ui;
  font-style: normal;
  color: #1a1a1a;
  font-weight: 500;
  font-size: 3rem;
  text-transform: uppercase;
}
</style>
