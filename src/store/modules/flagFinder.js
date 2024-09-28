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
      { name: "Switzerland", flag: "https://flagcdn.com/w320/ch.png" },
      { name: "Austria", flag: "https://flagcdn.com/w320/at.png" },
      { name: "Ireland", flag: "https://flagcdn.com/w320/ie.png" },
      { name: "Poland", flag: "https://flagcdn.com/w320/pl.png" },
      { name: "Indonesia", flag: "https://flagcdn.com/w320/id.png" },
      { name: "Pakistan", flag: "https://flagcdn.com/w320/pk.png" },
      { name: "Cuba", flag: "https://flagcdn.com/w320/cu.png" },
      { name: "Venezuela", flag: "https://flagcdn.com/w320/ve.png" },
      {
        name: "United Arab Emirates",
        flag: "https://flagcdn.com/w320/ae.png",
      },
      {
        name: "Israel",
        flag: "https://flagcdn.com/w320/il.png",
      },
      {
        name: "Romania",
        flag: "https://flagcdn.com/w320/ro.png",
      },
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
      { name: "Paraguay", flag: "https://flagcdn.com/w320/py.png" },
      { name: "Bolivia", flag: "https://flagcdn.com/w320/bo.png" },
      { name: "Sri Lanka", flag: "https://flagcdn.com/w320/lk.png" },
      { name: "Bangladesh", flag: "https://flagcdn.com/w320/bd.png" },
      { name: "Nepal", flag: "https://flagcdn.com/w320/np.png" },
      { name: "Ecuador", flag: "https://flagcdn.com/w320/ec.png" },
      { name: "Morocco", flag: "https://flagcdn.com/w320/ma.png" },
      { name: "Lebanon", flag: "https://flagcdn.com/w320/lb.png" },
      { name: "Algeria", flag: "https://flagcdn.com/w320/dz.png" },
      { name: "Tunisia", flag: "https://flagcdn.com/w320/tn.png" },
      { name: "Croatia", flag: "https://flagcdn.com/w320/hr.png" },
      { name: "Slovenia", flag: "https://flagcdn.com/w320/si.png" },
      { name: "Uruguay", flag: "https://flagcdn.com/w320/uy.png" },
      {
        name: "Kazakhstan",
        flag: "https://flagcdn.com/w320/kz.png",
      },
      {
        name: "Azerbaijan",
        flag: "https://flagcdn.com/w320/az.png",
      },
      {
        name: "Uzbekistan",
        flag: "https://flagcdn.com/w320/uz.png",
      },
      {
        name: "North Macedonia",
        flag: "https://flagcdn.com/w320/mk.png",
      },
      {
        name: "Bosnia and Herzegovina",
        flag: "https://flagcdn.com/w320/ba.png",
      },
      {
        name: "Belarus",
        flag: "https://flagcdn.com/w320/by.png",
      },
      {
        name: "Georgia",
        flag: "https://flagcdn.com/w320/ge.png",
      },
      {
        name: "Armenia",
        flag: "https://flagcdn.com/w320/am.png",
      },
      {
        name: "Moldova",
        flag: "https://flagcdn.com/w320/md.png",
      },
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
      { name: "Guinea-Bissau", flag: "https://flagcdn.com/w320/gw.png" },
      { name: "Solomon Islands", flag: "https://flagcdn.com/w320/sb.png" },
      { name: "Timor-Leste", flag: "https://flagcdn.com/w320/tl.png" },
      { name: "Eritrea", flag: "https://flagcdn.com/w320/er.png" },
      { name: "Mali", flag: "https://flagcdn.com/w320/ml.png" },
      { name: "Burkina Faso", flag: "https://flagcdn.com/w320/bf.png" },
      { name: "Mauritania", flag: "https://flagcdn.com/w320/mr.png" },
      { name: "Togo", flag: "https://flagcdn.com/w320/tg.png" },
      { name: "Sierra Leone", flag: "https://flagcdn.com/w320/sl.png" },
      { name: "Liberia", flag: "https://flagcdn.com/w320/lr.png" },
      { name: "Papua New Guinea", flag: "https://flagcdn.com/w320/pg.png" },
      { name: "Marshall Islands", flag: "https://flagcdn.com/w320/mh.png" },
      {
        name: "Saint Vincent and the Grenadines",
        flag: "https://flagcdn.com/w320/vc.png",
      },
      { name: "Grenada", flag: "https://flagcdn.com/w320/gd.png" },
      { name: "Antigua and Barbuda", flag: "https://flagcdn.com/w320/ag.png" },
      { name: "Dominica", flag: "https://flagcdn.com/w320/dm.png" },
      { name: "Saint Lucia", flag: "https://flagcdn.com/w320/lc.png" },
      { name: "Cape Verde", flag: "https://flagcdn.com/w320/cv.png" },
      { name: "Gambia", flag: "https://flagcdn.com/w320/gm.png" },
      { name: "Swaziland (Eswatini)", flag: "https://flagcdn.com/w320/sz.png" },
      { name: "Guyana", flag: "https://flagcdn.com/w320/gy.png" },
      { name: "Montenegro", flag: "https://flagcdn.com/w320/me.png" },
      {
        name: "Montserrat",
        flag: "https://flagcdn.com/w320/ms.png",
      },
      {
        name: "Saint Pierre and Miquelon",
        flag: "https://flagcdn.com/w320/pm.png",
      },
      {
        name: "Wallis and Futuna",
        flag: "https://flagcdn.com/w320/wf.png",
      },
      {
        name: "Tokelau",
        flag: "https://flagcdn.com/w320/tk.png",
      },
      {
        name: "South Sudan",
        flag: "https://flagcdn.com/w320/ss.png",
      },
      {
        name: "Andorra",
        flag: "https://flagcdn.com/w320/ad.png",
      },
      {
        name: "San Marino",
        flag: "https://flagcdn.com/w320/sm.png",
      },
      {
        name: "Monaco",
        flag: "https://flagcdn.com/w320/mc.png",
      },
      {
        name: "Liechtenstein",
        flag: "https://flagcdn.com/w320/li.png",
      },
      {
        name: "Vatican City",
        flag: "https://flagcdn.com/w320/va.png",
      },
      {
        name: "Maldives",
        flag: "https://flagcdn.com/w320/mv.png",
      },
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
      state.gameSettings.questionsAsked++;
    },

    INCREMENT_CORRECT_ANSWERS(state) {
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
