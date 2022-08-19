<template>
  <div class="container">
    <h1>Nouvelle publication</h1>
    <div class="createPost">
      <textarea
        class="createPost__textArea"
        placeholder="Exprimez-vous !"
        v-model="textPost"
      ></textarea>
    </div>
    <div class="image-send">
      <div class="imageInfo">
        <label for="image-input" id="custom-label" ref="label">+</label>
        <input
          ref="input"
          id="image-input"
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          @change="showUploadedImg"
        />
        <div>
          <p>
            <b> Cliquez pour insérer une image. </b>
            <br />
            Formats acceptés : png, jpg, jpeg.
          </p>
        </div>
      </div>
      <ButtonFormComponent text="Publier" @click="test"></ButtonFormComponent>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { usePostStore } from '../stores/index.js';
import ButtonFormComponent from '../components/ButtonFormComponent.vue';

const input = ref(null);
const label = ref(null);
const textPost = ref(null);
const postStore = usePostStore();
const contentLS = JSON.parse(localStorage.getItem(`TokenUser`));
const userId = contentLS.userId;
const userRole = contentLS.userRole;
const token = contentLS.token;

const showUploadedImg = (event) => {
  const img = URL.createObjectURL(event.target.files[0]);
  console.log(img);
  label.value.style.backgroundImage = `url(${img})`;
};

const test = async () => {
  if (textPost.value || input.value.value !== '') {
    console.log(textPost.value + ' ' + input.value.value);
    console.log('coucou');
    const dataToken = token;
    const dataPost = {
      content: textPost.value,
      imageUrl: input.value.value,
    };
    const result = await postStore.createOne(dataPost, dataToken);
    console.log(result);
  } else {
    console.log(token);
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 95%;
  max-width: 1000px;
  height: 75vh;
  margin-top: 50px;
  border-left: 1px solid rgba(0, 0, 0, 0.096);
  border-right: 1px solid rgba(0, 0, 0, 0.096);
  background-color: white;
  border-radius: 15px;
  & h1 {
    margin-top: 6%;
    color: rgba(0, 0, 0, 0.76);
    font-size: 30px;
  }
}
.createPost {
  border: 1px solid #b8b8b8;
  width: 90%;
  margin-top: 5%;
  max-width: 1000px;
  height: 30%;
  & textarea {
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
}
.image-send {
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0 20px 0;
  width: 90%;
  justify-content: center;
  align-items: center;
  .imageInfo {
    display: flex;
    flex: 1;
    min-width: 100%;
    margin-bottom: 50px;
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
    opacity: 0.8;
    left: 10px;
    color: rgba(255, 255, 255, 0.411);
    border-radius: 13px;
    background-color: rgba(72, 93, 105, 0.507);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: 0.1s;
    &:hover {
      opacity: 1;
      cursor: pointer;
      transition: 0.1s;
    }
  }
  p {
    max-width: 400px;
    margin-left: 15px;
    font-size: 14px;
  }
}
</style>
