<template>
  <div id="app">
    
    <!-- Header avec navigation principale -->
    <header>
      <RouterLink to="/"> Saveurs Maghrébine </RouterLink>
      <nav>
        <ul>
          <li><router-link to="/Theme">Thème</router-link></li>
          <li><router-link to="/Recherche">Recherche</router-link></li>
          <li><router-link to="/Ingredient">Ingrédient</router-link></li>
          <li><router-link to="/Favoris">Favoris</router-link></li>
          <li><router-link to="/AjouterRecette">Ajouter Recette</router-link></li>
          <li><router-link to="/Offline">Hors Connexion</router-link></li>
          <li><router-link to="/Connexion">Connexion</router-link></li>
        </ul>
      </nav>
    </header>
    <!-- Vue actuelle affichée par le routeur -->
    <RouterView />

    <!-- Footer avec liens réseaux sociaux et navigation -->
    <footer>
      <div class="footer-content">
        <nav>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/partage">Partage</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </nav>
        <div>
          <p> Saveurs Maghrébine 2024 </p>
        </div>
        <div class="social-links">
          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://www.twitter.com">Twitter</a>
          <a href="https://www.instagram.com">Instagram</a>
        </div>
      </div>
    </footer>
  </div>
  
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
  components: {
    RouterLink,
    RouterView
  }
};
</script>

<style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}

header {
  background: linear-gradient(to right, #6a11cb, #2575fc);
  padding: 10px;
  color: white;
}

header nav ul {
  list-style-type: none;
  padding: 0;
}

header nav ul li {
  display: inline;
  margin: 0 10px;
}

header a {
  color: white;
  text-decoration: none;
}

header a:hover {
  text-decoration: underline;
}

.search-bar {
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #3a9e75;
}

/* Footer Styles */
footer {
  background-color: #333;
  padding: 5px 0;
  color: white;
  text-align: center;
  font-size: 10px;
  height: auto;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer nav ul {
  list-style-type: none;
  padding: 0;
}

footer nav ul li {
  display: inline;
  margin: 0 10px;
}

footer a {
  color: white;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}

.social-links a {
  margin: 0 10px;
}

.social-links {
  display: flex;
  justify-content: center;
}

.avis-container {
  margin: 20px;
}

.avis {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
}

.etoiles {
  color: gold;
  font-size: 20px;
}

.etoiles .note {
  margin-left: 10px;
  font-size: 16px;
  color: #333;
}

.texte-avis {
  font-style: italic;
  margin: 10px 0;
  color: #555;
}

.auteur-avis {
  text-align: right;
  font-weight: bold;
  color: #42b983;
}
</style>
