<template>
  <div class="grid-container">
    <form @submit.prevent="submitFilters">
      <div class="grid-item ingredients">
        <label>Par Ingrédient</label>
        <div>
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Amande" /> Amande 
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Raisins secs" /> Raisins secs
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Dattes" /> Dattes
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Figues" /> Figues
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Citrons confits" /> Citrons confits
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Huile d'olive" /> Huile d'olive
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Miel" /> Miel
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Eau de fleur d’oranger" /> Eau de fleur d’oranger
          <input type="checkbox" v-model="selectedFilters.ingredient" value="EPâte filo (ou ouarka)" /> EPâte filo (ou ouarka)
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Olives" /> Olives
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Semoule d’orge" /> Semoule d’orge d’oranger
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Semoule de blé" /> Semoule de blé
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Pois chiches" /> Pois chiches
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Lentilles" /> Lentilles
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Haricots secs (loubia)" /> Haricots secs (loubia)
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Farine de blé" /> Farine de blé
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Tomates" /> Tomates
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Courgettes" /> Courgettes
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Aubergines" /> Aubergines
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Carottes" /> Carottes
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Navets" /> Navets
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Oignons" /> Oignons
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Agneau" /> Agneau
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Poulet" /> Poulet
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Bœuf " /> Bœuf 
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Merguez" /> Merguez
          <input type="checkbox" v-model="selectedFilters.ingredient" value="Poissons " /> Poissons 
        </div>
      </div>

      <div class="grid-item type"> 
        <label>Par type de plat</label>
        <div>
          <input type="checkbox" v-model="selectedFilters.type" value="Entrée" /> Entrée
          <input type="checkbox" v-model="selectedFilters.type" value="Plat" /> Plat
          <input type="checkbox" v-model="selectedFilters.type" value="Dessert" /> Dessert
        </div>
      </div>

      <div class="grid-item difficulty"> 
        <label>Par difficulté</label>
        <div>
          <input type="checkbox" v-model="selectedFilters.difficulty" value="Facile" /> Facile
          <input type="checkbox" v-model="selectedFilters.difficulty" value="Intermédiaire" /> Intermédiaire
          <input type="checkbox" v-model="selectedFilters.difficulty" value="Confirmé" /> Confirmé
          <input type="checkbox" v-model="selectedFilters.difficulty" value="Expert" /> Expert
        </div>
      </div>

      <div class="grid-item cost"> 
        <label>Par coût</label>
        <div>
          <input type="checkbox" v-model="selectedFilters.cost" value="Bon marché" /> Bon marché
          <input type="checkbox" v-model="selectedFilters.cost" value="Abordable" /> Abordable
          <input type="checkbox" v-model="selectedFilters.cost" value="Un peu cher" /> Un peu cher
          <input type="checkbox" v-model="selectedFilters.cost" value="Cher" /> Cher
        </div>
      </div>

      <button type="submit">OK</button>
    </form>
  </div>
  
</template>

<script>

export default {
 

  data() {
    return {
      selectedFilters: {
        ingredient: [],
        type: [],
        difficulty: [],
        cost: []
      }
    }
  },
  methods: {
    submitFilters() {
      // Emet les filtres sélectionnés au parent
      this.$emit('filter-selected', this.selectedFilters);
    }
  }
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 colonnes : une pour la gauche, une pour la droite */
  grid-template-rows: auto auto; /* 2 lignes */
  gap: 20px; /* Espacement entre les éléments */
  padding: 20px;
}

.grid-item {
  border: 1px solid #ddd; /* Facultatif : pour ajouter des bordures */
  padding: 10px;
}

/* Positionnement spécifique pour chaque section */
.ingredient {
  grid-column: 1 / 2; /* Première colonne */
  grid-row: 1 / 2; /* Première ligne */
}

.type {
  grid-column: 2 / 3; /* Deuxième colonne */
  grid-row: 1 / 2; /* Première ligne */
}

.difficulty {
  grid-column: 1 / 2; /* Première colonne */
  grid-row: 2 / 3; /* Deuxième ligne */
}

.cost {
  grid-column: 2 / 3; /* Deuxième colonne */
  grid-row: 2 / 3; /* Deuxième ligne */
}

.submit-button {
  grid-column: 1 / 3; /* Occupe les deux colonnes */
  grid-row: 3 / 4; /* Troisième ligne, sous tous les filtres */
  text-align: center; /* Centrer le bouton */
}

</style>