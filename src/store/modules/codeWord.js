// store/modules/codeWord.js
const state = {
  selectedDifficulty: "easy",
  selectedTime: "none",
  selectedWord: "",
  currentWord: "",
  attempts: 5,
  maxAttempts: 5,
  wordLists: {
    easy: ["apple", "chair", "water", "table", "bread"],
    medium: ["laptop", "plant", "drive", "score", "world"],
    hard: ["crypt", "matrix", "glyph", "quartz", "zesty"],
  },
};

const getters = {
  getSelectedDifficulty: (state) => state.selectedDifficulty,
  getSelectedTime: (state) => state.selectedTime,
  getCurrentWord: (state) => state.currentWord,
  getAttemptsLeft: (state) => state.maxAttempts - state.attempts,
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
    state.attempts += 1;
  },
  resetAttempts(state) {
    state.attempts = 0;
  },
  decrementAttempts(state) {
    if (state.attempts < state.maxAttempts) {
      state.attempts += 1;
    }
  },
};

const actions = {
  startGame({ commit, state }) {
    // Access the word list based on the selected difficulty
    const words = state.wordLists[state.selectedDifficulty];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    commit("setCurrentWord", randomWord);
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
