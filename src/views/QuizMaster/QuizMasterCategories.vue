<template>
  <div class="quiz-categories">
    <div class="heading-container" style="justify-content: center">
      <h1>Select Category</h1>
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
          @selectCategory="selectCategoryAndStart(category.name)"
        />
        <div class="category-name">{{ category.name }}</div>
      </div>
    </div>

    <div class="settings-container">
      <h2>Select Number of Questions</h2>
      <div class="question-buttons">
        <button
          v-for="num in [15, 20, 30]"
          :key="num"
          @click="updateNumQuestions(num)"
          :class="['question-button', { selected: num === numQuestions }]"
        >
          {{ num }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import QuizCard from "@/components/QuizMaster/QuizCard.vue";

export default {
  name: "QuizMasterCategories",
  components: {
    QuizCard,
  },
  computed: {
    ...mapState("quizMaster", ["selectedCategory", "numQuestions"]),
    categories() {
      return [
        { name: "Science", image: "/QuizMaster/science.PNG" },
        { name: "History", image: "/QuizMaster/history.PNG" },
        { name: "Geography", image: "/QuizMaster/geography.PNG" },
        { name: "Maths", image: "/QuizMaster/maths.PNG" },
        { name: "Literature", image: "/QuizMaster/literature.PNG" },
        { name: "Movies", image: "/QuizMaster/movies.PNG" },
        { name: "Sports", image: "/QuizMaster/sports.PNG" },
        { name: "Music", image: "/QuizMaster/music.PNG" },
        { name: "Technology", image: "/QuizMaster/technology.PNG" },
        { name: "Art", image: "/QuizMaster/art.PNG" },
        { name: "General", image: "/QuizMaster/general-knowledge.PNG" },
        { name: "Random", image: "/QuizMaster/random.PNG" },
      ];
    },
  },
  methods: {
    ...mapActions("quizMaster", ["setCategory", "setNumQuestions"]),
    selectCategoryAndStart(categoryName) {
      this.setCategory(categoryName);
      this.$router.push({ name: "QuizMasterGame" });
    },
    updateNumQuestions(num) {
      this.setNumQuestions(num);
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

h2 {
  margin-bottom: 10px;
}

.question-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.question-button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.1s linear;
}

.question-button:hover {
  background-color: #0056b3;
}

.question-button:active {
  background-color: #004085;
}

.question-button.selected {
  background-color: #0056b3;
  border: 1px solid #ffd700;
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
