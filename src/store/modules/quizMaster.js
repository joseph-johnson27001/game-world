const state = {
  selectedCategory: null,
  numQuestions: 10, // default
};

const mutations = {
  SET_CATEGORY(state, category) {
    state.selectedCategory = category;
  },
  SET_NUM_QUESTIONS(state, numQuestions) {
    state.numQuestions = numQuestions;
  },
};

const actions = {
  setCategory({ commit }, category) {
    commit("SET_CATEGORY", category);
  },
  setNumQuestions({ commit }, numQuestions) {
    commit("SET_NUM_QUESTIONS", numQuestions);
  },
  startQuiz({ state }) {
    // Logic to start the quiz using state.selectedCategory and state.numQuestions
    console.log("Starting quiz with category:", state.selectedCategory);
    console.log("Number of questions:", state.numQuestions);
  },
};

const getters = {
  selectedCategory: (state) => state.selectedCategory,
  numQuestions: (state) => state.numQuestions,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
