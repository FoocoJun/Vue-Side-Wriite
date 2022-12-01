<template>
  <div class="Wrap sFlex-Row sCenter">
    <div v-for="(page, idx) in Array(howManyPages)" :key="idx">
      <black-dot v-if="pageNo === idx" timeToBig />
      <black-dot v-else-if="pageNo != idx" />
    </div>
  </div>
</template>
<script>
import BlackDot from '../common/BlackDot.vue'
export default {
  components: { BlackDot },
  props: {
    pageNo: Number,
    howManyPages: Number
  },
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
.Wrap {
  position: relative;
  top: -30px;
}
</style>
