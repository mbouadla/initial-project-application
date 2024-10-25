<template>
  <div class="recette">
    <h1>{{ recipeName }}</h1>
    <!-- Affichez ici les détails de la recette -->
    <div v-if="recipe">
      <h2>{{ recipe.title }}</h2>
      <img src="/images/chakchouka-algerienne.jpg" alt="Image de la recette"  />
      <p>{{ recipe.description }}</p>
      <!-- Ajoutez plus d'informations comme les ingrédients, les étapes, etc. -->
      <ingredient-liste :ingredients="recipe.ingredients" />
      <etapes-instructions :instructions="recipe.instructions" />
    </div>
    <div v-else>
      <p>Chargement de la recette...</p>
    </div>
  </div>
  
</template>

<script>
import IngredientListe from '@/components/IngredientListe.vue';
import EtapesInstructions from '@/components/EtapesInstructions.vue'; // Importation du composant manquant

export default {
  components: {
    IngredientListe,
    EtapesInstructions, // Ajout du composant
  },
  props: ['recipeName'],
  data() {
    return {
      recipe: null, // Les détails de la recette seront stockés ici
    };
  },
  created() {
    this.fetchRecipe();
  },
  methods: {
    fetchRecipe() {
      // Simulez une requête pour obtenir les détails de la recette
      // Vous pouvez remplacer cela par une vraie requête API ou un appel à une base de données
      const mockRecipes = {
        Chakchouka: {
          title: 'Chakchouka',
          image: '/images/chakchouka.jpg',
          description: 'Un délicieux plat d\'origine nord-africaine à base de tomates, poivrons et œufs.',
          ingredients: ['Tomates', 'Poivrons', 'Oeufs', 'Oignons', 'Épices'],
          instructions: ['Faire revenir les oignons et les poivrons', 'Ajouter les tomates et cuire 10 minutes', 'Ajouter les œufs et cuire encore 5 minutes.']
        }
        // Ajoutez d'autres recettes ici
      };

      this.recipe = mockRecipes[this.recipeName] || null;
    }
  }
};

</script>

<style scoped>
.recette {
  max-width: 800px;
  margin: 0 auto;
}
img {
  width: 50%;
  height: 100%;
}
</style>
