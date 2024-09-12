<template>
  <nav class="navbar">
    <div class="navbar-content">
      <router-link class="logo" to="/">Game World</router-link>
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
  background-color: #333;
  color: white;
  padding: 10px 0;
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
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
}
</style>
