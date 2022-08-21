<template>
  <div class="news">
    <ButtonFormComponent
      id="show-modal"
      @click="showModal = true"
      text="Nouveau post"
    ></ButtonFormComponent>
    <modal :show="showModal" @close="showModal = false"> </modal>
    <!-- :show sert à basculer la propriété display d'un élément -->
    <div class="allPosts" v-for="post in allPosts" :key="post.id">
      <p>{{ post.content }}</p>
      <img :src="post.imageUrl" />
      <button v-if="userId === post.createdBy">Modifier</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { usePostStore } from '../stores/index.js';
import Modal from '../views/CreatePostModalView.vue';
import ButtonFormComponent from '../components/ButtonFormComponent.vue';

const showModal = ref(false);
const postStore = usePostStore();
const contentLS = JSON.parse(localStorage.getItem(`TokenUser`));
const userId = contentLS.userId;

let allPosts = ref([]);

const getPosts = async () => {
  const res = await postStore.getAll();
  allPosts.value = res;
  console.log(allPosts);
};

onMounted(() => {
  getPosts();
});
</script>

<style lang="scss" scoped>
.news {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  width: 100%;
  max-width: 1100px;
  height: 100vh;
  border-right: 1px solid rgba(0, 0, 0, 0.18);
  border-left: 1px solid rgba(0, 0, 0, 0.18);
  background-color: white;
}

#show-modal {
  margin-top: 20px;
}

.allPosts {
  z-index: 5;
  width: 100%;
  height: 100%;
  border: 2px solid black;
  & p {
    color: black;
  }
  & img {
    width: 200px;
    height: 200px;
  }
}
</style>
