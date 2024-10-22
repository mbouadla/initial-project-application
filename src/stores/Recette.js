import { defineStore } from 'pinia'
import AjouterRecette from '@/views/AjouterRecette.vue'
export const useRecetteStore = defineStore('Recette', {
  state:() => ({
   data:localStorage.getItem("Recettes") ? JSON.parse(localStorage.getItem("Recettes")) : []
  }),
  actions: {
    ajouterRecette: (recette) => { 
      console.log(recette)
    }
    
  },
  
  addrecette(recette) {
    const favoritesrecette = this.favorites; 
    const exists = favoritesrecette.some(fav => fav.id === recette.id); 

      if (!exists) {
        favoritesrecette.push(recette);  
        localStorage.setItem("favorites", JSON.stringify(favoritesrecette));  
      }
}

})