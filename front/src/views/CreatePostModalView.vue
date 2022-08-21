<template>
  <Transition name="modal">
    <div v-if="show" class="modal__layer">
      <div class="modal__container">
        <button class="modal-default-button" @click="$emit('close')">X</button>
        <CreatePostView></CreatePostView>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import CreatePostView from '../views/CreatePostView.vue';
const props = defineProps({
  show: Boolean,
});
</script>

<style lang="scss">
.modal__layer {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.267);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
}

.modal__container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 80%;
  max-width: 1000px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-default-button {
  position: absolute;
  text-align: center;
  top: 20px;
  right: 20px;
  color: white;
  background-color: rgba(255, 0, 0, 0.568);
  border: none;
  border-radius: 15px;
  font-size: 15px;
  font-weight: bold;
  width: 25px;
  height: 25px;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.527);
    background-color: rgba(255, 0, 0, 0.726);
    transition: 0.2s;
  }
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal__container,
.modal-leave-to .modal__container {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
}
</style>
