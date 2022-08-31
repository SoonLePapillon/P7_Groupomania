<template>
  <div class="logo">
    <img
      src="../assets/icon-left-font-monochrome-black.png"
      alt="logo Groupomania"
    />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.logo {
  display: flex;
  justify-content: center;
  width: 70%;
  height: 10%;
  margin-top: 2%;
  & > img {
    min-width: 40%;
    height: 100%;
    object-fit: cover;
  }
}
@media all and (max-width: 768px) {
  div > img {
    scale: 2;
  }
}
</style>
