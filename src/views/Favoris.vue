<template>
  <div>
    <h1>Mes Recettes Favoris</h1>
    <RecetteCard v-for="recette in favoris" :key="recette.id" :recette="recette" />
  </div>
  <!-- Conteneur pour l'image et le texte -->
  <div class="text-image-container">
      <!-- Image placée à gauche -->
      <div class="image-content"></div>
    <img class="image" src="https://files.meilleurduchef.com/mdc/photo/recette/tajine-agneau/tajine-agneau-1200.jpg" alt="Recette-ageneau">
    </div>
    <!-- Texte placé à droite -->
  <div> 
  <p>Ingrédients</p> <br>
        <p class="Liste">
          1,5 à 2 kg d'épaule d'agneau
          1,5 kg de pommes de terre à chair ferme (roseval)
          le jus de 2 citrons
          2 oignons
          2 gousses d'ail
          1 poignée de persil plat haché
          1 poignée de coriandre hachée
          1 pincée de pistils de safran pilés
          1 cuillère à café de gingembre en poudre
          1 cuillère à café de paprika
          1 cuillère à café de cumin moulu
          15 olives confites (violettes ou vertes)
          1 citron confit
          un peu d'huile d'olive
        </p> <br>
        <p>Étape de préparation </p> <br>
        <p class="Preparation">
          Demander au boucher de couper la viande en morceaux.
          Éplucher les pommes de terre, les couper en 4, les rincer et les laisser tremper dans une bassine d'eau.
          Dans une cocotte, mettre les morceaux de viande après les avoir rincés.
          Ajouter le gingembre, le safran, le piment, le cumin, les oignons râpés, l'ail écrasé et l'huile d'olive.
          Saler, couvrir d'eau et porter à ébullition.
          Laisser cuire à feu moyen et à couvert.
          Remuer de temps en temps et ajouter de l'eau si nécessaire.
          Une fois la viande cuite (on doit pouvoir la détacher facilement avec les doigts), la retirer de la cocotte et la réserver au chaud.
          Égoutter les pommes de terre puis les plonger dans la cocotte, ajouter de l'eau à la sauce pour les recouvrir et laisser cuire à couvert environ 15 min.
          En fin de cuisson, ajouter la coriandre et le persil hachés, les olives confites et le citron confit coupé en lamelles.
          Remettre la viande délicatement dans la marmitte, sans écraser les pommes de terre, et retirer du feu.
          Juste avant de servir, ajouter le jus de citron.
          Servir dans un plat à tagine en dressant d'abord la viande que l'on recouvrira ensuite des légumes.
          Décorer avec des olives et des lamelles de citron confit prélevées de la sauce.
          Verser la sauce par-dessus.
        </p>
      </div>

  <div class="avis-container">
    <!-- Exemple d'un avis -->
    <div class="avis">
      <div class="etoiles">
        <!-- Affichage des étoiles -->
        <span class="star" v-for="n in 5" :key="n">★</span>
        <!-- Note de l'utilisateur (exemple de 4 sur 5) -->
        <span class="note">(4/5)</span>
      </div>
      <p class="texte-avis">
        "Excellent plat, les saveurs étaient incroyables et la présentation parfaite ! Je recommanderais cette recette à tout le monde."
      </p>
      <p class="auteur-avis">- Géraud</p>
    </div>

    <!-- Ajouter plus d'avis si nécessaire -->
  </div>
</template>

<script>
import RecetteCard from '../components/RecetteCard.vue'

export default {
  name: 'Favoris',
  components: { RecetteCard },
  data() {
    return {
      favoris: [] // Les recettes favorites de l'utilisateur
    }
  }
}
</script>
<style scoped>
.image{
  height: 200px;
  width: 200px;
}
</style>