<template>
  <div class="search-bar">
    <input v-model="query" type="text" placeholder="Rechercher une recette..." @keyup.enter="searchRecipe" />
    <button @click="searchRecipe">Rechercher</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "", // Saisie de l'utilisateur
    };
  },
  methods: {
    searchRecipe() {
      const trimmedQuery = this.query.trim();
      if (trimmedQuery !== "") {
        // Rediriger vers la page recette avec le nom de la recette
        this.$router.push({ name: 'Recette', params: { recipeName: trimmedQuery } });
      }
    },
  },
};
</script>

<style scoped>
.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

input {
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
