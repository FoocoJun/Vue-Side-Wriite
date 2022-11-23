<template>
  <div>
    <div class="Card">
      <input
        type="checkbox"
        id="switch"
        v-model="isSignUp"
        @change="$emit('response', isSignUp)"
      />
      <label for="switch" class="switch_label">
        <span class="onf_btn"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthSwitchCard',
  emits: ['response'],
  data() {
    return {
      isSignUp: false
    }
  }
}
</script>

<style scoped>
.Card {
  position: relative;
}
#switch {
  position: absolute;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.switch_label {
  position: relative;
  cursor: pointer;
  display: inline-block;
  width: 58px;
  height: 28px;
  background: #fff;
  border: 2px solid #757575;
  border-radius: 20px;
  transition: 0.2s;
}
.switch_label:hover {
  background: #efefef;
}
.onf_btn {
  position: absolute;
  top: 5px;
  left: 5px;
  display: inline-block;
  width: 19px;
  height: 19px;
  border-radius: 20px;
  background: #757575;
  transition: 0.2s;
}
#switch:checked + .switch_label {
  background: #757575;
  border: 2px solid #757575;
}

#switch:checked + .switch_label:hover {
  background: #757575;
}

#switch:checked + .switch_label .onf_btn {
  left: 33px;
  background: #fff;
  box-shadow: 1px 2px 3px #00000020;
}
</style>
