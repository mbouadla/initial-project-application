<template>
  <div>
    <h1>Mes Recettes Favorites</h1>

    <div v-if="favoris.length > 0">
      <RecetteCard
        v-for="recette in favoris"
        :key="recette.id"
        :recette="recette"
        @removeFavorite="onRemoveFavorite"
      />
    </div>
    <div v-else>
      <p>Aucune recette favorite pour le moment.</p>
    </div>

    <!-- Affichage des détails de la première recette favorite -->
    <div class="text-image-container" v-if="favoris.length > 0">
      <div class="image-content">
        <img
          class="image"
          :src="favoris[0].image"
          :alt="favoris[0].title"
        />
      </div>

      <div class="text-content">
        <p><strong>Ingrédients</strong></p>
        <p class="Liste" v-html="favoris[0].ingredients.join('<br />')"></p>

        <p><strong>Étapes de préparation</strong></p>
        <p class="Preparation" v-html="favoris[0].steps.join('<br />')"></p>
      </div>
    </div>

    <div class="avis-container" v-if="favoris.length > 0">
      <div class="avis">
        <div class="etoiles">
          <span class="star" v-for="n in 5" :key="n">★</span>
          <span class="note">(4/5)</span>
        </div>
        <p class="texte-avis">
          "Excellent plat, les saveurs étaient incroyables et la présentation parfaite ! Je recommanderais cette recette à tout le monde."
        </p>
        <p class="auteur-avis">- Géraud</p>
      </div>
    </div>

    <RecetteSuggestion @addFavorite="addToFavorites" />
  </div>
</template>

<script>
import RecetteCard from '../components/RecetteCard.vue';
import RecetteSuggestion from '../components/RecetteSuggestion.vue';

export default {
  name: 'Favoris',
  components: { RecetteCard, RecetteSuggestion },
  data() {
    return {
      favoris: [
        {
          id: 1,
          title: "Tajine d'agneau",
          image: "/images/tajine-agneau.jpg",
          ingredients: [
            "1,5 à 2 kg d'épaule d'agneau",
            "1,5 kg de pommes de terre à chair ferme (roseval)",
            "Le jus de 2 citrons",
            "2 oignons",
            "2 gousses d'ail",
            "1 poignée de persil plat haché",
            "1 poignée de coriandre hachée",
            "1 pincée de pistils de safran pilés",
            "1 cuillère à café de gingembre en poudre",
            "1 cuillère à café de paprika",
            "1 cuillère à café de cumin moulu",
            "15 olives confites (violettes ou vertes)",
            "1 citron confit",
            "Un peu d'huile d'olive"
          ],
          steps: [
            "Demander au boucher de couper la viande en morceaux.",
            "Éplucher les pommes de terre, les couper en 4, les rincer et les laisser tremper dans une bassine d'eau.",
            "Dans une cocotte, mettre les morceaux de viande après les avoir rincés.",
            "Ajouter le gingembre, le safran, le piment, le cumin, les oignons râpés, l'ail écrasé et l'huile d'olive.",
            "Saler, couvrir d'eau et porter à ébullition.",
            "Laisser cuire à feu moyen et à couvert.",
            "Une fois la viande cuite, la retirer et réserver au chaud.",
            "Égoutter les pommes de terre puis les plonger dans la cocotte.",
            "En fin de cuisson, ajouter coriandre, olives confites et citron confit.",
            "Servir dans un plat à tajine avec la sauce par-dessus."
          ]
        },
        {
          id: 2,
          title: "Couscous Royal",
          image: "/images/couscous-royal.jpg",
          ingredients: [
            "500 g de semoule",
            "1,5 litre d'eau",
            "1 cuillère à soupe d'huile d'olive",
            "500 g de viande d'agneau",
            "500 g de poulet",
            "1 courgette",
            "1 carotte",
            "1 oignon",
            "Épices à couscous (cumin, coriandre)",
            "Sel et poivre"
          ],
          steps: [
            "Faire cuire la viande et l'oignon dans une grande casserole.",
            "Ajouter les légumes et les épices, puis couvrir d'eau.",
            "Laisser mijoter pendant environ 1 heure.",
            "Préparer la semoule selon les instructions.",
            "Servir la semoule avec la viande et les légumes par-dessus."
          ]
        }
      ]
    };
  },
  methods: {
    onRemoveFavorite(favoriId) {
      this.favoris = this.favoris.filter(recette => recette.id !== favoriId);
      localStorage.setItem('favoris', JSON.stringify(this.favoris));
    },
    addToFavorites(recette) {
      this.favoris.push(recette);
      localStorage.setItem('favoris', JSON.stringify(this.favoris));
    }
  }
};
</script>

<style scoped>
.image {
  height: 200px;
  width: 200px;
}

.text-image-container {
  display: flex;
  justify-content: flex-start; /* Alignement à gauche */
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px;
}

.text-content {
  flex-grow: 1;
  max-width: 600px;
}

.avis-container {
  margin-top: 30px;
}

.avis {
  border-top: 1px solid #ccc;
  padding-top: 10px;
}

.etoiles {
  color: gold;
  display: flex;
  align-items: center;
}

.note {
  margin-left: 5px;
}

.texte-avis {
  font-style: italic;
}

.auteur-avis {
  font-weight: bold;
  margin-top: 5px;
}
</style>
