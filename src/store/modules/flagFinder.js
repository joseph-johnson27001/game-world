// store/modules/flagFinder.js

export default {
  namespaced: true,
  state: {
    // Flag data divided by difficulty levels
    easy: [
      { name: "United States", flag: "https://flagcdn.com/w320/us.png" },
      { name: "Canada", flag: "https://flagcdn.com/w320/ca.png" },
      { name: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png" },
      { name: "France", flag: "https://flagcdn.com/w320/fr.png" },
      { name: "Germany", flag: "https://flagcdn.com/w320/de.png" },
      { name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
      { name: "Japan", flag: "https://flagcdn.com/w320/jp.png" },
      { name: "South Africa", flag: "https://flagcdn.com/w320/za.png" },
      { name: "Spain", flag: "https://flagcdn.com/w320/es.png" },
      { name: "Brazil", flag: "https://flagcdn.com/w320/br.png" },
    ],

    medium: [
      { name: "Italy", flag: "https://flagcdn.com/w320/it.png" },
      { name: "Mexico", flag: "https://flagcdn.com/w320/mx.png" },
      { name: "India", flag: "https://flagcdn.com/w320/in.png" },
      { name: "China", flag: "https://flagcdn.com/w320/cn.png" },
      { name: "Russia", flag: "https://flagcdn.com/w320/ru.png" },
      { name: "Thailand", flag: "https://flagcdn.com/w320/th.png" },
      { name: "Egypt", flag: "https://flagcdn.com/w320/eg.png" },
      { name: "Argentina", flag: "https://flagcdn.com/w320/ar.png" },
      { name: "Philippines", flag: "https://flagcdn.com/w320/ph.png" },
      { name: "Vietnam", flag: "https://flagcdn.com/w320/vn.png" },
    ],

    hard: [
      { name: "Bhutan", flag: "https://flagcdn.com/w320/bt.png" },
      { name: "Lesotho", flag: "https://flagcdn.com/w320/ls.png" },
      { name: "Comoros", flag: "https://flagcdn.com/w320/km.png" },
      { name: "Tuvalu", flag: "https://flagcdn.com/w320/tv.png" },
      { name: "Nauru", flag: "https://flagcdn.com/w320/nr.png" },
      { name: "Djibouti", flag: "https://flagcdn.com/w320/dj.png" },
      {
        name: "Sao Tome and Principe",
        flag: "https://flagcdn.com/w320/st.png",
      },
      { name: "Vanuatu", flag: "https://flagcdn.com/w320/vu.png" },
      { name: "Micronesia", flag: "https://flagcdn.com/w320/fm.png" },
      { name: "Brunei", flag: "https://flagcdn.com/w320/bn.png" },
      { name: "Kiribati", flag: "https://flagcdn.com/w320/ki.png" },
      { name: "Tajikistan", flag: "https://flagcdn.com/w320/tj.png" },
      { name: "Suriname", flag: "https://flagcdn.com/w320/sr.png" },
      {
        name: "Central African Republic",
        flag: "https://flagcdn.com/w320/cf.png",
      },
      { name: "Equatorial Guinea", flag: "https://flagcdn.com/w320/gq.png" },
      { name: "Chad", flag: "https://flagcdn.com/w320/td.png" },
      { name: "Seychelles", flag: "https://flagcdn.com/w320/sc.png" },
      { name: "Gabon", flag: "https://flagcdn.com/w320/ga.png" },
      {
        name: "Saint Kitts and Nevis",
        flag: "https://flagcdn.com/w320/kn.png",
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
      return state[state.gameSettings.difficulty];
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
