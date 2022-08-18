<template>
  <div class="container">
    <h1>Nouvelle publication</h1>
    <div class="createPost">
      <textarea
        class="createPost__textArea"
        placeholder="Écrivez ici..."
        v-model="textPost"
      ></textarea>
      <div class="buttonDiv">
        <button @click="showBlop">Publier</button>
      </div>
      <div>
        <label for="image-input" id="custom-label" ref="label">+</label>
        <input
          ref="input"
          id="image-input"
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          @change="showUploadedImg"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const label = ref(null);

const showUploadedImg = (event) => {
  const img = URL.createObjectURL(event.target.files[0]);
  console.log(img);
  label.value.style.backgroundImage = `url(${img})`;
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  max-width: 1000px;
  height: 90vh;
  margin-top: 50px;
  border-left: 1px solid rgba(0, 0, 0, 0.096);
  border-right: 1px solid rgba(0, 0, 0, 0.096);
  background-color: white;
  border-radius: 15px;
  & h1 {
    margin-top: 6%;
    color: rgba(255, 0, 0, 0.842);
    font-size: 30px;
  }
}
.createPost {
  position: relative;
  border: 1px solid #b8b8b8;
  height: 30%;
  width: 90%;
  margin-top: 5%;
  max-width: 1000px;
  & textarea {
    position: relative;
    height: 80%;
    width: 100%;
    border: none;
    outline: none;
    padding: 10px 10px 0 10px;
    resize: none;
    &::placeholder {
      position: absolute;
      top: 10px;
      left: 10px;
    }
  }
  & .buttonDiv {
    height: 20%;
    & button {
      position: absolute;
      bottom: 15px;
      right: 10px;
      width: 110px;
      height: 30px;
      background: rgba(255, 43, 0, 0.82);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      border: none;
      color: white;
      font-size: 16px;
    }
  }
}

input[type='file'] {
  display: none;
}
#custom-label {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 55px;
  width: 130px;
  height: 100px;
  opacity: 0.9;
  left: 10px;
  margin: 15px 0 0 0;
  color: rgba(255, 255, 255, 0.411);
  border-radius: 13px;
  background-color: rgba(255, 8, 8, 0.795);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
}
</style>
