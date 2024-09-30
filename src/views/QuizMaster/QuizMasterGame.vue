<template>
  <div class="quiz-game">
    <div class="heading-container">
      <h1>Quiz Master</h1>
    </div>

    <h1 class="question">{{ currentQuestion.question }}</h1>
    <div class="answers-container">
      <button
        v-for="(answer, index) in shuffledAnswers"
        :key="index"
        :class="[
          'answer-button',
          {
            correct: isAnswered && answer === currentQuestion.correctAnswer,
            wrong:
              isAnswered &&
              answer === selectedAnswer &&
              selectedAnswer !== currentQuestion.correctAnswer,
          },
        ]"
        @click="selectAnswer(answer)"
        :disabled="isAnswered"
      >
        {{ answer }}
      </button>
    </div>

    <button
      v-if="isAnswered && !isFinished"
      class="next-button"
      @click="nextQuestion"
    >
      Next Question
    </button>

    <button v-if="isFinished" class="results-button" @click="showResults">
      Show Results
    </button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "QuizMasterGame",
  computed: {
    ...mapState("quizMaster", [
      "numQuestions",
      "startQuiz",
      "selectedCategory",
    ]),
    ...mapGetters("quizMaster", ["getQuestionsByCategory", "getScore"]),
    currentQuestion() {
      return this.questions[this.currentIndex] || {};
    },
    shuffledAnswers() {
      if (
        !this.currentQuestion ||
        !this.currentQuestion.correctAnswer ||
        !Array.isArray(this.currentQuestion.wrongAnswers)
      ) {
        return [];
      }
      const answers = [
        this.currentQuestion.correctAnswer,
        ...this.currentQuestion.wrongAnswers,
      ];
      return answers.sort(() => Math.random() - 0.5);
    },
  },
  data() {
    return {
      currentIndex: 0,
      questions: [],
      selectedAnswer: null,
      isAnswered: false,
      isCorrect: false,
      isFinished: false,
    };
  },
  created() {
    this.questions = this.getQuestionsByCategory(this.selectedCategory);
    this.resetScore();
    if (this.selectedCategory === "Random") {
      this.$store.dispatch("quizMaster/startQuiz").then((questions) => {
        this.questions = questions;
      });
    }
  },
  methods: {
    ...mapActions("quizMaster", ["incrementScore", "resetScore"]),

    selectAnswer(answer) {
      this.selectedAnswer = answer;
      this.isAnswered = true;
      this.isCorrect = answer === this.currentQuestion.correctAnswer;

      if (this.isCorrect) {
        this.incrementScore();
      }

      if (this.currentIndex === this.numQuestions - 1) {
        this.isFinished = true;
      }
    },
    nextQuestion() {
      this.currentIndex++;
      this.selectedAnswer = null;
      this.isAnswered = false;
      this.isCorrect = false;

      if (this.currentIndex >= this.questions.length) {
        this.isFinished = true;
      }
    },
    showResults() {
      this.$router.push({ name: "QuizMasterResults" });
    },
  },
};
</script>

<style scoped>
.quiz-game {
  text-align: center;
  width: 95vw;
}

.question {
  font-size: 1.5em;
  margin-bottom: 20px;
}

.answers-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 20px;
}

.answer-button {
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

.answer-button.correct {
  background: #28a745;
}

.answer-button.wrong {
  background: #dc3545;
}

.next-button,
.results-button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 20px;
}

@media (max-width: 540px) {
  .answers-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
