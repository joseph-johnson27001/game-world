<template>
  <div class="game-selection">
    <h1>Select a Game</h1>
    <div class="game-list">
      <GameCard
        v-for="game in games"
        :key="game.name"
        :name="game.name"
        :icon="game.icon"
        :link="game.link"
      />
    </div>
  </div>
</template>

<script>
import GameCard from "@/components/GameCard.vue";

export default {
  components: {
    GameCard,
  },
  data() {
    return {
      games: [
        {
          name: "Word Scramble",
          icon: "🧩",
          link: "/word-scramble/categories",
        },
        {
          name: "Word Grid",
          icon: "🔠",
          link: "/word-grid",
        },
        {
          name: "Letter Blitz",
          icon: "⚡",
          link: "/letter-blitz",
        },
        {
          name: "Quiz Quest",
          icon: "❓",
          link: "/quiz-quest",
        },
        {
          name: "Anagram Attack",
          icon: "🔤",
          link: "/anagram-attack",
        },
        {
          name: "Synonym Search",
          icon: "🔍",
          link: "/synonym-search",
        },
        {
          name: "Vowel Vault",
          icon: "🅰️",
          link: "/vowel-vault",
        },
        {
          name: "Rhyme Time",
          icon: "🎶",
          link: "/rhyme-time",
        },
        {
          name: "Consonant Clash",
          icon: "✖️",
          link: "/consonant-clash",
        },
      ],
    };
  },
};
</script>

<style scoped>
.game-selection {
  min-height: 100vh;
  padding: 20px;
}

h1 {
  text-align: center;
  font-family: "Comic Sans MS", cursive, sans-serif;
  color: #333;
  margin-bottom: 20px;
}

.game-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center;
}

@media (max-width: 768px) {
  .game-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .game-list {
    grid-template-columns: 1fr;
  }
}
</style>
