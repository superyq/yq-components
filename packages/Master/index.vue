<template>
  <div :class="['c-master', `c-master--${rem ? 'rem' : 'px'}`]">{{ text }}</div>
</template>

<script>
export default {
  name: "c-master",
  props: {
    text: {
      type: String,
      default: "遮罩",
    },
    rem: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.c-master {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  color: rgba(255, 255, 255, 0.8);
}
.c-master--px {
  font-size: 24px;
}
.c-master--rem {
  font-size: 0.24rem;
}
</style>
