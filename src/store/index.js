import { createStore } from "vuex";
import wordScramble from "./modules/wordScramble";

export default createStore({
  modules: {
    wordScramble,
  },
});
