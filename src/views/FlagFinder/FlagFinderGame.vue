<template>
  <div class="flag-finder-game">
    <div class="heading-container">
      <span></span>
      <h1>Flag Finder</h1>
      <span></span>
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

      this.options = this.shuffleArray([randomFlag, ...incorrectOptions]);
    },

    checkAnswer(option) {
      if (option.name === this.correctAnswer.name) {
        this.correctAnswersCount++;
        this.incrementCorrectAnswers();

        this.setNewQuestion();
      } else {
        this.decrementLives();
        if (this.lives === 0) {
          this.endGame();
        }
      }
    },

    shuffleArray(array) {
      return array.sort(() => Math.random() - 0.5);
    },

    endGame() {
      this.resetLives();
      this.$router.push({
        name: "FlagFinderResults",
        params: {
          correctAnswers: this.correctAnswersCount,
          totalQuestions: this.questionsAsked,
        },
      });
    },
  },
  mounted() {
    this.$store.dispatch("flagFinder/resetQuestionsAndAnswers");
    this.setNewQuestion();
  },
};
</script>

<style scoped>
.flag-finder-game {
  min-width: 95%;
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
  width: 80%;
}

@media screen and (min-width: 550px) {
  .options-container {
    grid-template-columns: 1fr 1fr;
  }
}

.option-card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1em;
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  border-radius: 15px;
  border: 3px solid #2980b9;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.option-card:hover {
  background: linear-gradient(135deg, #2980b9, #3498db);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.option-flag {
  max-width: 80px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
