<template>
  <nav class="navbar">
    <div class="navbar-content">
      <router-link class="logo" to="/">GAME WORLD</router-link>
      <router-link class="profile-icon" to="/profile">
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
          <path
            d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z"
          />
        </svg>
      </router-link>
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
  max-width: 768px;
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

.profile-icon {
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
}

.profile-icon svg {
  vertical-align: middle;
}
</style>
