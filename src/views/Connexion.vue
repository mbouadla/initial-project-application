<template>
  <div class="authentification-container">
    <div class="authentification-form">
      <h1 class="form-title">Connexion</h1>
      <form @submit.prevent="login">
        <!-- Champ Email -->
        <div class="form-group">
          <label for="email" class="form-label">Email :</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="form-input"
            placeholder="Entrez votre email"
            required
          />
        </div>

        <!-- Champ Mot de passe -->
        <div class="form-group">
          <label for="password" class="form-label">Mot de passe :</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-input"
            placeholder="Entrez votre mot de passe"
            required
          />
        </div>

        <!-- Se souvenir de moi -->
        <div class="form-group remember-me">
          <label>
            <input type="checkbox" v-model="rememberMe" />
            <span>Se souvenir de moi</span>
          </label>
        </div>

        <!-- Bouton de soumission -->
        <button type="submit" class="btn-submit">Se connecter</button>
        <p v-if="loginError" class="error-message">{{ loginError }}</p>
      </form>
    </div>
  </div>
</template>

<script>

import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  setup() {
    const router = useRouter();

    const email = ref("algerinocity@live.fr");
    const password = ref('');
    const rememberMe = ref(false);
    const loginError = ref(null);

    // Fonction de connexion simulée
    const login = () => {
      console.log("Email:", email.value);
      console.log("Mot de passe:", password.value);
      
      
      // Simule une vérification d'authentification
      if (email.value === 'algerinocity@live.fr' && password.value === 'ton_mot_de_passe') {
        if (rememberMe.value) {
          localStorage.setItem('email', email.value);
        } else {
          localStorage.removeItem('email');
        }

        // Redirection vers la page profil
        router.push({ name: 'Profil' });
      } else {
        loginError.value = 'Email ou mot de passe incorrect';
      }
    };

    return { email, password, rememberMe, loginError, login };
  },
};
</script>

<style scoped>
.authentification-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.authentification-form {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.form-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
  display: block;
}

.form-input {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  border-color: #007bff;
  outline: none;
}

.remember-me {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.remember-me span {
  margin-left: 8px;
  font-size: 14px;
  color: #555;
}

.btn-submit {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 12px 0;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  text-align: center;
}
</style>
