<template>
  <div :class="['c-scroll', `c-scroll--${rem ? 'rem' : 'px'}`]" @scroll="toBottom">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    rem: {
      type: Boolean,
      default: false
    }
  },
  name: "c-scroll",
  methods: {
    toBottom(e) {
      const ele = e.srcElement ? e.srcElement : e.target;
      if (ele.scrollTop + ele.offsetHeight > ele.scrollHeight - 100) {
        this.$emit("toBottom");
      }
    },
  },
};
</script>

<style>
.c-scroll {
  height: 100%;
  overflow: auto;
}
.c-scroll--px {
  width: calc(100% + 50px);
}
.c-scroll--rem {
  width: calc(100% + 0.5rem);
}
</style>
