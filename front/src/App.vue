<template>
  <logo-component></logo-component>
  <div v-if="showHeader">
    <router-link to="/">Login</router-link>
    <router-link to="/signup">Signup</router-link>
  </div>

  <RouterView />
</template>

<script setup>
import LogoComponent from './components/LogoComponent.vue';
// setup sert à passer à l'api composition (en gros)

import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const route = useRouter();

const showHeader = computed(() => {
  // Computed est une fonction qui return forcément
  return route.currentRoute.value.name === '';
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
}
</style>
