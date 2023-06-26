<template>
  <navbar></navbar>
  <router-view></router-view>
</template>

<script>
import Navbar from "./components/Navbar.vue";
// import { state } from "@/socket";
export default {
  name: "App",
  components: {
    Navbar,
  },
  created() {
    // state.connected;
  },
};
</script>

<style></style>
