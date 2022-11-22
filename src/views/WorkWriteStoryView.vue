<template>
  <div>
    <work-write-story-frame />
    <help-frame />
  </div>
</template>
<script>
import HelpFrame from '@/components/layouts/HelpFrame.vue'
import WorkWriteStoryFrame from '@/components/layouts/WorkWriteStoryFrame.vue'

export default {
  components: { HelpFrame, WorkWriteStoryFrame },
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
