import {createStore} from 'vuex';
import axios from 'axios';
// import socket from './socket';

const store = createStore({
    state() {
        return {
            posts: []
        }
    },
    getters: {
        posts: state => state.posts
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        }
    },
    actions: {
        async fetchPosts({commit}) {
            try {
                const data = await axios.get(
                    `${process.env.VUE_APP_LOCAL_URL}posts`
                  );
                
                commit("setPosts", data.data.data.rows)
                console.log(this.posts);
            } catch (error) {
                alert (error);
                console.log(error);
            }
        },

        async refreshFetchPosts({commit}) {
            try{
                await this.fetchPosts({commit});
            } catch (error) {
                alert (error);
                console.log(error);
            }
        }
    },
})

export default store