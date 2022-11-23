<template>
  <div class="sFlex-Col SpaceA sMax">
    <div class="UserImg-L cG" />
    <div class="tM">송하준님 환영합니다.</div>
    <div class="sFlex-Row SpaceB">
      <custom-button class="m10" background="cG" size="S" text="글 관리하기" />
      <custom-button class="m10" background="cG" size="S" text="마이 페이지" />
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/purposes/common/CustomButton.vue'
export default {
  name: 'MyNameCard',
  components: { CustomButton },
  data() {
    return {}
  },
  computed: {},
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
