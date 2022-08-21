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
// setup sert à passer à l'api composition (en gros)

import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const route = useRouter();
const logoutBtn = ref(null);
const contentLS = JSON.parse(localStorage.getItem(`TokenUser`));

const logout = () => {
  window.localStorage.length > 0
    ? window.localStorage.clear()
    : console.log('Y A R frérot');
};

const showHeader = computed(() => {
  // Computed est une fonction qui return forcément
  return route.currentRoute.value.name === 'News';
});

// method c'est une fonction qui ne retourne pas de valeur, genre pour modifier tmtc

onMounted(() => {
  // onmounted = au chargement de la page
  console.log(route.currentRoute.value.name);
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
  height: 100%;
  @include flex_column;
  height: 100%;
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
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

.logout {
  display: flex;
  align-items: center;
  font-size: 15px;
  width: 125px;
  justify-content: center;
  font-weight: bold;
  text-decoration: none;
  color: #fb4646;
  height: 100%;
  &:hover {
    // border: 2px solid rgba(255, 0, 0, 0.603);
    box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.247);
  }
}
</style>
