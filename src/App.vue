<template>
  <main>
    <router-view />
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
}

main {
  max-width: 1200px;
  border-radius: 5px;
  height: 100vh;
}

h1 {
  text-align: center;
  font-family: "Comic Sans MS", cursive, sans-serif;
}
</style>
