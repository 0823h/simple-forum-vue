<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav :class="['navbar-light', 'bg-light', 'navbar', 'navbar-expand-lg']">
    <div class="container">
      <ul class="navbar-nav me-auto">
        <a class="navbar-brand" href="#">Forum</a>
        <navbar-link linkText="Home" toLink="home">Home</navbar-link>
        <navbar-link linkText="CreatePost" toLink="posts/create"></navbar-link>
        <navbar-link linkText="Login" toLink="login"></navbar-link>
      </ul>
    </div>
  </nav>
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
