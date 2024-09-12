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
          name: "Another Game",
          icon: "🎮",
          link: "/another-game/categories",
        },
      ],
    };
  },
};
</script>

<style scoped>
.game-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
