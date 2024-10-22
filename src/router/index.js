import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Search from '../views/Search.vue'
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


const routes = [
  { path: '/', component: HomeView },
  { path: '/recherche', component: Search },
  { path: '/Theme', component: Theme },
  { path: '/Categorie/:nom', component: Categorie },
  { path: '/Favoris', component: Favoris},
  { path: '/AjouterRecette', component: AjouterRecette },
  { path: '/Ingredient', component: Ingredient },
  { path: '/Connexion', component: Connexion },
  { path: '/A-propos', component: AboutView },
  { path: '/Partage', component: Partage },
  { path: '/Offline', component: OfflineRecette },
  { path: '/Contact', component: Contact },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router