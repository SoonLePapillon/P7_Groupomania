<template>
  <div class="login">
    <h2 class="login__title">Connexion</h2>
    <form class="login__form">
      <div class="login__form__email">
        <label for="email">Email</label>
        <input
          type="email"
          placeholder="Adresse mail*"
          name="email"
          id="email"
        />
      </div>
      <div class="mot_de_passe">
        <label for="password">Mot de passe</label>
        <input
          type="password"
          placeholder="Mot de passe*"
          name="password"
          id="password"
        />
        <fa icon="fa-solid fa-eye" class="eye" @click="showPassword" />
      </div>
      <button-form-component
        text="Se connecter"
        id="submitButton"
        @click="submitUser"
      ></button-form-component>
    </form>
    <footer>
      <p class="info">Pas de compte ?</p>
      <router-link class="info red" to="/signup">Inscrivez-vous !</router-link>
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

function submitUser() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
</script>

<style lang="scss">
.login {
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
    height: 60%;
    column-gap: 2%;
    & label {
      font-size: 20px;
    }
    & input {
      width: 100% !important;
      border: 1px solid #00000085;
      height: 41px;
      border-radius: 5px;
      padding-left: 5px;
      margin-top: 5px;
      input::placeholder {
        height: 30px;
        font-size: 16px;
      }
      &:focus {
        outline: none;
        border: 2px solid $primary-red;
      }
    }
    & div {
      position: relative;
      width: 100%;
      border-radius: 5px;
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
</style>
