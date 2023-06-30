import { createStore } from "vuex";
import axios from "axios";
// import socket from './socket';

const store = createStore({
  state() {
    return {
      posts: [],
    };
  },
  getters: {
    posts: (state) => state.posts,
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const data = await axios.get(`${process.env.VUE_APP_LOCAL_URL}posts`);

        commit("setPosts", data.data.data.rows);
        console.log(this.posts);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    async refreshFetchPosts({ commit }) {
      try {
        await this.fetchPosts({ commit });
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    async createPost(state, formState) {
      try {
        const token = localStorage.getItem("token");
        console.log(typeof formState.post_title);
        console.log(typeof formState.post_content);
        if (!formState.post_title || !formState.post_content) {
          alert("please fill in form");
        }
        await axios.post(
          "http://localhost:3000/api/v1/posts",
          {
            post_title: formState.post_title,
            post_content: formState.post_content,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        state.dispatch("fetchPosts");
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});

export default store;
