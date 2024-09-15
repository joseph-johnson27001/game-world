import { createRouter, createWebHistory } from "vue-router";
import GameSelection from "../views/GameSelection.vue";
import WordScrambleCategories from "../views/WordScramble/WordScrambleCategories.vue";
import WordScrambleGame from "../views/WordScramble/WordScrambleGame.vue";
import WordScrambleResults from "../views/WordScramble/WordScrambleResults.vue";

const routes = [
  { path: "/", name: "GameSelection", component: GameSelection },
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
  // More routes for other games can be added here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
export default router;
