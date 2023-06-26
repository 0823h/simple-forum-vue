<template>
  <div class="container">
    <h2>Login</h2>
    <form class="form-group" @submit.prevent="login">
      <div>
        <label for="username" class="form-label">Username: </label>
        <input
          type="text"
          id="username"
          class="form-control"
          v-model="username"
        />
      </div>
      <div>
        <label for="password" class="form-label">Password: </label>
        <input
          type="password"
          id="password"
          class="form-control"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Signin</button>
    </form>
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
              class="btn-close"
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

export default {
  data() {
    return {
      username: "",
      password: "",
      error: "",
      showError: false,
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/users/login",
          {
            username: this.username,
            password: this.password,
          }
        );

        localStorage.setItem("token", response.data.data.token);

        this.$router.push("/home");
      } catch (error) {
        console.log(error.response);
        if (error.response.status === 401) {
          this.error = error.response.data.error;
          this.showError = true;
        } else {
          this.error = error.response.data.error;
          this.showError = true;
        }
      }
    },
  },
};
</script>
