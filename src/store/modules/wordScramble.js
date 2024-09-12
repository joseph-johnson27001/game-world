export default {
  namespaced: true,
  state: {
    categories: [
      { id: 1, name: "Animals", words: ["CAT", "DOG", "HORSE"] },
      { id: 2, name: "Countries", words: ["JAPAN", "CANADA", "FRANCE"] },
      { id: 3, name: "Cities", words: ["LONDON", "NEW YORK", "TOKYO"] },
      { id: 4, name: "Colors", words: ["RED", "BLUE", "GREEN"] },
      { id: 5, name: "Food", words: ["PIZZA", "BURGER", "PASTA"] },
      { id: 6, name: "Movies", words: ["INCEPTION", "TITANIC", "GLADIATOR"] },
      { id: 7, name: "Sports", words: ["FOOTBALL", "BASKETBALL", "TENNIS"] },
      { id: 8, name: "Music", words: ["ROCK", "JAZZ", "CLASSICAL"] },
      { id: 9, name: "Vehicles", words: ["CAR", "BIKE", "PLANE"] },
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
