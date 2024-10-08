import { createRouter, createWebHistory } from "vue-router";
import GameSelection from "../views/GameSelection.vue";

//CODE WORD
import CodeWordCategories from "@/views/CodeWord/CodeWordCategories.vue";
import CodeWordGame from "@/views/CodeWord/CodeWordGame.vue";
import CodeWordResults from "@/views/CodeWord/CodeWordResults.vue";

// WORD SCRAMBLE
import WordScrambleCategories from "../views/WordScramble/WordScrambleCategories.vue";
import WordScrambleGame from "../views/WordScramble/WordScrambleGame.vue";
import WordScrambleResults from "../views/WordScramble/WordScrambleResults.vue";
import WordScrambleSettings from "../views/WordScramble/WordScrambleSettings.vue";

// QUIZ MASTER
import QuizMasterCategories from "@/views/QuizMaster/QuizMasterCategories.vue";
import QuizMasterGame from "@/views/QuizMaster/QuizMasterGame.vue";
import QuizMasterResults from "@/views/QuizMaster/QuizMasterResults.vue";

// FLAG FINDER
import FlagFinderCategories from "@/views/FlagFinder/FlagFinderCategories.vue";
import FlagFinderGame from "@/views/FlagFinder/FlagFinderGame.vue";
import FlagFinderResults from "@/views/FlagFinder/FlagFinderResults.vue";

// WORD TRAIL

import WordTrailCategories from "@/views/WordTrail/WordTrailCategories.vue";
import WordTrailGame from "@/views/WordTrail/WordTrailGame.vue";
import WordTrailResults from "@/views/WordTrail/WordTrailResults.vue";

// ROUTES
const routes = [
  { path: "/", name: "GameSelection", component: GameSelection },

  // WORD TRAIL

  {
    path: "/word-trail/categories",
    name: "WordTrailCategories",
    component: WordTrailCategories,
  },
  {
    path: "/word-trail/game",
    name: "WordTrailGame",
    component: WordTrailGame,
  },
  {
    path: "/word-trail/results",
    name: "WordTrailResults",
    component: WordTrailResults,
  },

  // CODE WORD
  {
    path: "/code-word/categories",
    name: "CodeWordCategories",
    component: CodeWordCategories,
  },
  {
    path: "/code-word/results",
    name: "CodeWordResults",
    component: CodeWordResults,
  },
  {
    path: "/code-word/game",
    name: "CodeWordGame",
    component: CodeWordGame,
  },

  // FLAG FINDER
  {
    path: "/flag-finder/categories",
    name: "FlagFinderCategories",
    component: FlagFinderCategories,
  },
  {
    path: "/flag-finder/results",
    name: "FlagFinderResults",
    component: FlagFinderResults,
  },
  {
    path: "/flag-finder/game",
    name: "FlagFinderGame",
    component: FlagFinderGame,
  },

  // WORD SCRAMBLE
  {
    path: "/word-scramble/categories",
    name: "WordScrambleCategories",
    component: WordScrambleCategories,
  },
  {
    path: "/word-scramble/game",
    name: "WordScrambleGame",
    component: WordScrambleGame,
  },
  {
    path: "/word-scramble/results",
    name: "WordScrambleResults",
    component: WordScrambleResults,
  },
  {
    path: "/word-scramble/settings",
    name: "WordScrambleSettings",
    component: WordScrambleSettings,
  },

  // QUIZ MASTER
  {
    path: "/quiz-master/game",
    name: "QuizMasterGame",
    component: QuizMasterGame,
  },
  {
    path: "/quiz-master/categories",
    name: "QuizMasterCategories",
    component: QuizMasterCategories,
  },
  {
    path: "/quiz-master/results",
    name: "QuizMasterResults",
    component: QuizMasterResults,
  },

  // Catch-all route for undefined paths (404)
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    // If no match found, redirect to home
    next({ path: "/" });
  } else {
    next();
  }
});

export default router;
