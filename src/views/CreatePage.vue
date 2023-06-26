<template>
  <div class="container">
    <div class="form-group">
      <div class="row">
        <label for="" class="form-label"> PostTitle </label>
        <a-input type="text" class="form-control" v-model="post_title" />
      </div>
      <div class="row">
        <label for="" class="form-label"> Content </label>
        <a-textarea
          type="text"
          class="form-control"
          rows="5"
          v-model="post_content"
        >
        </a-textarea>
      </div>
      <div class="row mb-3">
        <div class="form-check">
          <a-checkbox
            class="form-check-input"
            type="checkbox"
            v-model="is_published"
          />
          <label class="form-check-label" for="gridCheck1"> Published </label>
        </div>
      </div>
      <a-button
        type="primary"
        class="btn btn-primary"
        @click.prevent="createPost"
      >
        Submit
      </a-button>
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
            <h5 class="modal-title">Something went wrong!</h5>
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
  </div>
</template>

<script>
import axios from "axios";
// import socket from "./../socket";
export default {
  data() {
    return {
      post_title: "",
      post_content: "",
      is_published: false,
      error: "",
      showError: false,
    };
  },
  methods: {
    async createPost() {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        await axios.post(
          "http://localhost:3000/api/v1/posts",
          {
            post_title: this.post_title,
            post_content: this.post_content,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // socket.on("refresh-data", () => {
        //   console.log("listen to refresh-data");
        //   this.$forceUpdate;
        // });
        this.$router.push("/home");
      } catch (error) {
        this.error = error.response.data.error;
        this.showError = true;
      }
    },
  },
};
</script>
