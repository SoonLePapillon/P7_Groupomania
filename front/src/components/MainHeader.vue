<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HeaderCpnt',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

img {
  width: 100%;
}

h1 {
  font-size: 3rem;
  color: $primary-red;
}
</style>
