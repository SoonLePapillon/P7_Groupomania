<template>
    <HeaderCpnt msg="Welcome to Your Vue.js App"/>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
</template>

<script>

import HeaderCpnt from './components/HeaderCpnt.vue'


export default {
  name: 'App',
  components: {
    HeaderCpnt
}
}
</script>

<style>
*, ::after, ::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
