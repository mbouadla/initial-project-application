<template>
  <div>
    <RecetteFiltrer />
    <RecetteCard :recette="recetteData" />
    <RecetteSuggestion />

    <div>
      <h1>Mode Hors-ligne</h1>
      <p>Vous êtes actuellement hors-ligne.</p>
    </div>
  </div>
</template>

<script>
import RecetteCard from '@/components/RecetteCard.vue';
import RecetteFiltrer from '@/components/RecetteFiltrer.vue';
import RecetteSuggestion from '@/components/RecetteSuggestion.vue'; // Ajout de l'importation de RecetteSuggestion

export default {
  components: {
    RecetteCard,
    RecetteFiltrer,
    RecetteSuggestion, // Enregistrement de RecetteSuggestion dans le composant
  },
  data() {
    return {
      recetteData: {
        nom: 'Chakchouka',
        description: [
          '4 tomates mûres',
          '2 poivrons (rouge et vert)',
          '1 oignon',
          '3 gousses d\'ail',
          '4 œufs',
          '1 cuillère à café de paprika',
          '1 cuillère à café de cumin',
          'Sel',
          'Poivre',
          'Huile d\'olive'
        ],
        image: '/images/chakchouka-algerienne.jpg' // Correction du chemin d'image (retirer l'espace)
        // autres propriétés
      }
    };
  },
}
</script>

<style scoped>
/* Styles spécifiques pour la page hors-ligne */
</style>
