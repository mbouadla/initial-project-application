<template>
  <input v-model="query" placeholder="Rechercher une recette..." />
</template>

<script>
export default {
  name: 'Searchbar',
  data() {
    return {
      query: ''
    }
  },
  watch: {
    query(newQuery) {
      this.$emit('search', newQuery) // Emet l'événement vers le parent
    }
  }
}
</script>
