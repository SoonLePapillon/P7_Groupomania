<template>
  <button>
    <span>{{ text }}</span>
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
button {
  width: 290px;
  height: 50px;
  background: $primary-red;
  opacity: 0.9;
  box-shadow: 5px 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  border: none;
  margin: 20px 0;
  & > span {
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: #ffffff;
  }
}
</style>
