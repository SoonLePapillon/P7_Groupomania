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
  width: 100vw;
  height: 10%;
  & img {
    width: 30%;
    object-fit: cover;
  }
}

@media all and (max-width: 768px) {
  div > img {
    scale: 2;
  }
}
</style>
