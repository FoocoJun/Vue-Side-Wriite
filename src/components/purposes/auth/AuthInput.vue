<template>
  <div class="Input-Box">
    <input
      class="tS Input"
      :type="type"
      :placeholder="placeHolder"
      v-model="value"
      @change="$emit('response', value)"
      required
    />
  </div>
</template>
<script>
export default {
  emits: ['response'],
  components: {},
  props: {
    type: String,
    inputFor: 'Name' || 'PW' || 'E-mail' || 'PWCheck'
  },
  data() {
    return {
      value: ''
    }
  },
  computed: {
    placeHolder() {
      switch (this.inputFor) {
        case 'Name':
          return '닉네임을 입력해주세요.'
        case 'PW':
          return '비밀번호를 입력해주세요.'
        case 'E-mail':
          return '이메일을 입력해주세요.'
        case 'PWCheck':
          return '비밀번호를 다시 입력해주세요.'
        default:
          return ''
      }
    }
  },
  methods: {}
}
</script>

<style scoped>
.Input {
  color: #515151;
  width: 276px;
  height: inherit;
  border: none;
  border-radius: 40px;
  padding-inline-start: 20px;
}
.Input:focus {
  outline: none;
}
.Input-Box {
  width: 296px;
  height: 44px;
  border: 1.5px solid #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
}
</style>
