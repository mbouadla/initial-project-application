<template>
  <div>
    <h1>Bienvenue sur Saveurs du Monde</h1>
    <p>Découvrez les meilleures recettes du monde entier !</p>
    <RecetteCard v-for="recette in recettes" :key="recette.id" :recette="recette" />
  
    <br> <img class="float-left ..." src="https://files.meilleurduchef.com/mdc/photo/recette/tajine-agneau/tajine-agneau-1200.jpg">
    <p>Ingrédients</p>
    <p> - 1,5 à 2 kg d'épaule d'agneau
        - 1,5 kg de pommes de terre à chair ferme (roseval)
        - le jus de 2 citrons
        - 2 oignons
        - 2 gousses d'ail
        - 1 poignée de persil plat haché
        - 1 poignée de coriandre hachée
        - 1 pincée de pistils de safran pilés
        - 1 cuillère à café de gingembre en poudre
        - 1 cuillère à café de paprika
        - 1 cuillère à café de cumin moulu
        - 15 olives confites (violettes ou vertes)
        - 1 citron confit
        - un peu d'huile d'olive</p>
            
  </div>
  
</template>

<script>
import RecetteCard from '../components/RecetteCard.vue'

export default {
  name: 'Home',
  components: { RecetteCard },
  data() {
    return {
      recettes: [] // Les recettes à afficher sur la page d'accueil
    }
  }
}
</script>

<style scoped>
 .float-left{
  height: 200px;
  width: 200px;
}
</style>