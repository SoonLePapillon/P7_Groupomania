<template>
  <div class="container">
    <h1>Nouvelle publication</h1>
    <div class="createPost">
      <textarea
        class="createPost__textArea"
        placeholder="Écrivez ici..."
      ></textarea>
      <div class="buttonDiv">
        <button>Publier</button>
      </div>
      <div>
        <label for="file-upload" class="custom-file-upload"> + </label>
        <input id="file-upload" type="file" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 99%;
  max-width: 1100px;
  height: 90vh;
  margin-top: 20px;
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
  width: 101%;
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
.custom-file-upload {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 50px;
  width: 110px;
  height: 85px;
  left: 10px;
  background: rgba(255, 54, 54, 0.39);
  margin: 15px 0 0 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  &:hover {
    background: rgba(255, 54, 54, 0.521);
    cursor: pointer;
  }
}
</style>
