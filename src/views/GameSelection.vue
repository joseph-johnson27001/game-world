<template>
  <div class="game-selection">
    <div class="heading-container" style="justify-content: center">
      <h1>Game Selection</h1>
    </div>
    <div class="card-container">
      <div v-for="game in games" :key="game.name" class="game-item">
        <GameCard
          :name="game.name"
          :image="game.image"
          @navigate="navigateToGame"
        />
        <div class="game-name">{{ game.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import GameCard from "@/components/GameCard.vue";

export default {
  name: "GameSelection",
  components: {
    GameCard,
  },
  data() {
    return {
      games: [
        { name: "Connect Four", image: "/game-tile.JPG", route: "ConnectFour" },
        { name: "Hangman", image: "/crossword.JPG", route: "Hangman" },
        { name: "Minesweeper", image: "/crossword2.JPG", route: "Minesweeper" },
        { name: "Memory Match", image: "/game2.JPG", route: "MemoryMatch" },
        {
          name: "Puzzle Mania",
          image: "/crossword3.JPG",
          route: "PuzzleMania",
        },
        { name: "Quiz Show", image: "/crossword4.JPG", route: "QuizShow" },
        { name: "Sudoku", image: "/crossword5.JPG", route: "Sudoku" },
        { name: "Tic Tac Toe", image: "/tile2.JPG", route: "TicTacToe" },
        { name: "Word Search", image: "/word-search.JPG", route: "WordSearch" },
        {
          name: "Word Scramble",
          image: "/Reading.JPG",
          route: "WordScrambleCategories",
        },
        { name: "Zuma", image: "/stones.JPG", route: "Zuma" },
        { name: "Zen Sudoku", image: "/stones2.JPG", route: "ZenSudoku" },
      ],
    };
  },
  methods: {
    navigateToGame(gameName) {
      const game = this.games.find((game) => game.name === gameName);
      if (game) {
        this.$router.push({ name: game.route });
      } else {
        console.error(`No route found for game: ${gameName}`);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 3rem;
}

.game-selection {
  text-align: center;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.game-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-name {
  margin-top: 8px;
  font-size: 1.2em;
}

@media (max-width: 768px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
