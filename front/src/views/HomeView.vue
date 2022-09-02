<template>
  <header class="header">
    <div class="header__logo">
      <img src="../assets/logo.jpg" alt="logo Groupomania" />
    </div>
    <router-link to="/" @click="logout" class="header__logout"
      >Déconnexion</router-link
    >
  </header>
  <main class="news">
    <header class="news__header">
      <ButtonFormComponent
        class="show-modal"
        @click="showCreateModal = true"
        text="Nouveau post"
      ></ButtonFormComponent>
      <PostModal
        :show="showCreateModal"
        @close="closeCreateModal"
        :title="'Nouveau post'"
        :post="{}"
      >
      </PostModal>
    </header>
    <main class="allPosts">
      <div
        class="onePost"
        v-for="post of postStore.posts"
        :key="post.id"
        :id="post.id"
      >
        <header class="onePost__header">
          <h2>{{ post.user.firstName }} {{ post.user.lastName }}</h2>
          <div
            class="onePost__header__btn"
            v-if="userId === post.createdBy || isAdmin"
          >
            <fa icon="fa-solid fa-pen-to-square" @click="modifyPost(post.id)" />
            <fa
              icon="fa-solid fa-trash-can"
              @click="deletePost(post.id, token)"
            />
          </div>
        </header>
        <p class="onePost__text" v-show="post.content !== null">
          {{ post.content }}
        </p>
        <div class="onePost__image">
          <img :src="post.imageUrl" v-show="post.imageUrl !== null" />
        </div>
        <footer class="onePost__rating">
          <span>{{
            post.reactions.length === 0 ? '' : post.reactions.length
          }}</span>
          <span
            @click="updateLike(post.id)"
            ref="likeBtn"
            :class="{
              likeBtn: checkLikeState(post.id) === true,
              redLikeBtn: checkLikeState(post.id) === false,
            }"
          >
            ❤
          </span>
        </footer>
      </div>
    </main>
    <PostModal
      :show="showModifyModal"
      @close="showModifyModal = false"
      :title="'Modifier'"
      :post="postToModify"
    >
    </PostModal>
    <!-- :show sert à basculer la propriété display d'un élément -->
  </main>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { usePostStore, useLikeStore } from '../stores/index.js';
import PostModal from '../views/PostModalView.vue';
import ButtonFormComponent from '../components/ButtonFormComponent.vue';

const postStore = usePostStore();
const likeStore = useLikeStore();
const locStr = JSON.parse(localStorage.getItem(`TokenUser`));
const userId = locStr.userId;
const token = locStr.token;
const isAdmin = locStr.isAdmin;
const likeBtn = ref(null);
const postToModify = ref(null);
const username = ref(null);
let showCreateModal = ref(false);
let showModifyModal = ref(false);

const modifyPost = async (id) => {
  postToModify.value = postStore.posts.find((post) => post.id === id);
  showModifyModal.value = true;
  await nextTick();
};

/* Affichage des posts de façon antéchronologique */
const getPosts = async () => {
  await postStore.getAll();
};

/* Ferme la modale et met à jour l'affichage de tous les pots */
const closeCreateModal = async () => {
  showCreateModal.value = false;
  await nextTick(); // Attend le prochain cycle de màj Vue (50 ms environ)
  getPosts();
};

/* Permet de supprimer un post et de mettre à jour l'affichage */
const deletePost = async (postId, token) => {
  await postStore.deleteOne(postId, token);
  getPosts();
};

/* Permet de vérifier l'état du like (exploiter dans le changement de style de l'icone like) */
const checkLikeState = (postId) => {
  const thisPost = postStore.posts.find((post) => post.id === postId);
  const postReactions = thisPost.reactions;
  const doesUserLike = postReactions.find((react) => react.userId === userId);
  if (doesUserLike === undefined) {
    return true;
  } else {
    return false;
  }
};

/* Met à jour le like d'un post et l'affichage des posts */
const updateLike = async (postId) => {
  const thisPost = postStore.posts.find((post) => post.id === postId);
  const postReactions = thisPost.reactions;
  const doesUserLike = postReactions.find((react) => react.userId === userId);
  if (doesUserLike === undefined) {
    await likeStore.likePost(token, postId);
    getPosts();
    return true;
  } else {
    await likeStore.likePost(token, postId);
    getPosts();
    return false;
  }
};

/* Au chargement de la page */
onMounted(() => {
  getPosts();
});
</script>

<style lang="scss" scoped>
.header {
  z-index: 99;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 6%;
  background-color: white;
  box-shadow: 5px 0px 20px rgba(0, 0, 0, 0.178);
  &__logo {
    height: 100%;
    max-width: 50%;
    margin-left: 2%;
    & > img {
      max-width: 100%;
      height: 100%;
    }
  }
  &__logout {
    @include justify-and-align-center;
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
    color: #fb4646;
    height: 100%;
    padding: 10px;
    &:hover {
      box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.247);
    }
  }
}

.news {
  @include column-align-center;
  @include width-height_max;
  row-gap: 7%;
  max-width: 1100px;
  border-right: 1px solid rgba(0, 0, 0, 0.18);
  border-left: 1px solid rgba(0, 0, 0, 0.18);
  background-color: white;
  overflow-y: scroll;
  padding-top: 30px;
  &__header {
    height: 50px;
  }
}

.allPosts {
  @include column-align-center;
  width: 100%;
  gap: 30px;
  padding-bottom: 20px;

  & p {
    color: black;
  }
  & img {
    width: 200px;
    height: 200px;
  }
}

.onePost {
  @include column-align-center;
  gap: 5px;
  width: 95%;
  max-width: 700px;
  border-radius: 10px;
  padding: 2%;
  box-shadow: 5px 0px 20px rgba(0, 0, 0, 0.2);
  &__header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    &__btn {
      @include justify-and-align_center;
      gap: 5px;
      & > * {
        font-size: 18px;
        color: rgba(230, 54, 0, 0.95);
        &:hover {
          cursor: pointer;
          transform: scale(1.05);
        }
      }
    }
  }
  &__text {
    width: 100%;
    overflow-wrap: break-word;
  }
  &__image {
    width: 100%;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__rating {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 3px;
    width: 100%;

    .likeBtn {
      font-size: 25px;
      color: transparent;
      transition: 0.3s;
      background: rgba(133, 133, 133, 0.507);
      background-clip: text;
      -webkit-background-clip: text;
      &:hover {
        transition: 0.3s;
        cursor: pointer;
      }
    }

    .redLikeBtn {
      font-size: 25px;
      color: transparent;
      transition: 0.3s;
      background: rgba(133, 133, 133, 0.507);
      background-clip: text;
      -webkit-background-clip: text;
      color: rgba(230, 54, 0, 0.95);
      &:hover {
        transition: 0.3s;
        cursor: pointer;
      }
    }
  }
}
/* SCROLLBAR */

::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background: rgba(255, 41, 3, 0.863);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 38, 0);
}
</style>
