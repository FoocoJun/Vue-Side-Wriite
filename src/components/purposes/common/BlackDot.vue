<template>
  <div class="Dot m10" :style="style" />
</template>

<script>
export default {
  name: 'ArrowButton',
  props: {
    timeToBig: Boolean
  },
  computed: {
    style() {
      if (this.timeToBig) {
        return { transform: 'scale(2,2)' }
      } else return null
    }
  }
}
</script>

<style scoped>
.Dot {
  width: 5px;
  height: 5px;
  border-radius: 5px;

  background-color: black;
}
</style>
