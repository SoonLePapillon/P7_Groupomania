<template>
  <fa
    icon="fa-solid fa-eye"
    class="eye"
    v-bind:class="{
      'red-first': props.type === 'password',
      'red-snd': props.type === 'text',
    }"
    @click="props.click"
  />
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  click: {
    type: Function,
  },
});
</script>

<style lang="scss" scoped>
.eye {
  position: absolute;
  width: 31px;
  height: 23px;
  bottom: 8px;
  right: 7px;
  transition: 150ms;
  &:hover {
    transition: 150ms;
    cursor: pointer;
  }
}

.red-first {
  color: rgba(218, 67, 67, 0.534);
}
.red-snd {
  color: rgba(218, 67, 67, 0.999);
}
</style>
