<template>
  <div>
    <h1>Contactez-nous</h1>
    <form @submit.prevent="envoyerMessage">
      <input v-model="nom" placeholder="Votre nom" />
      <input v-model="email" placeholder="Votre email" />
      <textarea v-model="message" placeholder="Votre message"></textarea>
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      nom: '',
      email: '',
      message: ''
    }
  },
  methods: {
    envoyerMessage() {
      // Logique pour envoyer un message
      alert('Message envoyé');
    }
  }
}
</script>
