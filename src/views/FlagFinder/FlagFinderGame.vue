<template>
  <div class="flag-finder-game">
    <div class="heading-container">
      <h1>Flag Finder</h1>
    </div>

    <!-- Lives Counter with Heart Icons -->
    <div class="lives-container">
      <p>
        Lives:
        <img
          v-for="index in lives"
          :key="index"
          src="@/assets/icons/heart.svg"
          alt="Heart"
          class="heart-icon"
        />
      </p>
    </div>

    <!-- Game Area -->
    <div v-if="currentQuestion">
      <div class="game-question">
        <img
          v-if="gameMode === 'flagToCountry'"
          :src="currentQuestion.flag"
          alt="Flag"
          class="flag-image"
        />
        <h2 v-if="gameMode === 'countryToFlag'">{{ currentQuestion.name }}</h2>
      </div>

      <!-- Options -->
      <div class="options-container">
        <div
          v-for="(option, index) in options"
          :key="index"
          class="option-card"
          @click="checkAnswer(option)"
          :class="{
            disabled: option.disabled,
            correct: option.isCorrect,
            incorrect: option.isIncorrect,
          }"
        >
          <img
            v-if="gameMode === 'countryToFlag'"
            :src="option.flag"
            alt="Flag Option"
            class="option-flag"
          />
          <span v-if="gameMode === 'flagToCountry'">{{ option.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      currentQuestion: null,
      options: [],
      correctAnswer: null,
      questionsAsked: 0,
      correctAnswersCount: 0,
      usedFlags: new Set(),
    };
  },
  computed: {
    ...mapGetters("flagFinder", [
      "getFlagsByDifficulty",
      "getGameMode",
      "getLives",
    ]),
    lives() {
      return this.getLives;
    },
    gameMode() {
      return this.getGameMode;
    },
  },
  methods: {
    ...mapActions("flagFinder", [
      "decrementLives",
      "resetLives",
      "incrementCorrectAnswers",
      "incrementQuestionsAsked",
    ]),

    setNewQuestion() {
      const flags = this.getFlagsByDifficulty;
      if (this.usedFlags.size >= flags.length || this.questionsAsked >= 20) {
        this.endGame();
        return;
      }

      let randomFlag;
      do {
        randomFlag = flags[Math.floor(Math.random() * flags.length)];
      } while (this.usedFlags.has(randomFlag.name));

      this.currentQuestion = randomFlag;
      this.correctAnswer = randomFlag;
      this.usedFlags.add(randomFlag.name);
      this.questionsAsked++;
      this.incrementQuestionsAsked();

      let incorrectOptions = flags.filter(
        (flag) =>
          flag.name !== randomFlag.name && !this.usedFlags.has(flag.name)
      );
      incorrectOptions = this.shuffleArray(incorrectOptions).slice(0, 3);
      this.options = this.shuffleArray([randomFlag, ...incorrectOptions]).map(
        (option) => ({
          ...option,
          disabled: false,
          isCorrect: false,
          isIncorrect: false,
        })
      );
    },

    checkAnswer(option) {
      if (option.disabled) return;
      this.options.forEach((opt) => (opt.disabled = true));

      if (option.name === this.correctAnswer.name) {
        option.isCorrect = true;
        this.correctAnswersCount++;
        this.incrementCorrectAnswers();
      } else {
        option.isIncorrect = true;
        this.decrementLives();
        if (this.lives === 0) {
          this.endGame();
          return;
        }
        this.options.forEach((opt) => {
          if (opt.name === this.correctAnswer.name) {
            opt.isCorrect = true;
          }
        });
      }
      setTimeout(() => {
        if (this.lives > 0) {
          this.setNewQuestion();
        }
      }, 450);
    },

    shuffleArray(array) {
      return array.sort(() => Math.random() - 0.5);
    },

    endGame() {
      this.$router.push({
        name: "FlagFinderResults",
        params: {
          correctAnswers: this.correctAnswersCount,
          totalQuestions: this.questionsAsked,
          remainingLives: this.lives,
        },
      });
    },
  },
  mounted() {
    this.$store.dispatch("flagFinder/resetQuestionsAndAnswers");
    this.resetLives();
    this.setNewQuestion();
  },
};
</script>

<style scoped>
.flag-finder-game {
  width: 95vw;
}

.lives-container {
  text-align: center;
  margin-bottom: 1em;
  font-size: 1.5em;
  color: #333;
}

.lives-container p {
  display: flex;
  align-items: center;
  justify-content: center;
}

.heart-icon {
  width: 30px;
  height: 30px;
  margin: 0 5px;
}

.flag-image {
  max-width: 300px;
  width: 100%;
  height: 180px;
  display: block;
  margin: 0 auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.options-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  margin: 2em auto;
}

@media screen and (min-width: 550px) {
  .options-container {
    grid-template-columns: 1fr 1fr;
  }
}

.option-card {
  text-align: center;
  font-family: "Patrick Hand", cursive;
  background: linear-gradient(135deg, #3498db, #2980b9);
  border: 1px solid white;
  color: white;
  padding: 15px;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.1s linear;
}

.option-card.disabled {
  background: gray;
  border-color: gray;
  cursor: not-allowed;
}

.option-card.correct {
  background: #28a745;
}

.option-flag {
  max-width: 80px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.option-card.incorrect {
  background-color: red;
  color: white;
}

.option-card.correct {
  background-color: green;
}
</style>
