<template>
  <logo-component></logo-component>
  <div class="signup">
    <h2 class="signup__title">Créez votre compte</h2>
    <form class="signup__form">
      <input
        type="text"
        placeholder="Nom*"
        class="input small"
        v-model="lastName"
        @change="test"
      />
      <input
        type="text"
        placeholder="Prénom*"
        class="input small"
        v-model="firstName"
      />
      <input
        type="email"
        placeholder="Adresse mail*"
        class="input large"
        v-model="email"
      />
      <div>
        <input
          :type="inputType"
          placeholder="Mot de passe*"
          name="password"
          id="password"
          v-model="password"
          class="input large"
        />
        <eye-component :type="inputType" :click="showPassword"></eye-component>
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
      <text-bottom-form-component
        question="Déjà inscrit ?"
        response="Connectez-vous !"
        url="/"
      ></text-bottom-form-component>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ButtonFormComponent from '../components/ButtonFormComponent.vue';
import LogoComponent from '../components/LogoComponent.vue';
import EyeComponent from '../components/EyeComponent.vue';
import TextBottomFormComponent from '../components/TextBottomFormComponent.vue';

const inputType = ref('password');
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');

function showPassword() {
  inputType.value === 'password' // On vérifie si le type est password.
    ? (inputType.value = 'text') // Si oui on le passe en texte
    : (inputType.value = 'password'); // Si non, on le laisse en password
}

const inputValidations = {
  firstName: {
    regex: /^[A-Za-zÀ-ü-' ]+$/,
    frenchName: 'Prénom',
  },
  lastName: {
    regex: /^[A-Za-zÀ-ü-' ]+$/,
    frenchName: 'Nom',
  },
  email: {
    regex: /.+\@.+\..+/,
    frenchName: 'Email',
  },
  password: {
    regex:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    frenchName: 'Password',
  },
};

function test() {
  for (let key in inputValidations) {
    console.log(key, inputValidations[key].regex);
  }
  // console.log(element + ' test ' + inputValidations[element].regex);
}

// function testInput(inputName) {
//   if (inputName.pattern.test(inputName.value) === true) {
//     return true;
//   } else {
//     return false;
//   }
// }

// testInput(lastName);
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
</style>
