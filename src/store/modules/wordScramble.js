export default {
  namespaced: true,
  state: {
    categories: [
      {
        id: 1,
        name: "Animals",
        words: [
          "CAT",
          "DOG",
          "HORSE",
          "ELEPHANT",
          "GIRAFFE",
          "LION",
          "TIGER",
          "BEAR",
          "PANDA",
          "KANGAROO",
          "ZEBRA",
          "DEER",
          "WOLF",
          "RABBIT",
          "FROG",
          "MONKEY",
          "SNAKE",
          "PARROT",
          "SHARK",
          "DOLPHIN",
        ],
        image: "/WordScramble/animals-tile.JPG",
      },
      {
        id: 2,
        name: "Countries",
        words: [
          "JAPAN",
          "CANADA",
          "FRANCE",
          "USA",
          "GERMANY",
          "ITALY",
          "SPAIN",
          "AUSTRALIA",
          "BRAZIL",
          "INDIA",
          "CHINA",
          "MEXICO",
          "ARGENTINA",
          "EGYPT",
          "SOUTH AFRICA",
          "RUSSIA",
          "NORWAY",
          "SWEDEN",
          "FINLAND",
          "SOUTH KOREA",
        ],
        image: "/WordScramble/world-tile.JPG",
      },
      {
        id: 3,
        name: "Cities",
        words: [
          "LONDON",
          "NEW YORK",
          "TOKYO",
          "PARIS",
          "BERLIN",
          "SYDNEY",
          "ROME",
          "MADRID",
          "BEIJING",
          "MOSCOW",
          "DUBAI",
          "TORONTO",
          "CAPE TOWN",
          "LOS ANGELES",
          "ISTANBUL",
          "SINGAPORE",
          "SAN FRANCISCO",
          "HONG KONG",
          "SEOUL",
          "SAO PAULO",
        ],
        image: "/WordScramble/cities-tile.JPG",
      },
      {
        id: 4,
        name: "Colors",
        words: [
          "RED",
          "BLUE",
          "GREEN",
          "YELLOW",
          "ORANGE",
          "PURPLE",
          "PINK",
          "BROWN",
          "BLACK",
          "WHITE",
          "GRAY",
          "CYAN",
          "MAGENTA",
          "TEAL",
          "MAROON",
          "INDIGO",
          "VIOLET",
          "OLIVE",
          "BEIGE",
          "TURQUOISE",
        ],
        image: "/WordScramble/colours-tile.JPG",
      },
      {
        id: 5,
        name: "Food",
        words: [
          "PIZZA",
          "BURGER",
          "PASTA",
          "SUSHI",
          "TACOS",
          "SALAD",
          "STEAK",
          "FRIES",
          "CHICKEN",
          "FISH",
          "SOUP",
          "ICE CREAM",
          "CAKE",
          "BROWNIE",
          "DONUT",
          "COOKIE",
          "PANCAKE",
          "WAFFLE",
          "OATMEAL",
          "FRUIT",
        ],
        image: "/WordScramble/food-tile.JPG",
      },
      {
        id: 6,
        name: "Movies",
        words: [
          "INCEPTION",
          "TITANIC",
          "GLADIATOR",
          "AVATAR",
          "THE MATRIX",
          "JURASSIC PARK",
          "THE GODFATHER",
          "FORREST GUMP",
          "PULP FICTION",
          "THE SHINING",
          "LORD OF THE RINGS",
          "STAR WARS",
          "CASABLANCA",
          "CITIZEN KANE",
          "ET",
          "JAWS",
          "SCHINDLER'S LIST",
          "THE DARK KNIGHT",
          "INCEPTION",
          "MATRIX",
        ],
        image: "/WordScramble/movie-tile.JPG",
      },
      {
        id: 7,
        name: "Sports",
        words: [
          "FOOTBALL",
          "BASKETBALL",
          "TENNIS",
          "BASEBALL",
          "SOCCER",
          "CRICKET",
          "GOLF",
          "HOCKEY",
          "VOLLEYBALL",
          "RUGBY",
          "SWIMMING",
          "RUNNING",
          "BOXING",
          "MMA",
          "CYCLING",
          "SKIING",
          "SKATEBOARDING",
          "TABLE TENNIS",
          "BADMINTON",
          "DARTS",
        ],
        image: "/WordScramble/sports-tile.JPG",
      },
      {
        id: 8,
        name: "Music",
        words: [
          "ROCK",
          "JAZZ",
          "CLASSICAL",
          "POP",
          "HIP HOP",
          "R&B",
          "COUNTRY",
          "BLUES",
          "REGGAE",
          "ELECTRONIC",
          "FOLK",
          "SOUL",
          "PUNK",
          "METAL",
          "INDIE",
          "GOSPEL",
          "OPERA",
          "DISCO",
          "LATINO",
          "FUNK",
        ],
        image: "/WordScramble/music-tile.JPG",
      },
      {
        id: 9,
        name: "Vehicles",
        words: [
          "CAR",
          "BIKE",
          "PLANE",
          "BOAT",
          "TRAIN",
          "TRUCK",
          "SCOOTER",
          "HELICOPTER",
          "SUBMARINE",
          "BUS",
          "VAN",
          "MOTORCYCLE",
          "BICYCLE",
          "TROLLEY",
          "TRACTOR",
          "LIMOUSINE",
          "JET",
          "FERRIS WHEEL",
          "CART",
          "RICKSHAW",
        ],
        image: "/WordScramble/vehichles-tile.JPG",
      },
      {
        id: 10,
        name: "Fruits",
        words: [
          "APPLE",
          "BANANA",
          "ORANGE",
          "GRAPE",
          "STRAWBERRY",
          "MANGO",
          "PINEAPPLE",
          "WATERMELON",
          "CHERRY",
          "PEACH",
          "PLUM",
          "PEAR",
          "KIWI",
          "PAPAYA",
          "GRAPEFRUIT",
          "BLUEBERRY",
          "RASPBERRY",
          "COCONUT",
          "FIG",
          "AVOCADO",
        ],
        image: "/WordScramble/fruits-tile.JPG",
      },
      {
        id: 11,
        name: "Jobs",
        words: [
          "DOCTOR",
          "LAWYER",
          "TEACHER",
          "ENGINEER",
          "NURSE",
          "SCIENTIST",
          "POLICE",
          "FIREMAN",
          "CHEF",
          "PILOT",
          "ACTOR",
          "WRITER",
          "ARCHITECT",
          "DANCER",
          "MECHANIC",
          "PHOTOGRAPHER",
          "FARMER",
          "MUSICIAN",
          "PLUMBER",
          "VETERINARIAN",
        ],
        image: "/WordScramble/jobs-tile.JPG",
      },
      {
        id: 12,
        name: "Technology",
        words: [
          "COMPUTER",
          "SMARTPHONE",
          "ROBOT",
          "INTERNET",
          "SOFTWARE",
          "HARDWARE",
          "TABLET",
          "LAPTOP",
          "SATELLITE",
          "DRONE",
          "AI",
          "VIRTUAL REALITY",
          "5G",
          "CLOUD",
          "GADGET",
          "CYBERSECURITY",
          "BLOCKCHAIN",
          "CODING",
          "NETWORK",
          "DATABASE",
        ],
        image: "/WordScramble/technology-tile.JPG",
      },
    ],
    currentCategory: null,
    gameResults: {
      score: 0,
      time: 0,
    },
    gameFormat: {
      type: null,
      value: null,
    },
  },
  mutations: {
    setCategory(state, category) {
      state.currentCategory = category;
    },
    setGameResults(state, results) {
      state.gameResults = results;
    },
    setGameFormat(state, format) {
      state.gameFormat.type = format.type;
      state.gameFormat.value = format.value;
    },
  },
  actions: {
    selectCategory({ commit }, category) {
      commit("setCategory", category);
    },
    setGameResults({ commit }, results) {
      commit("setGameResults", results);
    },
    selectGameFormat({ commit }, format) {
      commit("setGameFormat", format);
    },
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
    getCurrentCategory(state) {
      return state.currentCategory;
    },
    getScore(state) {
      return state.gameResults.score;
    },
    getTime(state) {
      return state.gameResults.time;
    },
    getGameFormat(state) {
      return state.gameFormat;
    },
  },
};
