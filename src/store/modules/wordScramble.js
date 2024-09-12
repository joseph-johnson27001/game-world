export default {
  namespaced: true,
  state: {
    categories: [
      { id: 1, name: "Animals", words: ["CAT", "DOG", "HORSE"] },
      { id: 2, name: "Countries", words: ["JAPAN", "CANADA", "FRANCE"] },
      { id: 3, name: "Cities", words: ["LONDON", "NEW YORK", "TOKYO"] },
    ],
    currentCategory: null,
  },
  mutations: {
    setCategory(state, category) {
      state.currentCategory = category;
    },
  },
  actions: {
    selectCategory({ commit }, category) {
      commit("setCategory", category);
    },
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
    getCurrentCategory(state) {
      return state.currentCategory;
    },
  },
};
