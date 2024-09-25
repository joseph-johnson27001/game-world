<template>
  <div class="quiz-categories">
    <div class="heading-container" style="justify-content: center">
      <h1>Select Quiz Category</h1>
    </div>
    <div class="card-container">
      <div
        v-for="category in categories"
        :key="category.name"
        class="category-item"
      >
        <QuizCard
          :name="category.name"
          :image="category.image"
          @selectCategory="selectCategory"
        />
        <div class="category-name">{{ category.name }}</div>
      </div>
    </div>

    <div class="settings-container">
      <h2>Number of Questions</h2>
      <input
        type="number"
        v-model.number="numQuestions"
        min="1"
        max="50"
        placeholder="Select number of questions"
      />
    </div>

    <div class="action-buttons">
      <button @click="startQuiz">Start Quiz</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import QuizCard from "@/components/QuizMaster/QuizCard.vue"; // Assuming it's similar to GameCard.vue

export default {
  name: "QuizMasterCategories",
  components: {
    QuizCard,
  },
  data() {
    return {
      numQuestions: 10, // Default to 10 questions
    };
  },
  computed: {
    ...mapState("quizMaster", ["selectedCategory"]),
    categories() {
      return [
        { name: "Science", image: "QuizMaster/science.jpg" },
        { name: "History", image: "QuizMaster/history.jpg" },
        { name: "Geography", image: "QuizMaster/geography.jpg" },
        { name: "Math", image: "QuizMaster/math.jpg" },
        { name: "Literature", image: "QuizMaster/literature.jpg" },
        { name: "Movies", image: "QuizMaster/movies.jpg" },
        { name: "Sports", image: "QuizMaster/sports.jpg" },
        { name: "Music", image: "QuizMaster/music.jpg" },
        { name: "Technology", image: "QuizMaster/technology.jpg" },
        { name: "Art", image: "QuizMaster/art.jpg" },
        {
          name: "General",
          image: "QuizMaster/general-knowledge.jpg",
        },
        { name: "Random", image: "QuizMaster/random.jpg" },
      ];
    },
  },
  methods: {
    ...mapActions("quizMaster", [
      "setCategory",
      "setNumQuestions",
      "startQuiz",
    ]),
    selectCategory(categoryName) {
      this.setCategory(categoryName);
    },
    startQuiz() {
      this.setNumQuestions(this.numQuestions);
      if (this.selectedCategory) {
        this.$router.push({ name: "QuizMasterSettings" });
      } else {
        alert("Please select a category to proceed.");
      }
    },
  },
};
</script>

<style scoped>
.quiz-categories {
  text-align: center;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.category-name {
  margin-top: 8px;
  font-size: 1.2em;
}

.settings-container {
  margin-top: 20px;
}

.action-buttons {
  margin-top: 20px;
}

@media (max-width: 540px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 360px) {
  .card-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
