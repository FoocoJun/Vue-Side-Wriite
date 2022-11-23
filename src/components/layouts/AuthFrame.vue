<template>
  <div class="Frame cGG m10 mrx">
    <div class="sFlex-Row SpaceA sh15">
      {{ AuthCardStatus }}
      <auth-switch-card @response="(val) => (isSignUp = val)" />
    </div>
    <sign-in-card v-if="!isSignUp" />
    <sign-up-card v-else />
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
