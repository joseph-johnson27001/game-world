<template>
  <div v-if="showBackButton" class="back-button" @click="goBack">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      viewBox="0 0 512 512"
    >
      <g data-name="Layer 2" id="Layer_2">
        <g
          data-name="E421, Back, buttons, multimedia, play, stop"
          id="E421_Back_buttons_multimedia_play_stop"
        >
          <circle class="cls-1" cx="256" cy="256" r="246" />

          <line class="cls-1" x1="352.26" x2="170.43" y1="256" y2="256" />

          <polyline
            class="cls-1"
            points="223.91 202.52 170.44 256 223.91 309.48"
          />
        </g>
      </g>
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
        // WORD SCRAMBLE
        case "WordScrambleGame":
          return "/word-scramble/categories";
        case "WordScrambleResults":
          return "/word-scramble/categories";

        // FLAG FINDER
        case "FlagFinderResults":
          return "/flag-finder/categories";
        case "FlagFinderGame":
          return "/flag-finder/categories";

        // QUIZ MASTER
        case "QuizMasterResults":
          return "/quiz-master/categories";
        case "QuizMasterGame":
          return "/quiz-master/categories";
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
  top: 10px;
  left: 10px;
  cursor: pointer;
  z-index: 1000;
}

.cls-1 {
  fill: none;
  stroke: #000000;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 20px;
}
</style>
