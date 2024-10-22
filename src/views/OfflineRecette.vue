<template>
 
  <div>
    <RecetteFiltrer />
    <RecetteCard />
    <RecetteSuggestion />
  </div>

  <div>
    <h1>Mode Hors-ligne</h1>
    <p>Vous êtes actuellement hors-ligne.</p>
  </div>
</template>

<script>
import RecetteCard from '@/components/RecetteCard.vue';
import RecetteFiltrer from '@/components/RecetteFiltrer.vue';
import RecetteSuggestion from '@/components/RecetteSuggestion.vue';

export default {
  components: {
    RecetteCard,
    RecetteFiltrer,
    RecetteSuggestion
  }
  
}
</script>

<style scoped>
/* Styles spécifiques pour la page hors-ligne */
</style>
