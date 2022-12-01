<template>
  <form class="sFlex-Col SpaceA sMax" @submit.prevent="signUp">
    <auth-input
      inputFor="E-mail"
      type="email"
      @response="(val) => (authSignUpEmailInput = val)"
    />
    <auth-input
      inputFor="Name"
      type="text"
      @response="(val) => (authSignUpUserNameInput = val)"
    />
    <auth-input
      inputFor="PW"
      type="password"
      @response="(val) => (authSignUpPWInput = val)"
    />
    <custom-button size="S" background="cG" text="회원가입" />
  </form>
</template>

<script>
import AuthInput from '../../purposes/auth/AuthInput.vue'
import CustomButton from '../../purposes/common/CustomButton.vue'

export default {
  name: 'SignUpCard',
  components: { CustomButton, AuthInput },
  data() {
    return {
      authSignUpEmailInput: '',
      authSignUpUserNameInput: '',
      authSignUpPWInput: ''
    }
  },
  computed: {
    signUpData() {
      return {
        email: this.authSignUpEmailInput,
        displayName: this.authSignUpUserNameInput,
        password: this.authSignUpPWInput,
        photoURL: '',
        uid: ''
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    signUp() {
      this.$store.dispatch('emailSignUp', this.signUpData)
    }
  }
}
</script>
