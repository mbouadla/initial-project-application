<template>
  <div>
    <h3>Recettes de {{ country }} pour le thème : {{ theme }}</h3>
    <ul>
      <li v-for="recette in filteredRecettes" :key="recette.id">{{ recette.nom }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['theme', 'country'],
  computed: {
    filteredRecettes() {
      // Ici, tu peux faire un filtrage en fonction du pays et du thème
      // Exemple basique : 
      const recettes = [
        { id: 1, nom: 'Chakchouka', pays: 'Algerie', type: 'Entrée' },
        { id: 1, nom: 'Bourek', pays: 'Algerie', type: 'Entrée' },
        { id: 1, nom: 'Salade mechouia', pays: 'Algerie', type: 'Entrée' },
        { id: 1, nom: 'Briouates', pays: 'Maroc', type: 'Entrée' },
        { id: 1, nom: 'Zaalouk', pays: 'Maroc', type: 'Entrée' },
        { id: 1, nom: 'Harira ', pays: 'Maroc', type: 'Entrée' },
        { id: 1, nom: 'Brick œuf', pays: 'Tunisie', type: 'Entrée' },
        { id: 1, nom: 'Ojja', pays: 'Tunisie', type: 'Entrée' },
        { id: 1, nom: 'Salade tunisienne', pays: 'Tunisie', type: 'Entrée' },
        { id: 2, nom: 'Couscous', pays: 'Algerie', type: 'Plat' },
        { id: 2, nom: 'Chakhchoukha', pays: 'Algerie', type: 'Plat' },
        { id: 2, nom: 'Tajine zitoune', pays: 'Algerie', type: 'Plat' },
        { id: 2, nom: 'Tajine de poulet aux citrons confits et olives', pays: 'Maroc', type: 'Plat' },
        { id: 2, nom: 'Pastilla', pays: 'Maroc', type: 'Plat' },
        { id: 2, nom: 'Rfissa', pays: 'Maroc', type: 'Plat' },
        { id: 2, nom: 'Couscous au poisson', pays: 'Tunisie', type: 'Plat' },
        { id: 2, nom: 'TLablabi', pays: 'Tunisie', type: 'Plat' },
        { id: 2, nom: 'Kamounia', pays: 'Tunisie', type: 'Plat' },
        { id: 3, nom: 'Makrout ', pays: 'Algerie', type: 'Dessert' },
        { id: 3, nom: 'Kalb el louz ', pays: 'Algerie', type: 'Dessert' },
        { id: 3, nom: 'Tamina', pays: 'Algerie', type: 'Dessert' },
        { id: 3, nom: 'Mhancha', pays: 'Maroc', type: 'Dessert' },
        { id: 3, nom: 'Sellou', pays: 'Maroc', type: 'Dessert' },
        { id: 3, nom: 'Chebakia', pays: 'Maroc', type: 'Dessert' },
        { id: 3, nom: 'Baklava', pays: 'Tunisie', type: 'Dessert' },
        { id: 3, nom: 'Zrira', pays: 'Tunisie', type: 'Dessert' },
        { id: 3, nom: 'Assidat zgougou', pays: 'Tunisie', type: 'Dessert' },
      ];

      return recettes.filter(recette => 
        recette.pays === this.country && recette.type === this.theme
      );
    }
  }
};
</script>

<style scoped>
h3 {
  margin-top: 20px;
}
</style>