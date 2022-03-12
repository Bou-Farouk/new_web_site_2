<template>
  <div class="header">
    <nav
      class="navbar navbar-expand-lg navbar-dark"
      style="background-color: #4268b3"
    >
      <div class="container">
        <img src="../assets/logo.png" alt="Insfp Logo" width="60" height="60" />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <router-link to="/" class="nav-link">Accueil</router-link>
            <router-link to="/Actu" class="nav-link">Actualite </router-link>
            <router-link to="/Apropos" class="nav-link">A propos</router-link>
            <router-link to="/Login" class="nav-link">Login</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "AppHeader",
};
</script>
<style scoped>
.nav-link {
  font-size: 20px;
}
.navbar-dark .navbar-nav .nav-link {
  color: #f15c00;
}
</style>
