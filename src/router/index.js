import { createRouter, createWebHistory } from "vue-router";
import GameSelection from "../views/GameSelection.vue";
import WordScrambleCategories from "../views/WordScramble/WordScrambleCategories.vue";
import WordScrambleGame from "../views/WordScramble/WordScrambleGame.vue";

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
