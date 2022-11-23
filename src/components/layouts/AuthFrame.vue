<template>
  <div v-if="!isLogin" class="Auth Frame cGG m10 mrx">
    <div class="sFlex-Row SpaceA sh15">
      {{ SignInOrSignUp }}
      <auth-switch-card @response="(val) => (isSwitchSignUp = val)" />
    </div>
    <div class="sFlex-Col SpaceA sh70">
      <sign-in-card v-if="!isSwitchSignUp" />
      <sign-up-card v-else />
    </div>
    <!-- 로그인 확인을 위한 임시 로그인 이벤트 -->
    <div class="sFlex SpaceA m10 pointer" @click="isLogin = !isLogin">
      소셜로그인
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
      isSwitchSignUp: false,
      isLogin: false
    }
  },
  computed: {
    SignInOrSignUp() {
      return this.isSwitchSignUp ? '회원가입' : '로그인'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

<style scoped>
.Frame {
  width: 370px;
  height: 330px;
}
</style>
