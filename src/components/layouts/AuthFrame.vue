<template>
  <div v-if="!isLogin" class="Frame cGG m10 mrx">
    <div class="sFlex-Row SpaceA sh15">
      {{ SignInOrSignUp }}
      <auth-switch-card @response="(val) => (isSwitchSignUp = val)" />
    </div>
    <div class="sFlex-Col SpaceA sh70">
      <sign-in-card v-if="!isSwitchSignUp" />
      <sign-up-card v-else />
    </div>
    <!-- 쏘샬 로그인 완성! w/ Firebase -->
    <div class="sFlex SpaceA m10 pointer" @click="googleSessionLogin">
      구글 로그인
    </div>
  </div>
  <!-- 경로가 /user/:username 이거나 로그인을 했을 경우 -->
  <div v-else class="Frame cGG m10 mrx">
    <my-name-card />
  </div>
</template>

<script>
import AuthSwitchCard from './cards/AuthSwitchCard.vue'
import MyNameCard from './cards/MyNameCard.vue'
import SignInCard from './cards/SignInCard.vue'
import SignUpCard from './cards/SignUpCard.vue'

export default {
  name: 'AuthFrame',
  components: { SignInCard, SignUpCard, AuthSwitchCard, MyNameCard },
  data() {
    return {
      isSwitchSignUp: false
    }
  },
  computed: {
    SignInOrSignUp() {
      return this.isSwitchSignUp ? '회원가입' : '로그인'
    },
    isLogin() {
      return this.$store.state.auth.isLogin
    }
  },
  methods: {
    googleSessionLogin() {
      return this.$store.dispatch('auth/googleSessionLogin')
    }
  }
}
</script>

<style scoped>
.Frame {
  width: 370px;
  height: 330px;
}
</style>
