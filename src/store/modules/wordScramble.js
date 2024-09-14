export default {
  namespaced: true,
  state: {
    categories: [
      {
        id: 1,
        name: "Animals",
        words: ["CAT", "DOG", "HORSE"],
        image: "/images/game-tile.JPG",
      },
      {
        id: 2,
        name: "Countries",
        words: ["JAPAN", "CANADA", "FRANCE"],
        image: "/images/crossword.JPG",
      },
      {
        id: 3,
        name: "Cities",
        words: ["LONDON", "NEW YORK", "TOKYO"],
        image: "/images/crossword2.JPG",
      },
      {
        id: 4,
        name: "Colors",
        words: ["RED", "BLUE", "GREEN"],
        image: "/images/game2.JPG",
      },
      {
        id: 5,
        name: "Food",
        words: ["PIZZA", "BURGER", "PASTA"],
        image: "/images/crossword3.JPG",
      },
      {
        id: 6,
        name: "Movies",
        words: ["INCEPTION", "TITANIC", "GLADIATOR"],
        image: "/images/crossword4.JPG",
      },
      {
        id: 7,
        name: "Sports",
        words: ["FOOTBALL", "BASKETBALL", "TENNIS"],
        image: "/images/crossword5.JPG",
      },
      {
        id: 8,
        name: "Music",
        words: ["ROCK", "JAZZ", "CLASSICAL"],
        image: "/images/tile2.JPG",
      },
      {
        id: 9,
        name: "Vehicles",
        words: ["CAR", "BIKE", "PLANE"],
        image: "/images/word-search.JPG",
      },
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
