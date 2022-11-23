<template>
  <div class="sFlex-Col SpaceA sh85">
    <auth-input
      inputFor="E-mail"
      type="e-mail"
      @response="(val) => (authSignUpEmailInput = val)"
    />
    <auth-input
      inputFor="ID"
      type="text"
      @response="(val) => (authSignUpIDInput = val)"
    />
    <auth-input
      inputFor="PW"
      type="password"
      @response="(val) => (authSignUpPWInput = val)"
    />
    <auth-input
      inputFor="PWCheck"
      type="password"
      @response="(val) => (authSignUpPWCInput = val)"
    />
    <custom-button size="S" background="cG" text="회원가입" />
  </div>
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
      authSignUpIDInput: '',
      authSignUpPWInput: '',
      authSignUpPWCInput: ''
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
