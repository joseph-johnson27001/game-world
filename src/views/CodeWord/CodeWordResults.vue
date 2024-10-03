<template>
  <div class="code-word-results">
    <div class="heading-container">
      <h1>{{ resultMessage }}</h1>
    </div>

    <p v-if="this.success">You had {{ attempts }} attempts remaining.</p>
    <p v-else>You ran out of attempts and were captured.</p>
  </div>
</template>

<script>
export default {
  computed: {
    attempts() {
      return this.$route.query.attempts;
    },
    success() {
      return this.$route.query.success === "true";
    },
    resultMessage() {
      return this.success ? "You have escaped!" : "You failed!";
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
.code-word-results {
  text-align: center;
}
</style>
