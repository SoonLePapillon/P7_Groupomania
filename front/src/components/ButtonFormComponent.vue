<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
  },
});
</script>

<template>
  <div>
    <button :disabled="disabled">
      <span>{{ text }}</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  height: min-content !important;
}
button {
  width: 250px;
  height: 50px;
  background: #ff2a00f5;
  opacity: 0.9;
  box-shadow: 5px 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  border: none;
  & > span {
    font-weight: 700;
    font-size: 22px;
    text-align: center;
    color: #ffffff;
  }
  &:hover {
    background: #fd2d01;
    cursor: pointer;
    box-shadow: 5px 4px 7px rgba(0, 0, 0, 0.5);
  }
}
</style>
