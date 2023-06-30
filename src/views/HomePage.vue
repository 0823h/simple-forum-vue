<template>
  <!-- <div class="container"> -->
  <a-layout style="padding: 2rem">
    <div style="">
      <create-post-form></create-post-form>
    </div>
  </a-layout>
  <a-layout>
    <a-layout-content
      :style="{
        background: '#fff',
        padding: '24px',
        margin: 0,
        minHeight: '280px',
      }"
    >
      <div v-for="(post, index) in posts" :key="index">
        <post-card
          :post_title="post.post_title"
          :post_content="post.post_content"
          :created_time="post.createdAt"
          :username="post.User.username"
          :post_id="post.id"
          @comment-success="commentSuccessHandler"
        ></post-card>
      </div>
    </a-layout-content>
  </a-layout>
  <!-- </div> -->

  <div
    class="modal"
    tabindex="-1"
    role="dialog"
    style="display: block"
    v-if="showError"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Error</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="showError = false"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          {{ error }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import PostCard from "./PostCard.vue";
import CreatePostForm from "./CreatePostForm.vue";
// import socket from "./../socket";
export default {
  components: {
    PostCard,
    CreatePostForm,
  },
  emits: ["comment-success"],
  data() {
    return {
      // posts: [],
      error: "",
      updated: 0,
      showError: false,
    };
  },
  methods: {
    async commentSuccessHandler() {
      console.log("forceUpdate!");
    },
    ...mapActions(["fetchPosts"]),
  },
  async mounted() {
    await this.fetchPosts();
    await this.emitter.on("comment-success", async () => {
      await this.fetchPosts();
      console.log("caught comment-success event");
    });
  },
  computed: {
    rendered_posts: function () {
      return this.posts;
    },
    ...mapGetters(["posts"]),
  },
};
</script>
