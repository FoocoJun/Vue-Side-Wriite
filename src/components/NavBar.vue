<template>
  <div class="NavBar cGG sFlex-Row SpaceB pCenter">
    <div class="m40 tXL">
      <router-link to="/">대충 로고</router-link>
    </div>
    <!-- 개발 중 이동 용이성을 위한 임시 라우트 링크 -->
    <div class="m20 tS">
      <router-link to="/user/asd">마이페이지</router-link> |
      <router-link to="/create/work">작품만들기</router-link> |
      <router-link to="/create/character">인물만들기</router-link> |
      <router-link to="/xcvs/detail">상세페이지</router-link> |
      <router-link to="/xcvs/write">작품글쓰기</router-link>
    </div>
    <!-- 개발 중 이동 용이성을 위한 임시 라우트 링크 -->
    <div v-if="!isLogin" class="m40 tM">
      <span class="m20">로그인</span> |
      <span class="m20">회원가입</span>
    </div>
    <div v-else class="m40 tM">
      <span class="m20 pointer">글 관리</span> |
      <span class="m20 pointer">마이 페이지</span> |
      <span class="m20 pointer" @click="logOut">로그아웃</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  computed: {
    isLogin() {
      return this.$store.state.auth.isLogin
    }
  },
  methods: {
    logOut() {
      return this.$store.dispatch('authLogOut')
    }
  }
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
