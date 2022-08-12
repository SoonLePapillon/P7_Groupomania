<template>
    <HeaderCpnt msg="Test"/>
    <router-link to="/">Home</router-link>
    <router-link to="/signup">About</router-link>

    <RouterView/>
    
</template>

<script>

import HeaderCpnt from './components/MainHeader.vue';
import { RouterView } from 'vue-router';


export default {
  name: 'App',
  components: {
    HeaderCpnt,
    RouterView
  }
}


</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
@import "./scss/_var.scss";

*, ::after, ::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Lato', sans-serif;
}


</style>
