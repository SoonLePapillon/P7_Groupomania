import { defineStore } from 'pinia'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [],
  }),
  getters: {
    getPost: (state) => {
      return state.posts;
    },
  },
  actions: {
    async getOne() {
      let response = await fetch('http://localhost:3000/api/posts/getOne')
      let data = await response.json()
      return data
    },
    async getAll() {
      let response = await fetch('http://localhost:3000/api/posts/getAll')
      let data = await response.json()
      this.posts.push(data);
    },

  },
})