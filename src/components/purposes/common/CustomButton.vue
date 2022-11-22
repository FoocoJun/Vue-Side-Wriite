<template>
  <button :class="customClass" @click="moveTo">{{ text }}</button>
</template>
<script>
export default {
  components: {},
  props: {
    size: 'L' || 'S',
    text: String,
    background: 'c' || 'cG' || 'cGGG',
    to: undefined || String
  },
  data() {
    return {
      customClass: ['Shape', this.size, this.background]
    }
  },
  methods: {
    moveTo() {
      this.to && this.$router.push(this.to)
    }
  }
}
</script>

<style scoped>
.Shape {
  border-radius: 40px;
  border: none;
  font-weight: bold;
}

.L {
  width: 220px;
  height: 70px;
  font-size: 26px;
}

.S {
  width: 130px;
  height: 40px;
  font-size: 20px;
}
</style>
