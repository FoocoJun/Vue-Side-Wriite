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
  width: 1280px;
  height: 900px;
}
</style>
