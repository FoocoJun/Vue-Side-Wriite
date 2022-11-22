<template>
  <div>
    <wide-banner-frame />
    <auth-frame />
    <post-frame />
  </div>
</template>
<script>
import WideBannerFrame from '@/components/layouts/WideBannerFrame.vue'
import AuthFrame from '@/components/layouts/AuthFrame.vue'
import PostFrame from '@/components/layouts/PostFrame.vue'

export default {
  components: { WideBannerFrame, AuthFrame, PostFrame },
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
