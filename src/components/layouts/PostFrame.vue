<template>
  <div class="Frame cGGG">
    <post-select-section />
    <post-preview-section />
  </div>
</template>

<script>
import PostSelectSection from './sections/PostSelectSection.vue'
import PostPreviewSection from './sections/PostPreviewSection.vue'

export default {
  name: 'PostFrame',
  components: { PostSelectSection, PostPreviewSection },
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
