<template>
  <div class="sFlex-Col SpaceA sh85">
    <auth-input
      inputFor="ID"
      type="text"
      @response="(val) => (authSignInIDInput = val)"
    />
    <auth-input
      inputFor="PW"
      type="password"
      @response="(val) => (authPwInput = val)"
    />
    <custom-button size="S" background="cG" text="로그인" />
    <div>소셜로그인</div>
  </div>
</template>

<script>
import AuthInput from '../../purposes/auth/AuthInput.vue'
import CustomButton from '../../purposes/common/CustomButton.vue'

export default {
  name: 'SignInCard',
  components: { CustomButton, AuthInput },
  data() {
    return {
      authSignInIDInput: '',
      authSignInPWInput: ''
    }
  },
  computed: {},
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
