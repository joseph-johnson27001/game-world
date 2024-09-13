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
        :borderColor="game.borderColor"
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
          borderColor: "#6a1b9a", // Related purple border color
        },
        {
          name: "Consonant Clash",
          icon: "✖️",
          link: "/consonant-clash",
          bgColor: "#ff4f4f",
          borderColor: "#c62828", // Related red border color
        },
        {
          name: "Letter Blitz",
          icon: "⚡",
          link: "/letter-blitz",
          bgColor: "#43a047",
          borderColor: "#388e3c", // Related green border color
        },
        {
          name: "Quiz Quest",
          icon: "❓",
          link: "/quiz-quest",
          bgColor: "#6495ed",
          borderColor: "#4169e1", // Related blue border color
        },
        {
          name: "Rhyme Time",
          icon: "🎶",
          link: "/rhyme-time",
          bgColor: "#ff7043",
          borderColor: "#e64a19", // Related orange border color
        },
        {
          name: "Synonym Search",
          icon: "🔍",
          link: "/synonym-search",
          bgColor: "#1e88e5",
          borderColor: "#1976d2", // Related blue border color
        },
        {
          name: "Vowel Vault",
          icon: "🅰️",
          link: "/vowel-vault",
          bgColor: "#2e8b57",
          borderColor: "#1b5e20", // Related green border color
        },
        {
          name: "Word Grid",
          icon: "🔠",
          link: "/word-grid",
          bgColor: "#3949ab",
          borderColor: "#303f9f", // Related blue border color
        },
        {
          name: "Word Scramble",
          icon: "🧩",
          link: "/word-scramble/categories",
          bgColor: "#e53935",
          borderColor: "#c62828", // Related red border color
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

@media (max-width: 680px) {
  .game-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 320px) {
  .game-list {
    grid-template-columns: 1fr;
  }
}
</style>
