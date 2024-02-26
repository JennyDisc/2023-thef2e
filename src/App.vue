<template>
  <div class="homePage mx-auto">
    <HeaderView></HeaderView>
    <div class="contentBlock">
      <div class="mainBlock mx-auto">
        <NavbarView class="mb-5"></NavbarView>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderView from "../src/views/HeaderView.vue";
import NavbarView from "../src/views/NavbarView.vue";

export default {
  components: {
    HeaderView,
    NavbarView,
  },
};
</script>
