<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { usePostStore } from '../stores/index.js';
import PostModal from '../views/PostModalView.vue';
import ButtonFormComponent from '../components/ButtonFormComponent.vue';

const postStore = usePostStore();
const contentLS = JSON.parse(localStorage.getItem(`TokenUser`));
const userId = contentLS.userId;
const token = contentLS.token;
const username = contentLS.userName;
let showCreateModal = ref(false);
let showModifyModal = ref(false);
const postToModify = ref(null);

const modifyPost = async (id) => {
  postToModify.value = postStore.posts.find((post) => post.id === id);
  showModifyModal.value = true;
  await nextTick();
};
/* Fonction d'affichage des posts */
const getPosts = async () => {
  await postStore.getAll();
};

const closeCreateModal = async () => {
  showCreateModal.value = false;
  await nextTick(); // Attend le prochain cycle de màj Vue (50 ms environ)
  getPosts();
};

const deletePost = async (postId) => {
  await postStore.deleteOne(postId);
  getPosts();
};

onMounted(() => {
  getPosts();
});
</script>

<template>
  <div id="news">
    <header id="news__header">
      <ButtonFormComponent
        class="show-modal"
        @click="showCreateModal = true"
        text="Nouveau post"
      ></ButtonFormComponent>
      <PostModal
        :show="showCreateModal"
        @close="closeCreateModal"
        :title="'Créez votre poste'"
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
          <h2>{{ username }}</h2>
          <div
            class="onePost__header__btn"
            v-if="userId === post.createdBy || userRole"
          >
            <fa
              class="icon"
              icon="fa-solid fa-pen-to-square"
              @click="modifyPost(post.id)"
            />
            <fa
              class="icon"
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
        <footer class="onePost__rating"></footer>
      </div>
    </main>
    <PostModal
      :show="showModifyModal"
      @close="showModifyModal = false"
      :title="'Modifier'"
      :post="postToModify"
    >
    </PostModal>
  </div>
  <!-- :show sert à basculer la propriété display d'un élément -->
</template>

<style lang="scss" scoped>
#news {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 7%;
  width: 100%;
  max-width: 1100px;
  height: 100vh;
  border-right: 1px solid rgba(0, 0, 0, 0.18);
  border-left: 1px solid rgba(0, 0, 0, 0.18);
  background-color: white;
  overflow-y: scroll;
  &__header {
    margin-top: 45px;
  }
}

.allPosts {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
  width: 100%;
  height: 100%;
  gap: 30px;
  & p {
    color: black;
  }
  & img {
    width: 200px;
    height: 200px;
  }
}

.onePost {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  max-width: 700px;
  border-radius: 10px;
  box-shadow: 5px 0px 20px rgba(0, 0, 0, 0.2);
  &__header {
    display: flex;
    justify-content: space-between;
    width: 98%;
    margin-top: 5px;
    &__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      .icon {
        font-size: 18px;
        color: rgba(231, 54, 0, 0.959);
        &:hover {
          cursor: pointer;
          transform: scale(1.05);
        }
      }
    }
  }
  &__text {
    width: 98%;
    overflow-wrap: break-word;
  }
  &__image {
    width: 100%;
    max-height: 350px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

::-webkit-scrollbar {
  width: 15px;
}
::-webkit-scrollbar-thumb {
  background-color: #999;
  border: solid #fff;
}
::-webkit-scrollbar-thumb:hover {
  background: #777;
}
::-webkit-scrollbar-thumb:vertical {
  border-width: 6px 4px;
}
</style>
