import { createStore } from "vuex";
import wordScramble from "./modules/wordScramble";
import flagFinder from "./modules/flagFinder";
import quizMaster from "./modules/quizMaster";

export default createStore({
  modules: {
    wordScramble,
    quizMaster,
    flagFinder,
  },
});
