<template>
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <div class="container">
    <div class="be-comment-block">
      <h6 class="comments-title">Comments (3)</h6>
      <comment-card
        v-for="(comment, index) in comments"
        :key="index"
        :comment_user="comment.User.full_name"
        :comment_time="comment.createdAt"
        :comment_content="comment.reply_content"
      ></comment-card>
      <comment-form :post_id="post_id"></comment-form>
    </div>
  </div>
</template>

<script>
import CommentCard from "./CommentCard.vue";
import CommentForm from "./CommentForm.vue";
import axios from "axios";
export default {
  components: {
    CommentCard,
    CommentForm,
  },
  props: ["post_id"],
  data() {
    return {
      comments: [],
    };
  },
  methods: {
    async getComment() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/posts/${this.post_id}/reply`
        );
        this.comments = response.data.data.rows;
      } catch (error) {
        console.log(error);
        return;
      }
    },
  },
  async mounted() {
    await this.getComment();
    this.emitter.on("comment-success", async () => {
      this.getComment();
    });
  },
};
</script>
<style scoped>
body {
  margin-top: 20px;
  background-color: #e9ebee;
}

.be-comment-block {
  margin-bottom: 50px !important;
  border: 1px solid #edeff2;
  border-radius: 2px;
  padding: 50px 70px;
  border: 1px solid #ffffff;
}
</style>
