// store/modules/codeWord.js
const state = {
  selectedDifficulty: "easy",
  selectedTime: "none",
  selectedWord: "",
  currentWord: "",
  attempts: 0,
  maxAttempts: 5,
  wordLists: {
    easy: ["apple", "chair", "water", "table", "bread"],
    medium: ["latch", "plant", "drive", "score", "world"],
    hard: ["crypt", "glyph", "zesty", "quart", "radix"],
  },
};

const getters = {
  getSelectedDifficulty: (state) => state.selectedDifficulty,
  getSelectedTime: (state) => state.selectedTime,
  getCurrentWord: (state) => state.currentWord,
};

const mutations = {
  setSelectedDifficulty(state, difficulty) {
    state.selectedDifficulty = difficulty;
  },
  setSelectedTime(state, time) {
    state.selectedTime = time;
  },
  setCurrentWord(state, word) {
    state.currentWord = word;
  },
  incrementAttempts(state) {
    state.attempts += 1; // Increment attempts on each guess
  },
  resetAttempts(state) {
    state.attempts = 0; // Reset attempts to 0
  },
  decrementAttempts(state) {
    if (state.attempts < state.maxAttempts) {
      state.attempts += 1; // Increment attempts only if less than maxAttempts
    }
  },
};

const actions = {
  startGame({ commit }) {
    // Access the word list based on the selected difficulty
    const words = state.wordLists[state.selectedDifficulty];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    commit("setCurrentWord", randomWord);
    commit("resetAttempts"); // Reset attempts when starting a new game
  },

  updateDifficulty({ commit }, difficulty) {
    commit("setSelectedDifficulty", difficulty);
  },
  updateTimeLimit({ commit }, time) {
    commit("setSelectedTime", time);
  },
  makeGuess({ commit, state }) {
    if (state.attempts < state.maxAttempts) {
      commit("incrementAttempts");
    }
  },
  decreaseAttempts({ commit }) {
    commit("decrementAttempts");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
