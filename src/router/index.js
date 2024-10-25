import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Theme from '../views/Theme.vue'
import Categorie from '../views/Categorie.vue'
import Favoris from '../views/Favoris.vue'
import AjouterRecette from '../views/AjouterRecette.vue'
import Ingredient from '@/views/Ingredient.vue'
import Connexion from '../views/Connexion.vue'
import AboutView from '../views/AboutView.vue'
import Partage from '../views/Partage.vue'
import OfflineRecette from '../views/OfflineRecette.vue'
import Contact from '../views/Contact.vue'
import Recette from '../views/Recette.vue';
import Profil from '@/views/Profil.vue';
import { useUserStore } from '@/stores/userStore'



const routes = [
  { path: '/', component: HomeView  },
  { path: '/recherche', component: HomeView  },
  { path: '/Theme', component: Theme },
  { path: '/Categorie/:nom', component: Categorie },
  { path: '/Favoris', component: Favoris},
  { path: '/AjouterRecette', component: AjouterRecette },
  { path: '/Ingredient', component: Ingredient },
  { path: '/Connexion', name:'Connexion', component: Connexion },
  { path: '/A-propos', component: AboutView },
  { path: '/Partage', component: Partage },
  { path: '/Offline', component: OfflineRecette },
  { path: '/Contact', component: Contact },
  { path: '/Recette/:recipeName', component: Recette, name: 'Recette', props:true },
  {path: '/profil', name: 'Profil', component: Profil, meta:{requiresAuth: true}}, //pour protéger la route ,

]

const router = createRouter({
  history: createWebHistory(),
  routes
});
// Avant chaque navigation
router.beforeEach((to, _from, next) => {
  const userStore = useUserStore();
  const isAuthenticated = userStore.isAuthenticated;

  // Vérifier si la route nécessite une authentification
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      // Rediriger vers la page de connexion si non authentifié
      next({ name: 'Connexion' });
    } else {
      next(); // Sinon, permettre l'accès
    }
  } else {
    next(); // Si pas besoin d'authentification, continuer
  }
});


export default router