<template>
  <header v-if="showHeader" class="header">
    <div class="logo"><img src="../src/assets/logo.jpg" /></div>
    <nav>
      <router-link to="/" class="logout" @click="logout"
        >Déconnexion</router-link
      >
    </nav>
  </header>

  <RouterView />
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const route = useRouter();

/* Permet de vider le localstorage s'il contient un token utilisateur */
const logout = () => {
  window.localStorage.length > 0 ? window.localStorage.clear() : null;
};

/* Permet d'afficher le header uniquement si le nom de la route est 'News' */
const showHeader = computed(() => {
  return route.currentRoute.value.name === 'News';
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
@import './scss/_var.scss';

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
}

body {
  height: 100vh;
}

#app {
  @include column-align-center;
  @include width-height_max;
  box-shadow: inset 5px 0 200px rgba(0, 0, 0, 0.452);
}

.header {
  z-index: 99;
  display: flex;
  justify-content: space-between;
  height: 10%;
  max-height: 60px;
  width: 100%;
  background-color: white;
  box-shadow: 5px 0px 20px rgba(0, 0, 0, 0.178);
  .logo {
    height: 100%;
    max-width: 30%;
    margin-left: 2%;
    img {
      @include width-height_max;
      object-fit: contain;
    }
  }
}

.logout {
  @include justify-and-align-center;
  font-size: 15px;
  width: 125px;
  font-weight: bold;
  text-decoration: none;
  color: #fb4646;
  height: 100%;
  &:hover {
    box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.247);
  }
}
</style>
