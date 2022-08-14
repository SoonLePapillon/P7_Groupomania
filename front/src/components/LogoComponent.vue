<template>
  <div class="logo"><img src="../assets/logo.jpg" /></div>
</template>

<script setup></script>

<style lang="scss" scoped>
.logo {
  width: 95%;
  height: 10%;
  margin-top: 2%;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

@media all and (min-width: 768px) {
}
</style>
