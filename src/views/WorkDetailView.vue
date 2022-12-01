<template>
  <div>
    <work-detail-frame />
    <work-time-line-fram />
  </div>
</template>
<script>
import WorkDetailFrame from '@/components/layouts/WorkDetailFrame.vue'
import WorkTimeLineFram from '@/components/layouts/WorkTimeLineFram.vue'
export default {
  components: { WorkDetailFrame, WorkTimeLineFram },
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
