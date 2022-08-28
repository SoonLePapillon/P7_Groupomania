<template>
  <p class="question">{{ question }}</p>
  <router-link class="response" :to="url">{{ response }}</router-link>
</template>

<script setup>
defineProps({
  question: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.question {
  flex: 1;
  max-width: max-content;
  height: min-content;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
}
.response {
  color: #d63535;
  text-decoration: none;
  &:hover {
    color: #ff0000;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>
