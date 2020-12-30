<template>
  <div class="c-loading" v-if="loading">
    <div :class="['c-loading_img', `c-loading_img--${rem ? 'rem' : 'px'}`]">
      <img src="../../examples/assets/loading.gif" />
    </div>
    <div>
      <img src="../../examples/assets/logo.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "c-loading",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    rem: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.c-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
.c-loading_img--rem {
  width: 1.2rem;
  height: 1.2rem;
}
.c-loading_img--px {
  width: 120px;
  height: 120px;
}
.c-loading_img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
