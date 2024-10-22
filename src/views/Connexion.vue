<template>
  <div>
    <h1>Connexion</h1>
    <form @submit.prevent="seConnecter">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Mot de passe" />
      <button type="submit">Se connecter</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Connexion',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    seConnecter() {
      // Logique de connexion
      alert('Connexion réussie');
    }
  }
}
</script>
