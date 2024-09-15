<template>
  <div class="word-scramble-game">
    <!-- Category Name -->
    <h1>{{ currentCategory.name }}</h1>

    <!-- Displaying the current progress of the word -->
    <div class="selected-letters">
      <div class="letter-display">
        {{ userInputString }}
        <span v-if="isCorrect" class="tick-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-check"
          >
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>
      </div>
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "WordScrambleGame",
  data() {
    return {
      currentWordIndex: 0,
      shuffledLetters: [],
      userInput: [],
      clickedTiles: [],
      completed: false,
      isCorrect: false,
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
    userInputString() {
      return this.userInput.join("");
    },
  },
  watch: {
    currentWord() {
      this.shuffleWord();
      this.userInput = [];
      this.clickedTiles = [];
    },
  },
  mounted() {
    if (!this.currentCategory) {
      this.$router.push({ name: "WordScrambleCategories" });
    } else {
      this.shuffleWord();
    }

    document.addEventListener("click", this.handleDocumentClick);
    window.addEventListener("keydown", this.handleKeyInput);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleDocumentClick);
    window.removeEventListener("keydown", this.handleKeyInput);
  },
  methods: {
    ...mapActions("wordScramble", ["selectCategory"]),

    shuffleWord() {
      this.shuffledLetters = this.currentWord
        .split("")
        .sort(() => Math.random() - 0.5);
    },

    selectLetter(letter, index) {
      this.userInput.push(letter);
      this.clickedTiles.push(index);

      if (this.userInput.length === this.currentWord.length) {
        if (this.userInput.join("") === this.currentWord) {
          this.isCorrect = true;
          setTimeout(() => {
            this.isCorrect = false;
            this.nextWord();
          }, 250);
        } else {
          alert("Incorrect! Try again.");
          this.userInput = [];
          this.clickedTiles = [];
        }
      }
    },

    nextWord() {
      if (this.currentWordIndex < 2) {
        this.currentWordIndex++;
        this.shuffleWord();
      } else {
        this.completed = true;
        this.viewResults();
      }
    },

    removeLastLetter() {
      const lastLetter = this.userInput.pop();
      const letterIndex = this.shuffledLetters.findIndex(
        (letter, index) =>
          letter === lastLetter && this.clickedTiles.includes(index)
      );
      this.clickedTiles.splice(this.clickedTiles.indexOf(letterIndex), 1);
    },

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

    viewResults() {
      this.$router.push({ name: "WordScrambleResults" });
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

.letter-display {
  font-size: 1.5em;
  border: none;
  background: transparent;
  text-align: center;
  width: 100%;
  min-height: 50px;
  cursor: default;
  outline: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
}

.tick-icon {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.tick-icon svg {
  color: #4caf50;
  width: 2em;
  height: 2em;
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
</style>
