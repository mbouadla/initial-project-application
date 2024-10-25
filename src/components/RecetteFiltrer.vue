<template>
  <div>
    <h3>Recettes de {{ country }} pour le thème : {{ theme }}</h3>
    <ul>
      <li v-for="recette in filteredRecettes" :key="recette.id">
        {{ recette.nom }}
      <img :src="recette.image" width="100px" height="100px"/>
      </li>
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
        { id: 1, nom: 'Chakchouka', pays: 'Algerie', type: 'Entrée',image: "/images/chakchouka-algerienne.jpg"   },
        { id: 1, nom: 'Bourek', pays: 'Algerie', type: 'Entrée', image: "/photo/Borek-à-la-viande.jpg" },
        { id: 1, nom: 'Salade mechouia', pays: 'Algerie', type: 'Entrée', image: "/photo/Salade mechouia.jpg" },
        { id: 1, nom: 'Briouates', pays: 'Maroc', type: 'Entrée', image: "/photo/briouates.jpg" },
        { id: 1, nom: 'Zaalouk', pays: 'Maroc', type: 'Entrée', image: "/photo/Zaalouk.jpg" },
        { id: 1, nom: 'Harira ', pays: 'Maroc', type: 'Entrée', image: "/photo/harira.jpg" },
        { id: 1, nom: 'Brick œuf', pays: 'Tunisie', type: 'Entrée', image: "/photo/brick-a-l-oeuf.jpg" },
        { id: 1, nom: 'Ojja', pays: 'Tunisie', type: 'Entrée', image: "/photo/ojja.jpg" },
        { id: 1, nom: 'Salade tunisienne', pays: 'Tunisie', type: 'Entrée', image: "/photo/salade-tunisienne.jpeg" },
        { id: 2, nom: 'Couscous', pays: 'Algerie', type: 'Plat', image: "/photo/couscous-dz.jpg" },
        { id: 2, nom: 'Chakhchoukha', pays: 'Algerie', type: 'Plat', image: "/photo/Chakhchoukha.jpg" },
        { id: 2, nom: 'Tajine zitoune', pays: 'Algerie', type: 'Plat', image: "/photo/tajine-zitoune-Par-FomaA-min-1.jpg" },
        { id: 2, nom: 'Tajine de poulet aux citrons confits et olives', pays: 'Maroc', type: 'Plat', image: "/photo/tajine-de-poulet-aux-citrons-confits-et-olives.jpg" },
        { id: 2, nom: 'Pastilla', pays: 'Maroc', type: 'Plat', image: "/photo/pastilla-au-poulet.png" },
        { id: 2, nom: 'Rfissa', pays: 'Maroc', type: 'Plat', image: "/photo/rfissa-au-poulet.jpeg" },
        { id: 2, nom: 'Couscous au poisson', pays: 'Tunisie', type: 'Plat', image: "/photo/Couscous-tunisien-a-la-daurade-photo-3.jpg" },
        { id: 2, nom: 'TLablabi', pays: 'Tunisie', type: 'Plat', image: "/photo/Tlablabi.jpg" },
        { id: 2, nom: 'Kamounia', pays: 'Tunisie', type: 'Plat', image: "/photo/Kamounia.jpg" },
        { id: 3, nom: 'Makrout ', pays: 'Algerie', type: 'Dessert', image: "/photo/makrout.jpg" },
        { id: 3, nom: 'Kalb el louz ', pays: 'Algerie', type: 'Dessert', image: "/photo/-kalb-el-louz.jpg" },
        { id: 3, nom: 'Tamina', pays: 'Algerie', type: 'Dessert',image: "/photo/tamina.jpg" },
        { id: 3, nom: 'Mhancha', pays: 'Maroc', type: 'Dessert', image: "/photo/mhancha-aux-amandes.jpg" },
        { id: 3, nom: 'Sellou', pays: 'Maroc', type: 'Dessert', image: "/photo/sellou-marocain.jpg" },
        { id: 3, nom: 'Chebakia', pays: 'Maroc', type: 'Dessert', image: "/photo/chebakia.jpg" },
        { id: 3, nom: 'Baklava', pays: 'Tunisie', type: 'Dessert', image: "/photo/baklava.jpg" },
        { id: 3, nom: 'Zrira', pays: 'Tunisie', type: 'Dessert', image: "/photo/Zrira.jpg" },
        { id: 3, nom: 'Assidat zgougou', pays: 'Tunisie', type: 'Dessert', image: "/photo/Assidat zgougou.jpg" },
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