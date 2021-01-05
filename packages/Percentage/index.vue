<template>
  <div
    :class="['c-percentage_wrapper', `c-percentage_wrapper--${rem ? 'rem' : 'px'}`]"
    :style="{ background: haveBg ? '#2c3449' : 'none' }"
  >
    <div class="c-percentage_number" :style="style"></div>
  </div>
</template>

<script>
export default {
  name: "c-percentage",
  props: {
    width: {
      type: String,
      default: "50%",
    },
    background: {
      type: Array,
      default() {
        return ["#002adb", "#04f7fb"];
      },
    },
    haveBg: {
      type: Boolean,
      default: true,
    },
    rem: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    style() {
      return `width: ${this.width}; background: -webkit-linear-gradient(left, ${this.background[0]}, ${this.background[1]});`;
    },
  },
};
</script>

<style>
.c-percentage_wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.c-percentage_number {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}
.c-percentage_wrapper--px {
  border-radius: 20px;
}
.c-percentage_wrapper--px .c-percentage_number {
  border-radius: 20px;
}
.c-percentage_wrapper--rem {
  border-radius: 0.2rem;
}
.c-percentage_wrapper--rem .c-percentage_number {
  border-radius: 0.2rem;
}
</style>
