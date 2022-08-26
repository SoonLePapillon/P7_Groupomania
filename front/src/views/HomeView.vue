<template>
  <div class="news">
    <ButtonFormComponent
      class="show-modal"
      @click="showCreateModal = true"
      text="Nouveau post"
    ></ButtonFormComponent>
    <PostModal
      :show="showCreateModal"
      @close="closeCreateModal"
      :title="'Créez votre poste'"
      :content="null"
    >
    </PostModal>
    <section
      class="allPosts"
      v-for="post in allPosts"
      :key="post.id"
      :id="post.id"
    >
      <div class="onePost" :id="post.id">
        <h2>{{ username }}</h2>
        <p>{{ post.content }}</p>
        <img :src="post.imageUrl" v-show="post.imageUrl !== null" />
        <button
          v-if="userId === post.createdBy || userRole"
          @click="showModifyModal = true"
        >
          Modifier
        </button>
        <PostModal
          :show="showModifyModal"
          @close="
            showModifyModal = false;
            getPosts();
          "
          :title="'Modifier'"
          :content="post.content"
          :url="post.imageUrl"
        >
        </PostModal>
        <button
          v-if="userId === post.createdBy || userRole"
          @click="deletePost(post.id, token)"
        >
          Supprimer
        </button>
      </div>
    </section>
  </div>
  <!-- :show sert à basculer la propriété display d'un élément -->
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';
import { usePostStore } from '../stores/index.js';
import PostModal from '../views/PostModalView.vue';
import ButtonFormComponent from '../components/ButtonFormComponent.vue';

const allPosts = ref([]);
const postStore = usePostStore();
const contentLS = JSON.parse(localStorage.getItem(`TokenUser`));
const userId = contentLS.userId;
const token = contentLS.token;
const username = contentLS.userName;
let showCreateModal = ref(false);
let showModifyModal = ref(false);

/* Fonction d'affichage des posts */
const getPosts = async () => {
  await postStore.getAll();
  allPosts.value = postStore.posts;
};

const closeCreateModal = async () => {
  showCreateModal.value = false;
  await nextTick(); // Attend le prochain cycle de màj Vue (50 ms environ)
  getPosts();
};

const deletePost = async (postId, userToken) => {
  await postStore.deleteOne(postId, userToken);
  getPosts();
};

onMounted(() => {
  getPosts();
});
</script>

<style lang="scss" scoped>
.news {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  width: 100%;
  max-width: 1100px;
  height: 100vh;
  border-right: 1px solid rgba(0, 0, 0, 0.18);
  border-left: 1px solid rgba(0, 0, 0, 0.18);
  background-color: white;
}

.show-modal {
  margin-top: 20px;
}

.allPosts {
  z-index: 5;
  width: 100%;
  height: 100%;
  & p {
    color: black;
  }
  & img {
    width: 200px;
    height: 200px;
  }
  .onePost {
    border: 1px solid red;
    width: min-content;
  }
}
</style>
