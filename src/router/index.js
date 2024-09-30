import { createRouter, createWebHistory } from "vue-router";
import GameSelection from "../views/GameSelection.vue";

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

// ROUTES

const routes = [
  { path: "/", name: "GameSelection", component: GameSelection },

  // WORD SCRAMBLE
  {
    path: "/word-scramble/categories",
    name: "WordScrambleCategories",
    component: WordScrambleCategories,
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

export default router;
