// store/modules/flagFinder.js

export default {
  namespaced: true,
  state: {
    easy: [
      { name: "United States", flag: "https://flagcdn.com/w320/us.png" },
      { name: "Canada", flag: "https://flagcdn.com/w320/ca.png" },
      { name: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png" },
      { name: "France", flag: "https://flagcdn.com/w320/fr.png" },
      { name: "Germany", flag: "https://flagcdn.com/w320/de.png" },
      { name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
      { name: "Japan", flag: "https://flagcdn.com/w320/jp.png" },
      { name: "Brazil", flag: "https://flagcdn.com/w320/br.png" },
      { name: "Italy", flag: "https://flagcdn.com/w320/it.png" },
      { name: "Spain", flag: "https://flagcdn.com/w320/es.png" },
      { name: "India", flag: "https://flagcdn.com/w320/in.png" },
      { name: "China", flag: "https://flagcdn.com/w320/cn.png" },
      { name: "Mexico", flag: "https://flagcdn.com/w320/mx.png" },
      { name: "Russia", flag: "https://flagcdn.com/w320/ru.png" },
      { name: "South Africa", flag: "https://flagcdn.com/w320/za.png" },
      { name: "Sweden", flag: "https://flagcdn.com/w320/se.png" },
      { name: "Netherlands", flag: "https://flagcdn.com/w320/nl.png" },
      { name: "Turkey", flag: "https://flagcdn.com/w320/tr.png" },
      { name: "Saudi Arabia", flag: "https://flagcdn.com/w320/sa.png" },
      { name: "New Zealand", flag: "https://flagcdn.com/w320/nz.png" },
      { name: "Greece", flag: "https://flagcdn.com/w320/gr.png" },
      { name: "Argentina", flag: "https://flagcdn.com/w320/ar.png" },
      { name: "Thailand", flag: "https://flagcdn.com/w320/th.png" },
      { name: "Vietnam", flag: "https://flagcdn.com/w320/vn.png" },
      { name: "Belgium", flag: "https://flagcdn.com/w320/be.png" },
      { name: "Portugal", flag: "https://flagcdn.com/w320/pt.png" },
      { name: "Egypt", flag: "https://flagcdn.com/w320/eg.png" },
    ],

    medium: [
      { name: "Philippines", flag: "https://flagcdn.com/w320/ph.png" },
      { name: "Colombia", flag: "https://flagcdn.com/w320/co.png" },
      { name: "Ukraine", flag: "https://flagcdn.com/w320/ua.png" },
      { name: "Malaysia", flag: "https://flagcdn.com/w320/my.png" },
      { name: "Chile", flag: "https://flagcdn.com/w320/cl.png" },
      { name: "Finland", flag: "https://flagcdn.com/w320/fi.png" },
      { name: "Singapore", flag: "https://flagcdn.com/w320/sg.png" },
      { name: "Iran", flag: "https://flagcdn.com/w320/ir.png" },
      { name: "South Korea", flag: "https://flagcdn.com/w320/kr.png" },
      { name: "Peru", flag: "https://flagcdn.com/w320/pe.png" },
      { name: "Czech Republic", flag: "https://flagcdn.com/w320/cz.png" },
      { name: "Norway", flag: "https://flagcdn.com/w320/no.png" },
      { name: "Denmark", flag: "https://flagcdn.com/w320/dk.png" },
      { name: "Hungary", flag: "https://flagcdn.com/w320/hu.png" },
      { name: "Iceland", flag: "https://flagcdn.com/w320/is.png" },
      { name: "Slovakia", flag: "https://flagcdn.com/w320/sk.png" },
      { name: "Estonia", flag: "https://flagcdn.com/w320/ee.png" },
      { name: "Latvia", flag: "https://flagcdn.com/w320/lv.png" },
      { name: "Lithuania", flag: "https://flagcdn.com/w320/lt.png" },
      { name: "Jordan", flag: "https://flagcdn.com/w320/jo.png" },
      { name: "Kuwait", flag: "https://flagcdn.com/w320/kw.png" },
      { name: "Bulgaria", flag: "https://flagcdn.com/w320/bg.png" },
      { name: "Serbia", flag: "https://flagcdn.com/w320/rs.png" },
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
      { name: "Malawi", flag: "https://flagcdn.com/w320/mw.png" },
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
      { name: "Palau", flag: "https://flagcdn.com/w320/pw.png" },
      { name: "Anguilla", flag: "https://flagcdn.com/w320/ai.png" },
    ],

    // Game settings
    gameSettings: {
      difficulty: null,
      gameMode: "flagToCountry",
      lives: 3,
      questionsAsked: 0,
      correctAnswersCount: 0,
    },
  },
  getters: {
    getFlagsByDifficulty: (state) => {
      if (state.gameSettings.difficulty === "random") {
        return [...state.easy, ...state.medium, ...state.hard];
      } else {
        return state[state.gameSettings.difficulty];
      }
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
    getQuestionsAsked: (state) => {
      return state.gameSettings.questionsAsked;
    },
    getCorrectAnswersCount: (state) => {
      return state.gameSettings.correctAnswersCount;
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
    INCREMENT_QUESTIONS_ASKED(state) {
      console.log(
        "Questions Asked Incremented:",
        state.gameSettings.questionsAsked
      );
      state.gameSettings.questionsAsked++;
    },

    INCREMENT_CORRECT_ANSWERS(state) {
      console.log(
        "Correct Answers Incremented:",
        state.gameSettings.correctAnswersCount
      );
      state.gameSettings.correctAnswersCount++;
    },
    RESET_QUESTIONS_AND_ANSWERS(state) {
      state.gameSettings.questionsAsked = 0;
      state.gameSettings.correctAnswersCount = 0;
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
    incrementQuestionsAsked({ commit }) {
      commit("INCREMENT_QUESTIONS_ASKED");
    },
    incrementCorrectAnswers({ commit }) {
      commit("INCREMENT_CORRECT_ANSWERS");
    },
    resetQuestionsAndAnswers({ commit }) {
      commit("RESET_QUESTIONS_AND_ANSWERS");
    },
  },
};
