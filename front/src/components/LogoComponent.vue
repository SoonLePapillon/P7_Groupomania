<template>
  <div class="logo"><img src="../assets/logo.jpg" /></div>
</template>

<script setup></script>

<style lang="scss" scoped>
.logo {
  width: 95%;
  height: 65px;
  margin-top: 10%;
  margin-bottom: 10%;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
