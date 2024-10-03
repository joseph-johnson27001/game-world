// store/modules/codeWord.js
const state = {
  selectedDifficulty: "easy",
  selectedTime: "none",
  currentWord: "",
  attempts: 0,
  maxAttempts: 5,
  wordLists: {
    easy: ["apple", "house", "table", "chair", "water"],
    medium: ["laptop", "school", "purple", "planet", "driver"],
    hard: ["crypto", "matrix", "zygote", "glyphs", "quartz"],
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
};

const actions = {
  startGame({ commit, state }) {
    // Get the word list based on the selected difficulty
    const wordList = state.wordLists[state.selectedDifficulty];

    // Select a random word from the appropriate word list
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];

    // Commit the chosen word to the state
    commit("setCurrentWord", randomWord);

    // Reset attempts
    commit("resetAttempts");
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
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
