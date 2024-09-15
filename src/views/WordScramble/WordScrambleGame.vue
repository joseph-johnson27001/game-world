<template>
  <div class="word-scramble-game">
    <!-- Category Name -->
    <h1>{{ currentCategory.name }}</h1>

    <!-- Displaying the current progress of the word -->
    <div class="word-display">
      <span v-for="(letter, index) in userInput" :key="index" class="letter">
        {{ letter }}
      </span>
    </div>

    <!-- Letter Tiles -->
    <div class="letter-container">
      <button
        v-for="(letter, index) in shuffledLetters"
        :key="index"
        class="letter-tile"
        :disabled="clickedTiles.includes(index)"
        @click="selectLetter(letter, index)"
      >
        {{ letter }}
      </button>
    </div>

    <!-- Game Status -->
    <div v-if="completed">
      <p>Congratulations! You've completed the game.</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "WordScrambleGame",
  data() {
    return {
      currentWordIndex: 0, // Track the current word
      shuffledLetters: [], // Shuffled letters for the current word
      userInput: [], // User's constructed word
      clickedTiles: [], // To track which tiles are clicked
      completed: false, // Track if the game is completed
    };
  },
  computed: {
    ...mapGetters("wordScramble", ["getCurrentCategory"]),
    currentCategory() {
      // Just return the current category
      return this.getCurrentCategory || { name: "", words: [] };
    },
    currentWord() {
      return this.currentCategory.words[this.currentWordIndex] || "";
    },
  },
  watch: {
    // Shuffle the word whenever the current word changes
    currentWord() {
      this.shuffleWord();
      this.userInput = [];
      this.clickedTiles = [];
    },
  },
  mounted() {
    // Check if the current category is null and redirect if needed
    if (!this.currentCategory || !this.currentCategory.name) {
      this.$router.push({ name: "WordScrambleCategories" });
    } else {
      this.shuffleWord();
    }
  },
  methods: {
    // Shuffle the letters of the current word
    shuffleWord() {
      this.shuffledLetters = this.currentWord
        .split("")
        .sort(() => Math.random() - 0.5);
    },
    // Handle letter selection
    selectLetter(letter, index) {
      this.userInput.push(letter);
      this.clickedTiles.push(index);

      // Check if the user has completed the word
      if (this.userInput.length === this.currentWord.length) {
        if (this.userInput.join("") === this.currentWord) {
          this.nextWord();
        } else {
          alert("Incorrect! Try again.");
          this.userInput = [];
          this.clickedTiles = [];
        }
      }
    },
    // Move to the next word, or finish the game after 3 words
    nextWord() {
      if (this.currentWordIndex < 2) {
        this.currentWordIndex++;
        this.shuffleWord();
      } else {
        this.completed = true; // End the game after 3 words
      }
    },
  },
};
</script>

<style scoped>
.word-scramble-game {
  text-align: center;
}

.word-display {
  font-size: 2em;
  margin-bottom: 20px;
}

.letter {
  display: inline-block;
  margin: 0 10px;
}

.letter-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.letter-tile {
  background-color: #d8bf8e; /* Scrabble tile color */
  border-radius: 5px;
  padding: 20px;
  font-size: 1.5em;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.letter-tile:disabled {
  background-color: #b3a089; /* Disabled tile color */
  cursor: not-allowed;
}

.letter-tile:hover {
  transform: scale(1.1);
}

.completed {
  margin-top: 20px;
  font-size: 1.5em;
  color: green;
}
</style>
