<template lang='pug'>
  .btn-one(:class='{ "btn-one_px": !rem }') {{ title }}
</template>

<script>
export default {
  name: 'btn-one',
  props: {
    rem: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '按钮'
    }
  }
}
</script>

<style lang='scss'>
.btn-one {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: url("../../examples/assets/btn.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  font-size: 0.16rem;
  color: #ffffff;
  padding: 0 0.1rem;
}
.btn-one_px {
  font-size: 16px;
  padding: 10px;
}
</style>