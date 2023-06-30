<template>
  <li>
    <a-menu-item key="id">
      <router-link :to="`/${toLink}`" class="nav-link">
        {{ linkText }}
      </router-link>
    </a-menu-item>
  </li>
</template>
<script>
export default {
  props: ["toLink", "linkText", "id"],
};
</script>
