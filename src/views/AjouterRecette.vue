<template>
  <div>
    <h1>Ajouter une nouvelle recette</h1>
    <form @submit.prevent="ajouterNouvelleRecette">
      <!-- Titre de la recette -->
      <input v-model="nouvelleRecette.titre" placeholder="Titre de la recette" />

      <!-- Description de la recette -->
      <textarea v-model="nouvelleRecette.description" placeholder="Description de la recette"></textarea>

      <!-- Ingrédients de la recette -->
      <h3>Ingrédients</h3>
      <div v-for="(ingredient, index) in nouvelleRecette.ingredients" :key="index">
        {{ ingredient }}
        <button @click.prevent="supprimerIngredient(index)">Supprimer</button>
      </div>
      <button @click.prevent="ajouterIngredient">Ajouter un ingrédient</button>

      <!-- Étapes de la recette -->
      <h3>Étapes</h3>
      <div v-for="(etape, index) in nouvelleRecette.etapes" :key="index">
        <textarea v-model="etape.description" placeholder="Description de l'étape"></textarea>
        <button @click.prevent="supprimerEtape(index)">Supprimer</button>
      </div>
      <button @click.prevent="ajouterEtape">Ajouter une étape</button>

      <!-- Note de la recette -->
      <h3>Note de la recette</h3>
      <Note v-model="nouvelleRecette.note" />

      <!-- Bouton de soumission -->
      <button type="submit">Ajouter la recette</button>
    </form>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import { useRecetteStore } from '@/stores/Recette';
import Note from '../views/Note.vue';

const { ajouterRecette } = useRecetteStore();

  const nouvelleRecette = ref({
        titre: 'Tarte aux Fraises',
        description: 'La tarte aux fraises est un dessert classique composé: une pâte croustillante, généralement une pâte sablée, une crème pâtissière onctueuse et recouverte de fraises fraîches et juteuses. Parfois nappée de glaçage brillant, elle offre un équilibre parfait entre le croquant de la pâte, la douceur de la crème, et acidité naturelle des fraises. Ce dessert est idéal pour les occasions spéciales ou comme gourmandise estivale.',
        ingredients:["250 g de farine",
          "125 g de beurre froid",
           "70 g de sucre glace", 
           "1 jaune d'œuf", 
           "1 pincée de sel", 
           "3 à 4 cuillères à soupe d'eau froide"],
                      
      });

    const ajouterNouvelleRecette = () =>{
      // Récupération des données du formulaire
      
      ajouterRecette(nouvelleRecette);
      // Ici, tu peux soit envoyer ces données à une API ou les stocker dans un store Pinia
      console.log("Nouvelle recette ajoutée : ", nouvelleRecette);

    }

</script>

<style scoped>
form {
  max-width: 600px;
  margin: auto;
}
input, textarea {
  display: block;
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
</style>
