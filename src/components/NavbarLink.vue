<template>
  <li>
    <router-link :to="`/${toLink}`" class="nav-link">
      {{ linkText }}
    </router-link>
  </li>
</template>
<script>
export default {
  props: ["toLink", "linkText"],
};
</script>
