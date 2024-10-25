<template>
  <!-- Formulaire de recherche -->
  <form @submit.prevent="searchRecipe" class="search-form">
    <div class="search-container">
      <input
        type="text"
        v-model="query"
        placeholder="Entrez le nom d'un plat"
        class="search-input"
      />
      <span v-if="loading" class="spinner"></span>
    </div>
    <button type="submit" class="search-btn">Rechercher</button>
  </form>

  <!-- Affichage des résultats -->
  <div class="results-container" v-if="meals.length > 0">
    <h2>Résultats :</h2>
    <ul>
      <li v-for="meal in meals" :key="meal.idMeal" class="meal-item">
        <a @click="getMealDetails(meal.idMeal)" href="javascript:void(0)" class="meal-link">
          <img :src="meal.strMealThumb" alt="Image du plat" width="50" class="meal-thumb">
          <strong>{{ meal.strMeal }}</strong>
        </a>
        <button v-if="!isFavorite(meal)" @click="addToFavorites(meal)" class="fav-btn">Ajouter aux favoris</button>
        <button v-else @click="removeFromFavorites(meal)" class="fav-btn remove-btn">Retirer des favoris</button>
      </li>
    </ul>
  </div>

  <p v-else-if="noResults" class="no-results">Aucune recette trouvée</p>
  <p v-if="loading" class="loading-message">Recherche en cours...</p>

  <!-- Composant Favoris -->
  <div v-if="!query && favorites.length > 0">
    <Favoris :favorites="favorites" @remove-favorite="removeFromFavorites" />
  </div>
</template>

<script>
import Favoris from './Favoris.vue';
import axios from 'axios';

export default {
  components: {
    Favoris,
  }, 
  
  data() {
    return {
      query: '',
      meals: [],
      mealDetails: null,
      favorites: [],
      loading: false,
      noResults: false,
      showFavorites: false,
    };
  },
  methods: {
    async searchRecipe() {
      if (!this.query) return;
      this.loading = true;
      this.noResults = false;
      this.meals = [];
      this.showFavorites = this.query === "";
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.query}`
        );
        if (response.data.meals) {
          this.meals = response.data.meals;
        } else {
          this.noResults = true;
        }
      } catch (error) {
        console.error('Erreur lors de la recherche des plats :', error);
      } finally {
        this.loading = false;
      }
    },
    async getMealDetails(idMeal) {
      this.loadingDetails = true;
      this.mealDetails = null;
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );
        if (response.data.meals) {
          this.mealDetails = response.data.meals[0];
        } else {
          alert("Impossible de récupérer les détails du plat.");
        }
      } catch (error) {
        console.error('Erreur lors de la récupération de la recette du plat :', error);
      } finally {
        this.loadingDetails = false;
      }
    },
    addToFavorites(meal) {
      if (!this.isFavorite(meal)) {
        this.favorites.push(meal);
      }
    },
    removeFromFavorites(meal) {
      this.favorites = this.favorites.filter(fav => fav.idMeal !== meal.idMeal);
    },
    isFavorite(meal) {
      return this.favorites.some(fav => fav.idMeal === meal.idMeal);
    },
  },
};
</script>

<style scoped>
.search-form {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-input {
  padding: 10px;
  font-size: 16px;
  width: 100%;
  max-width: 300px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-btn {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.search-btn:hover {
  background-color: #0056b3;
}

.results-container {
  margin-top: 20px;
}

.meal-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.meal-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
}

.meal-thumb {
  margin-right: 10px;
}

.fav-btn {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.remove-btn {
  background-color: #dc3545;
}

.no-results {
  color: red;
  text-align: center;
  margin-top: 20px;
}

.loading-message {
  text-align: center;
  margin-top: 20px;
}
</style>
