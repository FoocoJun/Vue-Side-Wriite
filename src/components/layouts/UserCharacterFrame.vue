<template>
  <div class="Frame cGG"></div>
</template>

<script>
export default {
  name: 'UserCharacterFrame',
  components: {},
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
  display: block;
  width: 1280px;
  height: 900px;
  /* 인라인블록 사이 4px간격 쉬운 해소방법 필요 */
  margin-top: -4px;
}
</style>
