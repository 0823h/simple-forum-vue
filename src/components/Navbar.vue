<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo"></div>
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys1"
        :style="{ lineHeight: '64px' }"
      >
        <!-- <ul class="navbar-nav me-auto"> -->
        <!-- <a class="navbar-brand" href="#">Forum</a> -->
        <navbar-link linkText="Home" toLink="home" key="1">Home</navbar-link>
        <navbar-link
          linkText="CreatePost"
          toLink="posts/create"
          key="2"
        ></navbar-link>
        <navbar-link linkText="Login" toLink="login" key="3"></navbar-link>
        <!-- </ul> -->
      </a-menu>
    </a-layout-header>
  </a-layout>
</template>
<script>
import NavbarLink from "./NavbarLink.vue";
export default {
  components: {
    NavbarLink,
  },
  data() {
    return {
      link: [],
    };
  },
};
</script>

<style scoped></style>
