<template>
  <div class="connect">
    <login-form></login-form>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.connect {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  color: $primary-red;
}

.img {
  width: 100%;
  height: 100px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
