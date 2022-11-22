<template>
  <div class="Frame cGG m10 mrx">
    <div class="sFlex-Col">
      <custom-button size="S" background="cG" text="로그인" />
    </div>
  </div>
</template>

<script>
import CustomButton from '../purposes/common/CustomButton.vue'
export default {
  name: 'AuthFrame',
  components: { CustomButton },
  data() {
    return {
      sampleData: ''
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
