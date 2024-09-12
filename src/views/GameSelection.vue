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
          bgColor: "#e6e6fa",
        },
        {
          name: "Consonant Clash",
          icon: "✖️",
          link: "/consonant-clash",
          bgColor: "#fbc8ab",
        },
        {
          name: "Letter Blitz",
          icon: "⚡",
          link: "/letter-blitz",
          bgColor: "#d3f9d8",
        },
        {
          name: "Quiz Quest",
          icon: "❓",
          link: "/quiz-quest",
          bgColor: "#fefcbf",
        },
        {
          name: "Rhyme Time",
          icon: "🎶",
          link: "/rhyme-time",
          bgColor: "#d0f0c0",
        },
        {
          name: "Synonym Search",
          icon: "🔍",
          link: "/synonym-search",
          bgColor: "#ffe5d9",
        },
        {
          name: "Vowel Vault",
          icon: "🅰️",
          link: "/vowel-vault",
          bgColor: "#fbc8ab",
        },
        {
          name: "Word Grid",
          icon: "🔠",
          link: "/word-grid",
          bgColor: "#f9c5d1",
        },
        {
          name: "Word Scramble",
          icon: "🧩",
          link: "/word-scramble/categories",
          bgColor: "#aeeeee",
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
