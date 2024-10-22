<template>
  <div class="recette-suggestion">
    <h2>Suggestions de recettes</h2>
    <div class="suggestions">
      <RecetteCard
        v-for="(recette, index) in suggestions"
        :key="index"
        :recette="recette"
      />
    </div>
  </div>
  <Search />
</template>

<script>
import RecetteCard from './RecetteCard.vue'; // Assurez-vous que ce chemin est correct

export default {
  name: 'RecetteSuggestion',
  components: {
    RecetteCard,
  },
  props: {
    suggestions: {
      type: Array,
      required: true,
      default: () => []
    }
  }
};
</script>

<style scoped>
.recette-suggestion {
  margin: 20px 0;
}
.suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
