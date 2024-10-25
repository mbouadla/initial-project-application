<template>
  <div class="profil-container">
    <div v-if="user">
      <div class="profil-card">
        <img :src="user.photo || defaultPhoto" alt="Photo de profil" class="profil-photo" />
        <h1>{{ user.firstName }} {{ user.lastName }}</h1>
        <p>Email : {{ user.email }}</p>
        <label class="upload-label">
          <input type="file" @change="onFileChange" style="display: none;" />
          <button>Changer la photo</button>
        </label>
      </div>
    </div>
    <div v-else>
      <p>Chargement des informations utilisateur...</p>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/connexion'; // Assurez-vous d'importer correctement votre store
import { computed } from 'vue'; // Importation de computed pour les données dérivées

export default {
  name: 'Profil',
  setup() {
    const userStore = useUserStore();
    const user = computed(() => userStore.user || null); // Récupère l'utilisateur depuis le store

    return { user };
  },
  data() {
    return {
      defaultPhoto: 'https://example.com/path/to/default-photo.jpg', // Photo par défaut
    };
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      if (file) {
        const userStore = useUserStore();
        // Mettre à jour la photo de l'utilisateur dans le store
        userStore.user.photo = URL.createObjectURL(file);
        // Optionnel : envoyer la nouvelle image vers le serveur via une API
      }
    }
  }
};
</script>

<style scoped>
.profil-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.profil-card {
  text-align: center;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.profil-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

.upload-label button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.upload-label button:hover {
  background-color: #0056b3;
}
</style>
