<template>
  <div id="app">
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  background-color: #e0e0d2;
  display: flex;
  font-family: "Patrick Hand", cursive;
  flex-direction: column;
  min-height: 100vh;
}

main {
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding-top: 40px;
  min-height: 100vh;
  margin-top: 20px;
}

h1 {
  color: black;
  font-size: 3rem;
  font-weight: 100;
  margin-bottom: 20px;
}
</style>
