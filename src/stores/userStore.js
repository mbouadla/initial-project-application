import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    // Action de connexion
    login(userData) {
      // Remplace ceci par une vraie vérification des données (API, etc.)
      const validEmail = 'mohamed.bouadla@example.com'; // Email de test
      const validPassword = 'password123'; // Mot de passe de test

      // Vérification des informations de connexion
      if (userData.email === validEmail && userData.password === validPassword) {
        // Si les informations sont correctes, on met à jour l'état du store
        this.user = userData;
        this.isAuthenticated = true;
        return true; // Authentification réussie
      }

      // Si les informations ne sont pas correctes, on renvoie false
      return false; // Authentification échouée
    },

    // Action de déconnexion
    logout() {
      // Réinitialise l'état du store
      this.user = null;
      this.isAuthenticated = false;
    },
  },
});
