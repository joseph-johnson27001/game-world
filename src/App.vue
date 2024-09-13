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
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  font-family: "Roboto", sans-serif;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding-top: 60px;
  min-height: 100vh;
  margin-top: 40px;
}

h1 {
  text-align: center;
  font-family: "Bangers", system-ui;
  font-style: normal;
  color: #1a1a1a;
  font-weight: 500;
  font-size: 2.5rem;
  text-transform: uppercase;
  margin-bottom: 15px;
}
</style>
