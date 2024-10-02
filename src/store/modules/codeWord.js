// store/modules/codeWord.js

const state = {
  wordToGuess: "", // The correct word to guess
  attempts: 5, // Max 5 attempts
  currentAttempt: 0, // Tracks the current attempt
  guessedLetters: [], // Store letters guessed so far
  correctLetters: [], // Correct letters in the right position
  partialFragments: [], // Correct letters in the wrong position
  gameOver: false, // Tracks if the game is over
  securityLevel: 1, // Tracks the current security level
};

const mutations = {
  SET_WORD_TO_GUESS(state, word) {
    state.wordToGuess = word;
  },
  INCREMENT_ATTEMPT(state) {
    state.currentAttempt++;
  },
  ADD_GUESSED_LETTER(state, letter) {
    state.guessedLetters.push(letter);
  },
  SET_CORRECT_LETTERS(state, correctLetters) {
    state.correctLetters = correctLetters;
  },
  SET_PARTIAL_FRAGMENTS(state, fragments) {
    state.partialFragments = fragments;
  },
  SET_SECURITY_LEVEL(state, level) {
    state.securityLevel = level;
  },
  SET_GAME_OVER(state, status) {
    state.gameOver = status;
  },
  RESET_GAME(state) {
    state.wordToGuess = "";
    state.attempts = 5;
    state.currentAttempt = 0;
    state.guessedLetters = [];
    state.correctLetters = [];
    state.partialFragments = [];
    state.securityLevel = 1;
    state.gameOver = false;
  },
};

const actions = {
  startGame({ commit }, { word }) {
    commit("SET_WORD_TO_GUESS", word);
  },
  guessLetter({ commit, state }, letter) {
    const correctLetters = [];
    const partialFragments = [];

    state.wordToGuess.split("").forEach((char, index) => {
      if (char === letter && !state.correctLetters.includes(letter)) {
        correctLetters.push({ letter, index });
      } else if (state.wordToGuess.includes(letter) && char !== letter) {
        partialFragments.push(letter);
      }
    });

    commit("INCREMENT_ATTEMPT");
    commit("ADD_GUESSED_LETTER", letter);
    commit("SET_CORRECT_LETTERS", correctLetters);
    commit("SET_PARTIAL_FRAGMENTS", partialFragments);

    if (state.currentAttempt >= state.attempts) {
      commit("SET_GAME_OVER", true);
    }

    const securityLevel = Math.min(state.currentAttempt + 1, 6); // Max level is 6
    commit("SET_SECURITY_LEVEL", securityLevel);
  },
  resetGame({ commit }) {
    commit("RESET_GAME");
  },
};

const getters = {
  getWordToGuess: (state) => state.wordToGuess,
  getAttempts: (state) => state.attempts,
  getCurrentAttempt: (state) => state.currentAttempt,
  getGuessedLetters: (state) => state.guessedLetters,
  getCorrectLetters: (state) => state.correctLetters,
  getPartialFragments: (state) => state.partialFragments,
  getSecurityLevel: (state) => state.securityLevel,
  isGameOver: (state) => state.gameOver,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
