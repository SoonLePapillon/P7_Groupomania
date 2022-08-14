<template>
  <div class="signup">
    <h2 class="signup__title">Créez votre compte</h2>
    <form class="signup__form">
      <input type="text" placeholder="Nom*" class="input small" />
      <input type="text" placeholder="Prénom*" class="input small" />
      <input type="email" placeholder="Adresse mail*" class="input large" />
      <div>
        <input type="password" placeholder="Mot de passe*" class="input" />
        <fa icon="fa-solid fa-eye" class="eye" />
      </div>
      <input
        type="password"
        placeholder="Confirmez votre mot de passe*"
        class="input large"
      />
      <p class="signup__form__passwordInfo">
        Doit contenir une majuscule, un chiffre et un caractère spécial (8
        caractères minimum)
      </p>
      <button-form-component text="Envoyer"></button-form-component>
    </form>
    <p>Déjà inscrit ?</p>
    <p class="red">Connectez-vous !</p>
  </div>
</template>

<script setup>
import ButtonFormComponent from '../components/ButtonFormComponent.vue';
</script>

<style lang="scss">
.signup {
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
  &__form {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    width: 90%;
    justify-content: space-between;
    row-gap: 20px;
    & .input {
      height: 41px;
      background: #ffffff;
      mix-blend-mode: normal;
      border: 1px solid #00000085;
      border-radius: 5px;
      padding-left: 5px;
      input::placeholder {
        height: 30px;
        font-size: 16px;
      }
    }
    & .small {
      min-width: 150px;
      width: 49%;
    }
    & .large {
      min-width: 310px;
      width: 100%;
    }
    & div {
      position: relative;
      width: 100%;
      min-width: 310px;
      height: 41px;
      border: 1px solid #00000085;
      border-radius: 5px;
      & input {
        width: 100% !important;
        height: 100% !important;
        border: none !important;
      }
      & .eye {
        position: absolute;
        width: 31px;
        height: 23px;
        bottom: 7px;
        right: 7px;
        color: rgba(218, 67, 67, 0.534);
        transition: 150ms;
        &:hover {
          color: rgba(218, 67, 67, 0.842);
          transition: 150ms;
        }
      }
    }
    &__passwordInfo {
      margin-top: -10px;
      width: 310px;
      font-size: 12px;
      line-height: 14px;
    }
  }
}

form ~ p {
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 30px;
}
.red {
  color: #d63535;
  &:hover {
    color: #ff0000;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>
