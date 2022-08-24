<template>
  <div class="news">
    <ButtonFormComponent
      class="show-modal"
      @click="
        showPostModal = true;
        modalMode = 'create';
      "
      text="Nouveau post"
    ></ButtonFormComponent>
    <section
      class="allPosts"
      v-for="post in allPosts"
      :key="post.id"
      :id="post.id"
    >
      <div class="onePost">
        <h2>{{ username }}</h2>
        <p>{{ post.content }}</p>
        <img :src="post.imageUrl" v-show="post.imageUrl !== null" />
        <button
          v-if="userId === post.createdBy || userRole"
          @click="
            showPostModal = true;
            modalMode = 'modify';
          "
        >
          Modifier
        </button>
        <button
          v-if="userId === post.createdBy || userRole"
          @click="deletePost(post.id, token)"
        >
          Supprimer
        </button>
      </div>
      <PostModal
        :show="showPostModal"
        @close="showPostModal = false"
        :title="modalMode === 'create' ? 'Créer' : 'Modifier'"
        :content="modalMode === 'create' ? '' : post.content"
      >
        <!-- <template v-slot:titre v-if="modalMode === 'create'">Create</template>
    <template v-slot:titre v-if="modalMode === 'modify'">Modify</template> -->
      </PostModal>
    </section>
  </div>
  <!-- :show sert à basculer la propriété display d'un élément -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { usePostStore } from '../stores/index.js';
import PostModal from '../views/PostModalView.vue';
import ButtonFormComponent from '../components/ButtonFormComponent.vue';

const postStore = usePostStore();
const contentLS = JSON.parse(localStorage.getItem(`TokenUser`));
const userId = contentLS.userId;
const token = contentLS.token;
const username = contentLS.userName;
const showPostModal = ref(false);
const modalMode = ref(null);
let allPosts = ref([]);

const getPosts = async () => {
  const res = await postStore.getAll();
  allPosts.value = res;
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
