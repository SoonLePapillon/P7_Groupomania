<template>
  <p class="question">{{ question }}</p>
  <p class="response">{{ response }}</p>
</template>

<script setup>
defineProps({
  question: {
    type: String,
    required: true,
  },
  response: {
    type,
  },
});
</script>

<style lang="scss" scoped></style>
