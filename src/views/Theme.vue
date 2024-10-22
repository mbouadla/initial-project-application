<template>
  <div>
    <h1>Thème</h1>
    <div>
      <label for="pays">Sélectionner un pays :</label>
      <select v-model="selectedCountry" id="pays">
        <option disabled value="">Choisir un pays</option>
        <option value="Algerie">Algérie</option>
        <option value="Maroc">Maroc</option>
        <option value="Tunisie">Tunisie</option>
      </select>
    </div>

    <div v-if="selectedCountry">
      <h2>Suggestions de {{ selectedCountry }}</h2>
      <label for="theme">Choisir un thème :</label>
      <select v-model="selectedTheme" id="theme">
        <option disabled value="">Choisir un thème</option>
        <option value="Entrée">Entrée</option>
        <option value="Plat">Plat</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>

    <div v-if="selectedTheme">
      <p>Vous avez sélectionné : {{ selectedTheme }}</p>
      <!-- Ici tu peux ajouter un composant pour afficher les recettes filtrées -->
      <RecetteFiltrer :theme="selectedTheme" :country="selectedCountry" />
    </div>
  </div>
</template>

<script>
import RecetteFiltrer from '@/components/RecetteFiltrer.vue';

export default {
  components: {
    RecetteFiltrer
  },
  data() {
    return {
      selectedCountry: '',
      selectedTheme: ''
    };
  }
};
</script>

<style scoped>
select {
  margin: 10px;
  padding: 5px;
  font-size: 16px;
}
</style>