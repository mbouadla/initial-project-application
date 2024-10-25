<template>
  <div>
    <h1>Rechercher une recette</h1>
    <IngredientListe @filter-selected="handleFilter" />
    <div v-if="results !== null">
      <p>{{ results.length }} résultats</p>
      <ul>
        <li v-for="(result, index) in results" :key="index">{{ result }}</li>
      </ul>
    </div>
  </div>
  
</template>

<script>
import IngredientListe from '../components/IngredientListe.vue'

export default {
  components: {
    IngredientListe,
  },
  data() {
    return {
      results: null, // Les résultats de la recherche
    }
  },
  methods: {
    handleFilter(filters) {
      // Simule les résultats en fonction des filtres
      this.results = this.filterRecipes(filters);
    },
    filterRecipes(filters) {
      // Exemple simple de filtrage (tu peux adapter cela à une recherche API ou autre)
      const recettes = ['Recette 1', 'Recette 2', 'Recette 3']; // Remplace par des données réelles
      return recettes.filter(recette => recette.includes(filters.ingredient));
    }
  }
}
</script>