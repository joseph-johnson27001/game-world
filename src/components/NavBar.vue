<template>
  <nav class="navbar">
    <div class="navbar-content">
      <router-link class="logo" to="/">GAME WORLD</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  width: 100%;
  background-color: #4169e1;
  font-family: "Vibes", system-ui;
  color: white;
  padding: 15px 0px 10px 0px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.navbar-content {
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}
</style>
