// store/modules/codeWord.js
const state = {
  selectedDifficulty: "easy",
  selectedTime: "none",
  selectedWord: "",
  currentWord: "",
  attempts: 0,
  maxAttempts: 5,
  wordLists: {
    easy: [
      "apple",
      "chair",
      "water",
      "table",
      "bread",
      "plant",
      "phone",
      "piano",
      "house",
      "beach",
      "light",
      "cloud",
      "music",
      "smile",
      "shirt",
      "truck",
      "glass",
      "fruit",
      "grape",
      "clock",
      "paper",
      "sheep",
      "candy",
      "purse",
      "drink",
      "pizza",
      "horse",
      "board",
      "store",
      "mouse",
      "pouch",
      "plate",
      "pasta",
      "flame",
      "radio",
      "socks",
      "paint",
      "crown",
      "baker",
      "laugh",
      "dream",
      "voice",
      "write",
      "brush",
      "block",
      "match",
      "pound",
      "plant",
      "drive",
      "stone",
    ],
    medium: [
      "latch",
      "drive",
      "score",
      "world",
      "trend",
      "climb",
      "grove",
      "stage",
      "flute",
      "brisk",
      "blaze",
      "glide",
      "pride",
      "craft",
      "crisp",
      "vivid",
      "fleet",
      "straw",
      "blend",
      "creep",
      "dwarf",
      "grasp",
      "flair",
      "grind",
      "torch",
      "crane",
      "swirl",
      "gleam",
      "swamp",
      "thump",
      "quilt",
      "blink",
      "twirl",
      "slope",
      "whirl",
      "sword",
      "twang",
      "pivot",
      "throb",
      "clamp",
      "scarf",
      "flint",
      "stark",
      "slant",
      "plumb",
      "grace",
      "frost",
      "lunge",
      "twist",
      "badge",
    ],
    hard: [
      "crypt",
      "glyph",
      "zesty",
      "quart",
      "radix",
      "brisk",
      "clout",
      "whisk",
      "quilt",
      "squat",
      "tryst",
      "fluke",
      "plumb",
      "shard",
      "broil",
      "scorn",
      "thyme",
      "wrath",
      "flask",
      "quark",
      "whisk",
      "thump",
      "glyph",
      "clasp",
      "flout",
      "slink",
      "thrum",
      "stalk",
      "chime",
      "gruff",
      "slosh",
      "prong",
      "stave",
      "latch",
      "slant",
      "creak",
      "twine",
      "blurt",
      "brisk",
      "stout",
      "shrub",
      "slink",
      "whirl",
      "spine",
      "clomp",
      "prank",
      "glint",
      "scorn",
      "clasp",
      "brisk",
    ],
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
