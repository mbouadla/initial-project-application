<template>
  <div class="recette-card">
    <img :src="recette.image" alt="Image de la recette" />
    <h3>{{ recette.titre }}</h3>
    <p>{{ recette.description }}</p>
    <FavoriteButton :recette="recette" />
  </div>
</template>

<script>
import FavoriteButton from './FavoriteButton.vue';

export default {
  props: {
    recette: {
      type: Object,
      required: true
    }
  },
  components: {
    FavoriteButton
  }
};
</script>

<style scoped>
.recette-card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 20px;
}
.recette-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
