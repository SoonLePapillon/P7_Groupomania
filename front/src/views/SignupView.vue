<template>
  <div class="signupForm">
    <h2 class="signupForm__title">Créez votre compte</h2>
    <div class="signupForm__inputs">
      <input type="text" class="test" placeholder="Nom*" />
      <input type="text" placeholder="Prénom*" />
      <input type="email" placeholder="Adresse mail*" class="large" />
      <input type="password" placeholder="Mot de passe*" class="large" />
      <input
        type="password"
        placeholder="Confirmez votre mot de passe*"
        class="large"
      />
      <p class="signupForm__inputs__passwordInfo">
        Doit contenir une majuscule, un chiffre et un caractère spécial (8
        caractères minimum)
      </p>
    </div>
    <button-form-component text="Envoyer"></button-form-component>
  </div>
</template>

<script setup>
import ButtonFormComponent from '../components/ButtonFormComponent.vue';
</script>

<style lang="scss">
.signupForm {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 90%;
  box-shadow: 5px 5px 20px #0000003d;
  border-radius: 16px;
  &__title {
    width: 298px;
    height: 50px;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    margin-top: 15%;
    color: rgba(0, 0, 0, 0.76);
  }
  &__inputs {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
    & > input {
      width: 150px;
      height: 41px;
      left: 194px;
      top: 267px;
      background: #ffffff;
      mix-blend-mode: normal;
      border: 1px solid #00000085;
      border-radius: 5px;
      padding-left: 5px;
      &::placeholder {
        height: 30px;
        font-size: 16px;
      }
    }
    .large {
      width: 310px;
    }
    &__passwordInfo {
      width: 310px;
      font-size: 12px;
      line-height: 14px;
    }
  }
}
</style>
