<template>
  <div v-if="isLogin" class="hello">
    <h1>Citryyyyyyyyyyyy</h1>
  </div>
  <router-link to="/">Home</router-link>
  <router-link to="/signup">Signup</router-link>

  <RouterView />
</template>

<script setup>
// setup sert à passer à l'api composition (en gros)

import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const route = useRouter();

const isLogin = computed(() => {
  // Computed est une fonction qui return forcément
  return route.currentRoute.value.name === 'Signup';
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
}

body {
  font-family: 'Lato', sans-serif;
}
</style>
