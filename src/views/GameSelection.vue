<template>
  <div class="game-selection">
    <h1>Select Game</h1>
    <div class="game-list">
      <GameCard
        v-for="game in games"
        :key="game.name"
        :name="game.name"
        :icon="game.icon"
        :link="game.link"
        :bgColor="game.bgColor"
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
          name: "Anagram Attack",
          icon: "🔤",
          link: "/anagram-attack",
          bgColor: "#8e24aa",
        },
        {
          name: "Consonant Clash",
          icon: "✖️",
          link: "/consonant-clash",
          bgColor: "#ff4f4f",
        },
        {
          name: "Letter Blitz",
          icon: "⚡",
          link: "/letter-blitz",
          bgColor: "#43a047",
        },
        {
          name: "Quiz Quest",
          icon: "❓",
          link: "/quiz-quest",
          bgColor: "#6495ed",
        },
        {
          name: "Rhyme Time",
          icon: "🎶",
          link: "/rhyme-time",
          bgColor: "#ff7043",
        },
        {
          name: "Synonym Search",
          icon: "🔍",
          link: "/synonym-search",
          bgColor: "#1e88e5",
        },
        {
          name: "Vowel Vault",
          icon: "🅰️",
          link: "/vowel-vault",
          bgColor: "#2e8b57",
        },
        {
          name: "Word Grid",
          icon: "🔠",
          link: "/word-grid",
          bgColor: "#3949ab",
        },
        {
          name: "Word Scramble",
          icon: "🧩",
          link: "/word-scramble/categories",

          bgColor: "#e53935",
        },
      ],
    };
  },
};
</script>

<style scoped>
.game-selection {
  padding: 20px;
}

.game-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
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
