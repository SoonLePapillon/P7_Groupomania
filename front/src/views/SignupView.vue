<template>
  <div class="signup">
    <h2 class="signup__title">Créez votre compte</h2>
    <form class="signup__form">
      <input type="text" placeholder="Nom*" class="input small" />
      <input type="text" placeholder="Prénom*" class="input small" />
      <input type="email" placeholder="Adresse mail*" class="input large" />
      <div>
        <input
          type="password"
          placeholder="Mot de passe*"
          class="input"
          id="password"
        />
        <fa icon="fa-solid fa-eye" class="eye" @click="showPassword" />
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
    <footer>
      <p class="info">Déjà inscrit ?</p>
      <router-link class="info red" to="/">Connectez-vous !</router-link>
    </footer>
  </div>
</template>

<script setup>
import ButtonFormComponent from '../components/ButtonFormComponent.vue';

function showPassword() {
  let input = document.getElementById('password');
  let eye = document.querySelector('.eye');
  if (input.type === 'password') {
    input.type = 'text';
    eye.style.color = 'rgba(218, 67, 67, 0.842)';
  } else {
    input.type = 'password';
    eye.style.color = 'rgba(218, 67, 67, 0.534)';
  }
}
</script>

<style lang="scss">
.signup {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  height: 80%;
  box-shadow: 5px 5px 20px #0000003d;
  border-radius: 16px;
  margin-top: 2%;
  &__title {
    width: 298px;
    height: 50px;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    margin-top: 3%;
    color: rgba(0, 0, 0, 0.76);
  }
  &__form {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 70%;
    column-gap: 2%;
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
      &:focus {
        outline: none;
        border: 2px solid $primary-red;
      }
    }
    & .small {
      width: 49%;
    }
    & .large {
      width: 100%;
    }
    & div {
      position: relative;
      width: 100%;
      height: 41px;
      border-radius: 5px;
      & input {
        width: 100% !important;
        height: 100% !important;
        border: 1px solid #00000085;
      }
      & .eye {
        position: absolute;
        width: 31px;
        height: 23px;
        bottom: 8px;
        right: 7px;
        color: rgba(218, 67, 67, 0.534);
        transition: 150ms;
        &:hover {
          transition: 150ms;
          cursor: pointer;
        }
      }
    }
    &__passwordInfo {
      margin-top: -10px;
      width: 100%;
      font-size: 12px;
      line-height: 14px;
    }
  }
}

footer {
  display: flex;
  width: max-content;
  justify-content: space-between;
  gap: 10px;
}
.info {
  flex: 1;
  max-width: max-content;
  height: min-content;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
}
.red {
  color: #d63535;
  text-decoration: none;
  &:hover {
    color: #ff0000;
    font-weight: bold;
    cursor: pointer;
  }
}

@media all and (min-width: 768px) {
}
</style>
