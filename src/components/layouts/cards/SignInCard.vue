<template>
  <form class="sFlex-Col SpaceA sMax" @submit.prevent="signIn">
    <auth-input
      inputFor="E-mail"
      type="email"
      @response="(val) => (authSignInEmailInput = val)"
    />
    <auth-input
      inputFor="PW"
      type="password"
      @response="(val) => (authSignInPwInput = val)"
    />
    <custom-button size="S" background="cG" text="로그인" />
  </form>
</template>

<script>
import AuthInput from '../../purposes/auth/AuthInput.vue'
import CustomButton from '../../purposes/common/CustomButton.vue'

export default {
  name: 'SignInCard',
  components: { CustomButton, AuthInput },
  data() {
    return {
      authSignInEmailInput: '',
      authSignInPWInput: ''
    }
  },
  computed: {
    signInData() {
      return {
        email: this.authSignInEmailInput,
        password: this.authSignInPWInput
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    signIn() {
      this.$store.dispatch('emailSessionLogin', this.signInData)
    }
  }
}
</script>
