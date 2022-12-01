<template>
  <router-view />
  <div style="display: inline-block">
    <help-frame />
  </div>
</template>
<script>
import HelpFrame from '@/components/layouts/HelpFrame.vue'

export default {
  components: { HelpFrame },
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
