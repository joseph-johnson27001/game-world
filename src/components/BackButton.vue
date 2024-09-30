<template>
  <div v-if="showBackButton" class="back-button" @click="goBack">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path
        d="M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6z"
        fill="currentColor"
      />
    </svg>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    const showBackButton = computed(() => {
      return route.path !== "/";
    });

    const backButtonDestination = computed(() => {
      switch (route.name) {
        case "WordScrambleCategories":
          return "/word-scramble";
        case "FlagFinderCategories":
          return "/flag-finder";
        case "QuizMasterCategories":
          return "/quiz-master";

        default:
          return "/";
      }
    });

    const goBack = () => {
      router.push(backButtonDestination.value);
    };

    return {
      showBackButton,
      goBack,
    };
  },
};
</script>

<style scoped>
.back-button {
  position: absolute;
  top: 20px;
  left: 5px;
  cursor: pointer;
  z-index: 1000;
}
</style>
