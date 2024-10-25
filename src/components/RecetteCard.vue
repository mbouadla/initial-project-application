<template>
  <div class="recette-card" v-if="recette">
   
    <h3>{{ recette.nom }}</h3>
    <img src="/images/chakchouka-algerienne.jpg" alt="recette.nom" width="150"  height="150"/>
    <ul>
      <li  v-for="ingredient in recette.description">
        {{ ingredient }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    recette: {
      type: Object,
      required: true, // S'assure que la prop est obligatoire
    },
  },
};
</script>

<style scoped>
.recette-card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 10px;
  text-align: center;
}
.recette-card img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}
</style>
