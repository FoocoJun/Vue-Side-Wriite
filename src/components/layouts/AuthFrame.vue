<template>
  <div class="Auth Frame cGG m10 mrx">
    <div class="sFlex-Row SpaceA sh15">
      {{ AuthCardStatus }}
      <auth-switch-card @response="(val) => (isSignUp = val)" />
    </div>
    <div class="sFlex-Col SpaceA sh70">
      <sign-in-card v-if="!isSignUp" />
      <sign-up-card v-else />
    </div>
    <div class="sFlex SpaceA m10">소셜로그인</div>
  </div>
</template>

<script>
import AuthSwitchCard from './cards/AuthSwitchCard.vue'
import SignInCard from './cards/SignInCard.vue'
import SignUpCard from './cards/SignUpCard.vue'

export default {
  name: 'AuthFrame',
  components: { SignInCard, SignUpCard, AuthSwitchCard },
  data() {
    return {
      isSignUp: false
    }
  },
  computed: {
    AuthCardStatus() {
      return this.isSignUp ? '회원가입' : '로그인'
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
