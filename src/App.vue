<template>
  <nav-bar />
  <router-view />
</template>

<script>
import NavBar from './components/NavBar.vue'
import $authCheckAndContinue from '@/mixins/authCheckAndContinue'

export default {
  components: {
    NavBar
  },
  mounted() {
    this.$authCheckAndContinue()
  },
  mixins: [$authCheckAndContinue]
}
</script>

<style>
@import url('./assets/css/main.css');
@import url('./assets/css/structure.css');
@import url('./assets/css/interval.css');
@import url('./assets/css/auth.css');
@import url('./assets/css/banners.css');

#app {
  width: 1280px;
  margin: 0px auto;
}
</style>
