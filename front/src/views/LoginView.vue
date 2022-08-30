<template>
  <logo-component></logo-component>
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
          ref="email"
          @input="testRegexp(email)"
        />
      </div>
      <div class="mot_de_passe">
        <label for="password">Mot de passe</label>
        <input
          :type="inputType"
          placeholder="Mot de passe*"
          name="password"
          id="password"
          ref="password"
          @input="testRegexp(password)"
        />
        <eye-component :type="inputType" :click="showPassword"></eye-component>
      </div>
      <p class="error" v-if="userNotFound">Utilisateur non trouvé.</p>
      <button-form-component
        text="Se connecter"
        id="submitButton"
        @click="submitUser"
        :disabled="isFormFilled"
      ></button-form-component>
    </form>
    <footer>
      <text-bottom-form-component
        question="Pas de compte ?"
        response="Inscrivez-vous !"
        url="/signup"
      ></text-bottom-form-component>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import router from '../router/index.js';
import { useUserStore, testRegexp } from '../stores/index.js';
import ButtonFormComponent from '../components/ButtonFormComponent.vue';
import LogoComponent from '../components/LogoComponent.vue';
import EyeComponent from '../components/EyeComponent.vue';
import TextBottomFormComponent from '../components/TextBottomFormComponent.vue';
const userStore = useUserStore();
const inputType = ref('password');
const email = ref('');
const password = ref('');
let userNotFound = ref(false);

const isFormFilled = computed(() => {
  return email.value !== '' || password.value !== '';
});

/* Eye icone qui permet de switch le type de l'input "Mot de passe" */
function showPassword() {
  inputType.value === 'password' // On vérifie si le type est password
    ? (inputType.value = 'text') // Si oui on le passe en texte
    : (inputType.value = 'password'); // Si non, on le laisse en password
}

/* Vérifie les champs, envoie les données de connexion et stock le token dans le LS */
const submitUser = async (e) => {
  e.preventDefault();
  // On vérie d'abord si les regExp sont correctes
  if (testRegexp(email.value) && testRegexp(password.value)) {
    const result = await userStore.login(
      email.value.value,
      password.value.value
    );
    if (Object.values(result).includes('Utilisateur non trouvé !')) {
      userNotFound.value = true;
    } else {
      if (localStorage !== null) {
        localStorage.clear();
      }
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
  }
};
</script>

<style lang="scss">
.login {
  @include justify-and-align_center;
  flex-wrap: wrap;
  width: 90%;
  max-width: 1000px;
  height: 80%;
  box-shadow: 5px 5px 20px #0000003d;
  border-radius: 16px;
  background-color: white;
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
    @include justify-and-align_center;
    flex-flow: row wrap;
    position: relative;
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
        border: 2px solid #fd2d01;
      }
    }
    & div {
      position: relative;
      width: 100%;
      border-radius: 5px;
    }
  }
}

.error {
  font-weight: bold;
  color: red;
  text-align: center;
}
.isOk {
  border: 2px solid green !important;
}

.isNotOk {
  border: 2px solid red !important;
}

footer {
  display: flex;
  width: max-content;
  justify-content: space-between;
  gap: 10px;
}
</style>
