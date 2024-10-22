<template>
  <div class="partage">
    <h2>Partager une recette</h2>
    <form @submit.prevent="submitRecipe">
      <div>
        <label for="recipeName">Nom de la recette :</label>
        <input type="text" id="recipeName" v-model="recipeName" required />
      </div>
      <div>
        <label for="ingredients">Ingrédients :</label>
        <textarea id="ingredients" v-model="ingredients" required></textarea>
      </div>
      <div>
        <label for="instructions">Instructions :</label>
        <textarea id="instructions" v-model="instructions" required></textarea>
      </div>
      <div>
        <label for="imageUrl">URL de l'image :</label>
        <input type="url" id="imageUrl" v-model="imageUrl" />
      </div>
      <button type="submit">Partager</button>
    </form>
    <p v-if="successMessage">{{ successMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipeName: '',
      ingredients: '',
      instructions: '',
      imageUrl: '',
      successMessage: ''
    };
  },
  methods: {
    async submitRecipe() {
      const recipeData = {
        name: this.recipeName,
        ingredients: this.ingredients.split('\n'), // On sépare les ingrédients par ligne
        instructions: this.instructions,
        imageUrl: this.imageUrl
      };

      try {
        // Remplacez l'URL par celle de votre API
        const response = await fetch('http://localhost:5173/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(recipeData)
        });

        if (!response.ok) {
          throw new Error('Erreur lors du partage de la recette');
        }

        this.successMessage = 'Recette partagée avec succès !';
        // Réinitialiser le formulaire
        this.resetForm();
      } catch (error) {
        console.error('Erreur:', error);
        this.successMessage = 'Erreur lors du partage de la recette.';
      }
    },
    resetForm() {
      this.recipeName = '';
      this.ingredients = '';
      this.instructions = '';
      this.imageUrl = '';
    }
  }
};
</script>

<style scoped>
.partage {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h2 {
  text-align: center;
}

form div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="url"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}
</style>
