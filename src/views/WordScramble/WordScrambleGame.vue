<template>
  <div class="game">
    <h1>Word Scramble - {{ currentCategory.name }}</h1>
    <div class="words-list">
      <div v-for="word in jumbledWords" :key="word" class="word-card">
        {{ word }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "WordScrambleGame",
  computed: {
    ...mapGetters("wordScramble", ["getCurrentCategory"]),
    currentCategory() {
      return this.getCurrentCategory;
    },
    jumbledWords() {
      if (this.currentCategory && this.currentCategory.words) {
        return this.currentCategory.words.map((word) => this.shuffleWord(word));
      }
      return [];
    },
  },
  methods: {
    shuffleWord(word) {
      return word
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
    },
  },
};
</script>
