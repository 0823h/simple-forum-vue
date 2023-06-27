<template>
  <div class="container">
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
  </div>

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
          <h5 class="modal-title">Lỗi đăng nhập</h5>
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
// import socket from "./../socket";
export default {
  components: {
    PostCard,
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
