<template>
  <form class="form-block">
    <div class="row">
      <div class="col-xs-12">
        <div class="form-group">
          <textarea
            class="form-input"
            required=""
            placeholder="Comment here"
            v-model="reply_content"
          ></textarea>
        </div>
      </div>
      <a class="btn btn-primary pull-right" @click.prevent="createReply"
        >submit</a
      >
    </div>
  </form>
</template>

<!-- <template>
  <a-list
    v-if="comments.length"
    :data-source="comments"
    :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
    item-layout="horizontal"
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <a-comment
          :author="item.author"
          :avatar="item.avatar"
          :content="item.content"
          :datetime="item.datetime"
        />
      </a-list-item>
    </template>
  </a-list>
  <a-comment>
    <template #avatar>
      <a-avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    </template>
    <template #content>
      <a-form-item>
        <a-textarea :rows="4" v-model:value="value" />
      </a-form-item>
      <a-form-item>
        <a-button
          html-type="submit"
          :loading="submitting"
          type="primary"
          @click="handleSubmit"
        >
          Add Comment
        </a-button>
      </a-form-item>
    </template>
  </a-comment>
</template> -->

<script>
import axios from "axios";
// import eventBus from "./utils/eventBus";
export default {
  props: ["post_id"],
  data() {
    return {
      reply_content: "",
    };
  },
  methods: {
    async createReply() {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          `http://localhost:3000/api/v1/posts/${this.post_id}/reply`,
          {
            reply_content: this.reply_content,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.reply_content = "";
        // this.$emit("comment-success");
        this.emitter.emit("comment-success");

        this.$forceUpdate();
      } catch (error) {
        console.log(error);
        return;
      }
    },
  },
};
</script>

<style scoped>
.form-group.fl_icon .icon {
  position: absolute;
  top: 1px;
  left: 16px;
  width: 48px;
  height: 48px;
  background: #f6f6f7;
  color: #b5b8c2;
  text-align: center;
  line-height: 50px;
  -webkit-border-top-left-radius: 2px;
  -webkit-border-bottom-left-radius: 2px;
  -moz-border-radius-topleft: 2px;
  -moz-border-radius-bottomleft: 2px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}

.form-group .form-input {
  font-size: 13px;
  line-height: 50px;
  font-weight: 400;
  width: 100%;
  height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #edeff2;
  border-radius: 3px;
}

.form-group.fl_icon .form-input {
  padding-left: 70px;
}

.form-group textarea.form-input {
  height: 150px;
}
</style>
