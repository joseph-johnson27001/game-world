<template>
  <div class="word-scramble-game">
    <!-- Category Name -->
    <h1>{{ currentCategory.name }}</h1>

    <!-- Displaying the current progress of the word -->
    <div class="selected-letters">
      <p>{{ userInput.join("") }}</p>
      <!-- Display the input as continuous text -->
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

    <!-- Delete Button -->
    <div class="controls">
      <button
        @click="removeLastLetter"
        class="delete-button"
        :disabled="userInput.length === 0"
      >
        DEL
      </button>
    </div>

    <!-- Hidden Textarea for Mobile Keyboard -->
    <textarea
      ref="hiddenInput"
      class="hidden-input"
      readonly
      aria-hidden="true"
    ></textarea>

    <!-- Game Status -->
    <div v-if="completed">
      <p>Congratulations! You've completed the game.</p>
      <button @click="playAgain" class="play-again-button">Play Again?</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "WordScrambleGame",
  data() {
    return {
      currentWordIndex: 0, // Keep track of the current word
      shuffledLetters: [], // Shuffled letters for the current word
      userInput: [], // User's constructed word
      clickedTiles: [], // To keep track of which tiles have been clicked
      completed: false, // Whether the game is finished
    };
  },
  computed: {
    ...mapGetters("wordScramble", ["getCurrentCategory"]),
    currentCategory() {
      return this.getCurrentCategory || { name: "", words: [] };
    },
    currentWord() {
      return this.currentCategory.words[this.currentWordIndex] || "";
    },
  },
  watch: {
    // When the component is mounted or the word changes, shuffle the letters
    currentWord() {
      this.shuffleWord();
      this.userInput = [];
      this.clickedTiles = [];
    },
  },
  mounted() {
    // If no category is selected, redirect back to category selection
    if (!this.currentCategory) {
      this.$router.push({ name: "WordScrambleCategories" });
    } else {
      this.shuffleWord();
    }

    // Focus on hidden input to ensure keyboard shows up on mobile
    this.$nextTick(() => {
      setTimeout(() => {
        this.$refs.hiddenInput.focus();
      }, 100); // Adjust the delay if necessary
    });

    // Listen for keyboard input
    window.addEventListener("keydown", this.handleKeyInput);
  },
  beforeUnmount() {
    // Changed from beforeDestroy to beforeUnmount
    // Remove the keyboard listener when the component is destroyed
    window.removeEventListener("keydown", this.handleKeyInput);
  },
  methods: {
    ...mapActions("wordScramble", ["selectCategory"]),

    // Shuffle the letters of the current word
    shuffleWord() {
      this.shuffledLetters = this.currentWord
        .split("")
        .sort(() => Math.random() - 0.5);
    },

    // Handle when a letter tile is clicked
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

    // Remove the last letter and re-enable the corresponding tile
    removeLastLetter() {
      const lastLetter = this.userInput.pop(); // Remove the last letter from userInput
      const letterIndex = this.shuffledLetters.findIndex(
        (letter, index) =>
          letter === lastLetter && this.clickedTiles.includes(index)
      );
      this.clickedTiles.splice(this.clickedTiles.indexOf(letterIndex), 1); // Re-enable the tile
    },

    // Handle keyboard input
    handleKeyInput(event) {
      const key = event.key.toUpperCase();
      const letterIndex = this.shuffledLetters.findIndex(
        (letter, index) => letter === key && !this.clickedTiles.includes(index)
      );

      if (letterIndex !== -1) {
        this.selectLetter(this.shuffledLetters[letterIndex], letterIndex);
      } else if (event.key === "Backspace") {
        this.removeLastLetter();
      }
    },

    // Navigate back to the word scramble categories page
    playAgain() {
      this.$router.push({ name: "WordScrambleCategories" });
    },
  },
};
</script>

<style scoped>
.word-scramble-game {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 10px;
}

.selected-letters {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  min-height: 50px;
  border-bottom: 2px solid #d8bf8e;
  overflow-x: auto;
  white-space: nowrap;
}

.selected-letters p {
  font-size: 1.5em;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.letter-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.letter-tile {
  background-color: #d8bf8e;
  border-radius: 5px;
  padding: 20px;
  font-size: 1.5em;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  min-height: 60px;
  min-width: 60px;
}

.letter-tile.selected {
  background-color: #e8e0d0;
}

.letter-tile:disabled {
  background-color: #b3a089;
  cursor: not-allowed;
}

.letter-tile:hover {
  transform: scale(1.1);
}

.controls {
  margin-top: 20px;
}

.delete-button {
  padding: 10px 20px;
  font-size: 1em;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  min-height: 60px;
  min-width: 60px;
}

.delete-button:disabled {
  background-color: #b3a089;
  cursor: not-allowed;
}

.completed {
  margin-top: 20px;
  font-size: 1.5em;
  color: green;
}

.play-again-button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 1em;
  background-color: #05bdba;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  min-height: 60px;
  min-width: 60px;
}

.hidden-input {
  position: absolute;
  left: -9999px;
  top: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
  z-index: -1; /* Ensure it's not covered by other elements */
}
</style>
