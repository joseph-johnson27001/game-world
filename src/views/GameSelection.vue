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
        {
          name: "Breakout",
          image: "GameSelection/breakout-tile.JPG",
          route: "Breakout",
        },
        {
          name: "Code Word",
          image: "GameSelection/code-word-tile.JPG",
          route: "CodeWord",
        },

        {
          name: "Flag Finder",
          image: "GameSelection/flag-tile.JPG",
          route: "FlagFinder",
        },
        {
          name: "Letter Twist",
          image: "GameSelection/letter-twist-tile.JPG",
          route: "LetterTwist",
        },
        {
          name: "Memory Match",
          image: "GameSelection/memory-tile.JPG",
          route: "Memory Match",
        },

        {
          name: "Update",
          image: "GameSelection/crossword3.JPG",
          route: "PuzzleMania",
        },
        {
          name: "Quiz Master",
          image: "GameSelection/quiz-app-tile.JPG",
          route: "QuizMaster",
        },
        {
          name: "Sum It Up",
          image: "GameSelection/numbers-tile.JPG",
          route: "SumItUp",
        },
        {
          name: "Update",
          image: "GameSelection/tile2.JPG",
          route: "TicTacToe",
        },
        {
          name: "Update",
          image: "GameSelection/Reading.JPG",
          route: "WordSearch",
        },
        {
          name: "Word Scramble",
          image: "GameSelection/word-scramble-tile.JPG",
          route: "WordScrambleCategories",
        },

        { name: "Update", image: "GameSelection/stones.JPG", route: "Zuma" },
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

@media (max-width: 540px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 360px) {
  .card-container {
    grid-template-columns: repeat(2, 1fr);
    /* gap: 10px; */
  }
}
</style>
