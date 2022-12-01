<template>
  <div class="Arrow cHelp pointer" :style="style" />
</template>

<script>
export default {
  name: 'ArrowButton',
  props: {
    isRight: Boolean
  },
  computed: {
    style() {
      if (this.isRight) {
        return { transform: 'rotate(135deg)' }
      } else return null
    }
  }
}
</script>

<style scoped>
.Arrow {
  width: 41px;
  height: 41px;

  border-width: 3px 0px 0px 3px;
  border-style: solid;
  border-color: #000000;
  transform: rotate(-45deg);
}
</style>
