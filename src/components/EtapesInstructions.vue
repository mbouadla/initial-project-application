<template>
  <div>
    <h3>Étapes de préparation</h3>
    <div v-for="(etape, index) in etapes" :key="index">
      <p>{{ index + 1 }}. {{ etape.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    etapes: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
p {
  margin-bottom: 10px;
}
</style>
