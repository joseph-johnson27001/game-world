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
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
}

main {
  max-width: 1200px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100vh;
  background-color: white;
}

h1 {
  text-align: center;
  font-family: "Comic Sans MS", cursive, sans-serif;
}
</style>
