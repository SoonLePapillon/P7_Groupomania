<template>
  <logo-component></logo-component>
  <div class="signup">
    <h2 class="signup__title">Créez votre compte</h2>
    <form class="signup__form">
      <input
        name="firstName"
        type="text"
        placeholder="Prénom*"
        class="input small"
        @input="testRegexp(firstName)"
        ref="firstName"
      />
      <input
        name="lastName"
        type="text"
        placeholder="Nom*"
        class="input small"
        @input="testRegexp(lastName)"
        ref="lastName"
      />
      <input
        name="email"
        type="email"
        placeholder="Adresse mail*"
        class="input large"
        @input="testRegexp(email)"
        ref="email"
      />
      <div>
        <input
          id="password"
          name="password"
          :type="inputType"
          placeholder="Mot de passe*"
          class="input large"
          @input="
            testRegexp(password);
            checkPassword();
          "
          ref="password"
        />
        <eye-component :type="inputType" :click="showPassword"></eye-component>
        <p class="signup__form__passwordInfo">
          Doit contenir une majuscule, un chiffre et un caractère spécial (8
          caractères minimum)
        </p>
      </div>
      <div>
        <input
          id="passwordConfirm"
          name="password"
          type="password"
          placeholder="Confirmez votre mot de passe*"
          class="input large"
          @input="
            testRegexp(passwordConfirm);
            checkPassword();
          "
          ref="passwordConfirm"
        />
      </div>

      <div class="errorDiv">
        <p ref="errorMsg" class="signup__form__errorMessage"></p>
      </div>

      <button-form-component
        text="Envoyer"
        @click="validateForm"
      ></button-form-component>
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
import { useUserStore } from '../stores/index.js';
import router from '../router/index.js';
import ButtonFormComponent from '../components/ButtonFormComponent.vue';
import LogoComponent from '../components/LogoComponent.vue';
import EyeComponent from '../components/EyeComponent.vue';
import TextBottomFormComponent from '../components/TextBottomFormComponent.vue';

const userStore = useUserStore();
const inputType = ref('password');
const firstName = ref(null);
const lastName = ref(null);
const email = ref(null);
const password = ref(null);
const passwordConfirm = ref(null);
const errorMsg = ref(null);

function showPassword() {
  inputType.value === 'password' // On vérifie si le type est password.
    ? (inputType.value = 'text') // Si oui on le passe en texte
    : (inputType.value = 'password'); // Si non, on le laisse en password
}

const regExpList = {
  firstName: /^[A-Za-zÀ-ü-' ]+$/,
  lastName: /^[A-Za-zÀ-ü-' ]+$/,
  email: /.+\@.+\..+/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

const testRegexp = (el) => {
  for (let key in regExpList) {
    if (key === el.name) {
      const regex = regExpList[key];
      const test = regex.test(el.value);
      if (test) {
        if (el.classList.contains('isNotOk')) {
          el.classList.remove('isNotOk');
        }
        console.log(test);
        el.classList.add('isOk');
        return test;
      } else {
        console.log(test);
        el.classList.add('isNotOk');
        return test;
      }
    }
  }
};

const checkPassword = () => {
  if (passwordConfirm.value.value !== password.value.value) {
    errorMsg.value.innerText = 'Les mots de passe ne sont pas identiques.';
    return false;
  } else {
    errorMsg.value.innerText = '';
    return true;
  }
};

const validateForm = async (e) => {
  e.preventDefault();
  if (
    testRegexp(lastName.value) &&
    testRegexp(firstName.value) &&
    testRegexp(email.value) &&
    testRegexp(password.value) &&
    testRegexp(passwordConfirm.value) &&
    checkPassword()
  ) {
    const data = {
      email: email.value.value,
      password: password.value.value,
      firstName: firstName.value.value,
      lastName: lastName.value.value,
    };
    await userStore.signup(data);
    const result = await userStore.login(
      email.value.value,
      password.value.value
    );
    localStorage.setItem(
      'TokenUser',
      JSON.stringify({
        token: result.token,
        userId: result.userId,
        userRole: result.userRole,
        userName: result.userName,
      })
    );
    router.push('/news');
  }
};
</script>

<style lang="scss" scoped>
.signup {
  background-color: white;
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
    text-align: center;
    margin-top: 3%;
    color: rgba(0, 0, 0, 0.76);
  }
  &__form {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 80%;
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
      display: block;
      margin-top: 1%;
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
  margin-bottom: 15px;
}

.isOk {
  border: 2px solid green !important;
}

.isNotOk {
  border: 2px solid red !important;
}

.errorDiv {
  height: min-content !important;
  & p {
    text-align: center;
    color: $primary-red;
    font-weight: bold;
  }
}
</style>
