// store/modules/quizMaster.js

const state = {
  selectedCategory: null,
  numQuestions: 20,
  questions: {
    Science: [
      {
        question: "What is the chemical symbol for water?",
        correctAnswer: "H2O",
        wrongAnswers: ["CO2", "O2", "N2"],
      },
      // Add more Science questions here (for now, this is one example)
    ],
    History: [
      {
        question: "Who was the first president of the United States?",
        correctAnswer: "George Washington",
        wrongAnswers: ["Abraham Lincoln", "Thomas Jefferson", "John Adams"],
      },
      // Add more History questions here
    ],
    Geography: [
      {
        question: "Which is the largest ocean on Earth?",
        correctAnswer: "Pacific Ocean",
        wrongAnswers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
      },
      // Add more Geography questions here
    ],
    Math: [
      {
        question: "What is the value of Pi (π) to two decimal places?",
        correctAnswer: "3.14",
        wrongAnswers: ["2.72", "1.41", "3.33"],
      },
      // Add more Math questions here
    ],
    Literature: [
      {
        question: "Who wrote the novel '1984'?",
        correctAnswer: "George Orwell",
        wrongAnswers: ["Aldous Huxley", "J.K. Rowling", "F. Scott Fitzgerald"],
      },
      // Add more Literature questions here
    ],
    Movies: [
      {
        question: "Which movie won the Academy Award for Best Picture in 1994?",
        correctAnswer: "Forrest Gump",
        wrongAnswers: [
          "Pulp Fiction",
          "The Shawshank Redemption",
          "Four Weddings and a Funeral",
        ],
      },
      // Add more Movies questions here
    ],
    Sports: [
      {
        question: "In what sport would you perform a slam dunk?",
        correctAnswer: "Basketball",
        wrongAnswers: ["Tennis", "Soccer", "Volleyball"],
      },
      // Add more Sports questions here
    ],
    Music: [
      {
        question: "Who is known as the 'King of Pop'?",
        correctAnswer: "Michael Jackson",
        wrongAnswers: ["Elvis Presley", "Prince", "Freddie Mercury"],
      },
      // Add more Music questions here
    ],
    Technology: [
      {
        question: "Who is credited with inventing the World Wide Web?",
        correctAnswer: "Tim Berners-Lee",
        wrongAnswers: ["Bill Gates", "Steve Jobs", "Larry Page"],
      },
      // Add more Technology questions here
    ],
    Art: [
      {
        question: "Who painted the 'Mona Lisa'?",
        correctAnswer: "Leonardo da Vinci",
        wrongAnswers: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
      },
      // Add more Art questions here
    ],
    General: [
      {
        question: "What is the capital of France?",
        correctAnswer: "Paris",
        wrongAnswers: ["Berlin", "Rome", "Madrid"],
      },
      // Add more General questions here
    ],
    Random: [
      {
        question: "How many continents are there on Earth?",
        correctAnswer: "Seven",
        wrongAnswers: ["Five", "Six", "Eight"],
      },
      // Add more Random questions here
    ],
  },
};

const mutations = {
  setCategory(state, category) {
    state.selectedCategory = category;
  },
  setNumQuestions(state, num) {
    state.numQuestions = num;
  },
};

const actions = {
  setCategory({ commit }, category) {
    commit("setCategory", category);
  },
  setNumQuestions({ commit }, num) {
    commit("setNumQuestions", num);
  },
  startQuiz({ state }) {
    const categoryQuestions = state.questions[state.selectedCategory];
    return categoryQuestions.slice(0, state.numQuestions);
  },
};

const getters = {
  getQuestionsByCategory: (state) => (category) => {
    return state.questions[category] || [];
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
