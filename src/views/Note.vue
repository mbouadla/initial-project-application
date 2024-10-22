<template>
  <div>
    <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= note }">★</span>
  </div>
  
</template>

<script>
export default {
  name: 'Note',
  props: {
    note: Number
  }
}
</script>

<style scoped>
.star {
  color: lightgray;
}
.filled {
  color: gold;
}
</style>
