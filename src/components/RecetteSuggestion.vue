<template>
  <div class="recette-suggestion-container">
    <h2>Suggestions de Recettes</h2>
    <div v-for="recette in suggestions" :key="recette.id" class="recette-card">
  
    <img :src="recette.image" alt="Recette" width="150" height="150" />

      <h3>{{ recette.title }}</h3>
      <p>{{ recette.description }}</p>
      <button @click="addToFavorites(recette.id)">Ajouter aux Favoris</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecetteSuggestion',
  data() {
    return {
      suggestions: [] // Remplir avec les suggestions de recettes
    };
  },
  methods: {
    fetchSuggestions() {
      // Simuler une API ou récupérer des données de recettes suggérées
      this.suggestions = [
        { id: 1, title: 'Tajine d\'Agneau', image: '/images/tajine-agneau.jpg', description: 'Un délicieux tajine d\'agneau.' },
        { id: 2, title: 'Couscous Royal', image: '/photo/couscous-dz.jpg', description: 'Un classique de la cuisine maghrébine.' }
      ];
    },
    addToFavorites(id) {
      let favoris = JSON.parse(localStorage.getItem('favoris')) || [];

    // Vérifier si la recette est déjà dans les favoris
    if (!favoris.some(fav => fav.id === id)) {
      const recette = this.suggestions.find(r => r.id === id);
      favoris.push(recette); // Ajouter la recette aux favoris
      localStorage.setItem('favoris', JSON.stringify(favoris)); // Mettre à jour localStorage
      alert('Recette ajoutée aux favoris!');
    } else {
      alert('Cette recette est déjà dans vos favoris.');
    }
      // Logique pour ajouter la recette aux favoris
      this.$emit('addFavorite', id);
    }
  },
  created() {
    this.fetchSuggestions(); // Récupérer les suggestions de recettes lors de la création du composant
  }
};
</script>

<style scoped>
.recette-suggestion-container {
  margin-top: 20px;
}


.recette-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
}
</style>
