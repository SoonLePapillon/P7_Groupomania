<template>
  <div class="container">
    <h1>Nouvau post</h1>
    <div class="createPost">
      <textarea
        class="createPost__textArea"
        placeholder="Exprimez-vous !"
        v-model="textPost"
      ></textarea>
    </div>
    <div class="image-send">
      <div class="imageInfo">
        <div class="previewImg">
          <label for="image-input" id="custom-label" ref="label">+</label>
          <input
            ref="input"
            id="image-input"
            type="file"
            accept="image/png, image/jpg, image/jpeg"
            @change="showUploadedImg"
          />
          <button @click="deleteImg" class="delete-img" v-if="isFileHere">
            X
          </button>
        </div>
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
import { ref, computed } from 'vue';
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
const isFileHere = ref(false);

const deleteImg = () => {
  input.value.value = null;
  label.value.style.backgroundImage = '';
  isFileHere.value = false;
  label.value.innerText = '+';
};

const showUploadedImg = (event) => {
  isFileHere.value = true;
  const image = URL.createObjectURL(event.target.files[0]);
  label.value.style.backgroundImage = `url(${image})`;
  label.value.innerText = '';
};

const test = async () => {
  if (textPost.value || input.value.value !== '') {
    const dataToken = token;
    const formData = new FormData();
    formData.append('content', textPost.value);
    formData.append('imageUrl', input.value.files[0]);
    const result = await postStore.createOne(formData, dataToken);
    console.log(result);
    window.location.reload();
  } else {
    console.log(token);
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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
    height: 100%;
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
    width: 100px;
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
  .previewImg {
    position: relative;
  }
  p {
    max-width: 400px;
    margin-left: 15px;
    font-size: 14px;
  }
}

.delete-img {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 25px;
  height: 25px;
  background-color: rgba(255, 0, 0, 0.63);
  border: 1px solid rgba(255, 255, 255, 0.103);
  color: white;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
}

@media all and (min-width: 700px) {
  #custom-label {
    width: 130px !important;
    height: 110px !important;
  }
}
</style>
