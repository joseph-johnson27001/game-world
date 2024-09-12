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
          name: "Anagram Attack",
          icon: "🔤",
          link: "/anagram-attack",
        },
        {
          name: "Consonant Clash",
          icon: "✖️",
          link: "/consonant-clash",
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
          name: "Rhyme Time",
          icon: "🎶",
          link: "/rhyme-time",
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
          name: "Word Grid",
          icon: "🔠",
          link: "/word-grid",
        },
        {
          name: "Word Scramble",
          icon: "🧩",
          link: "/word-scramble/categories",
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
  color: #333;
}

.game-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
