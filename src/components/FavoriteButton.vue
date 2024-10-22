<template>
  <button @click="toggleFavorite">
    <i :class="{'fa': true, 'fa-heart': isFavorite, 'fa-heart-o': !isFavorite}"></i>
  </button>
</template>

<script>
export default {
  props: {
    recette: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isFavorite: false // Gestion de l'état local du favori
    };
  },
  methods: {
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
      this.$emit('favorite', this.recette, this.isFavorite); // Emet un événement avec l'état
    }
  }
};
</script>

<style scoped>
button {
  background: none;
  border: none;
  cursor: pointer;
}
.fa-heart {
  color: red;
}
.fa-heart-o {
  color: gray;
}
</style>
