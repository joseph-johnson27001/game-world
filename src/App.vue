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
  max-width: 768px;
  width: 100%;
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
  margin-bottom: 20px;
}

.card {
  border-radius: 10px;
  border: 2px solid;
  text-decoration: none;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  padding: 10px;
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.1s,
    border-color 0.1s;
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0) 60%
  );
  pointer-events: none;
  z-index: 1;
}

@media (max-width: 480px) {
  main {
    margin-top: 10px;
  }
}
</style>
