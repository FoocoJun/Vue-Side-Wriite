<template>
  <nav-bar />
  <router-view />
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
@import url('./assets/css/main.css');
@import url('./assets/css/structure.css');
@import url('./assets/css/interval.css');
@import url('./assets/css/auth.css');

#app {
  width: 1280px;
  margin: 0px auto;
}
</style>
