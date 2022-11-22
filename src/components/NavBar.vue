<template>
  <div class="NavBar cGG sFlex-Row SpaceB pCenter">
    <div class="m40 tXL">
      <router-link to="/">대충 로고</router-link>
    </div>
    <div class="m40 tM">
      <span class="m20">로그인</span> |
      <span class="m20">회원가입</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.NavBar {
  position: sticky;
  top: 0px;
  width: 1280px;
  height: 81px;
}
</style>
