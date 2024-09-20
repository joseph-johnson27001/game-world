// store/modules/flagFinder.js

export default {
  namespaced: true,
  state: {
    // Flag data divided by difficulty levels
    easy: [
      {
        name: "United States",
        flag: "https://flagcdn.com/w320/us.png",
      },
      {
        name: "Canada",
        flag: "https://flagcdn.com/w320/ca.png",
      },
      {
        name: "United Kingdom",
        flag: "https://flagcdn.com/w320/gb.png",
      },
      {
        name: "France",
        flag: "https://flagcdn.com/w320/fr.png",
      },
      {
        name: "Germany",
        flag: "https://flagcdn.com/w320/de.png",
      },
    ],
    medium: [
      {
        name: "Argentina",
        flag: "https://flagcdn.com/w320/ar.png",
      },
      {
        name: "Brazil",
        flag: "https://flagcdn.com/w320/br.png",
      },
      {
        name: "Mexico",
        flag: "https://flagcdn.com/w320/mx.png",
      },
      {
        name: "Italy",
        flag: "https://flagcdn.com/w320/it.png",
      },
      {
        name: "Japan",
        flag: "https://flagcdn.com/w320/jp.png",
      },
    ],
    hard: [
      {
        name: "Bhutan",
        flag: "https://flagcdn.com/w320/bt.png",
      },
      {
        name: "Lesotho",
        flag: "https://flagcdn.com/w320/ls.png",
      },
      {
        name: "Comoros",
        flag: "https://flagcdn.com/w320/km.png",
      },
      {
        name: "Tuvalu",
        flag: "https://flagcdn.com/w320/tv.png",
      },
      {
        name: "Nauru",
        flag: "https://flagcdn.com/w320/nr.png",
      },
    ],
    // Game settings
    gameSettings: {
      difficulty: null,
      gameMode: "flagToCountry",
      lives: 3,
    },
  },
  getters: {
    getFlagsByDifficulty: (state) => {
      return state[state.gameSettings.difficulty]; // Return flags based on selected difficulty
    },
    getGameMode: (state) => {
      return state.gameSettings.gameMode;
    },
    getLives: (state) => {
      return state.gameSettings.lives;
    },
    getCurrentDifficulty: (state) => {
      return state.gameSettings.difficulty;
    },
  },
  mutations: {
    SET_DIFFICULTY(state, difficulty) {
      state.gameSettings.difficulty = difficulty;
    },
    SET_GAME_MODE(state, mode) {
      state.gameSettings.gameMode = mode;
    },
    DECREMENT_LIVES(state) {
      if (state.gameSettings.lives > 0) {
        state.gameSettings.lives--;
      }
    },
    RESET_LIVES(state) {
      state.gameSettings.lives = 3;
    },
  },
  actions: {
    setDifficulty({ commit }, difficulty) {
      commit("SET_DIFFICULTY", difficulty);
    },
    setGameMode({ commit }, mode) {
      commit("SET_GAME_MODE", mode);
    },
    decrementLives({ commit }) {
      commit("DECREMENT_LIVES");
    },
    resetLives({ commit }) {
      commit("RESET_LIVES");
    },
  },
};
