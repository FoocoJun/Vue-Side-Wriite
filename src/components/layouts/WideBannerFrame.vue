<template>
  <div class="Frame cGG m10 msx sFlex-Row SpaceA">
    <arrow-button @click="PageDown" />
    <div class="bPop-under cG">
      <div v-for="(val, idx) in sampleData" :key="idx">
        <div v-if="bannerPage === idx" :class="val"></div>
      </div>
      <!-- 페이지를 알려주는 검은콩자반 -->
      <page-checker :pageNo="bannerPage" :howManyPages="sampleData.length" />
    </div>
    <arrow-button isRight @click="PageUp" />
  </div>
</template>

<script>
import PageChecker from '../purposes/banner/PageChecker.vue'
import ArrowButton from '../purposes/common/ArrowButton.vue'
export default {
  name: 'WideBannerFrame',
  components: { ArrowButton, PageChecker },
  data() {
    return {
      sampleData: ['bPop-under cGGG', 'bPop-under cG', 'bPop-under cHelp'],
      bannerPage: 0
    }
  },
  setup() {},
  created() {},
  mounted() {
    setInterval(() => {
      this.PageUp()
    }, 3000)
  },
  unmounted() {},
  methods: {
    // 이후 this.sampleData.length - 1 자리에 배너 갯수에 대한 변수값 할당
    PageDown() {
      this.bannerPage =
        this.bannerPage === 0 ? this.sampleData.length - 1 : this.bannerPage - 1
    },
    PageUp() {
      this.bannerPage =
        this.bannerPage === this.sampleData.length - 1 ? 0 : this.bannerPage + 1
    }
  }
}
</script>

<style scoped>
.Frame {
  width: 900px;
  height: 330px;
}
</style>
