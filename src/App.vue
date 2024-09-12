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
  font-family: "Roboto", sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  min-height: 100vh;
}

main {
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding-top: 60px;
  min-height: 100vh;
}

h1 {
  text-align: center;
  font-family: "Roboto", sans-serif;
  color: #333;
  margin-bottom: 20px;
}
</style>
