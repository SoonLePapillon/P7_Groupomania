<template>
  <RouterView />
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const route = useRouter();

/* Deconnexion : vide le localstorage */
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
  justify-content: space-around;
  width: 100%;
  height: 100%;
  box-shadow: inset 5px 0 200px rgba(0, 0, 0, 0.452);
}
</style>
