<template>
  <div>
    <div class="sFlex-Row SpaceB">
      <user-post-frame />
      <auth-frame />
    </div>
    <user-character-frame />
  </div>
</template>
<script>
import UserPostFrame from '@/components/layouts/UserPostFrame.vue'
import AuthFrame from '@/components/layouts/AuthFrame.vue'
import UserCharacterFrame from '@/components/layouts/UserCharacterFrame.vue'

export default {
  components: { UserPostFrame, AuthFrame, UserCharacterFrame },
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
