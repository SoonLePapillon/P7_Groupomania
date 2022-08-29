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
        :title="'Créez votre post'"
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
        <footer class="onePost__rating">
          <div @click="updateLike(post.id)" class="like__btn" ref="likeBtn">
            ❤
          </div>
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
  </div>
  <!-- :show sert à basculer la propriété display d'un élément -->
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { usePostStore } from '../stores/index.js';
import { useLikeStore } from '../stores/index.js';
import PostModal from '../views/PostModalView.vue';
import ButtonFormComponent from '../components/ButtonFormComponent.vue';

const postStore = usePostStore();
const likeStore = useLikeStore();
const contentLS = JSON.parse(localStorage.getItem(`TokenUser`));
const userId = contentLS.userId;
const token = contentLS.token;
const username = contentLS.userName;
const userRole = contentLS.userRole;
let showCreateModal = ref(false);
let showModifyModal = ref(false);
const likeBtn = ref(null);
const postToModify = ref(null);
let isLiked = ref(false);

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

const deletePost = async (postId, token) => {
  await postStore.deleteOne(postId, token);
  getPosts();
};

const updateLike = async (postId) => {
  const data = {
    postId: postId,
    value: true,
  };
  if (isLiked.value === false) {
    likeBtn.value[0].classList.add('red');
    isLiked.value = true;
    await likeStore.likePost(data, token, data.postId);
  } else {
    likeBtn.value[0].classList.remove('red');
    isLiked.value = false;
    await likeStore.likePost(data, token, data.postId);
  }
};

onMounted(() => {
  getPosts();
});
</script>

<style lang="scss" scoped>
#news {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 7%;
  width: 100%;
  max-width: 1100px;
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.18);
  border-left: 1px solid rgba(0, 0, 0, 0.18);
  background-color: white;
  padding-bottom: 10px;
  // overflow-y: scroll;
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
        color: rgba(230, 54, 0, 0.95);
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

.like__btn {
  font-size: 25px;
  color: transparent;
  transition: 0.3s;
  background: rgba(133, 133, 133, 0.507);
  background-clip: text;
  -webkit-background-clip: text;
  &:hover {
    color: rgba(230, 54, 0, 0.95);
    transition: 0.3s;
    cursor: pointer;
  }
}

.red {
  color: rgba(230, 54, 0, 0.95);
}
</style>
