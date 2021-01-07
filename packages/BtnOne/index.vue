<template lang='pug'>
  .btn-one.c-basebg {{ title }}
</template>

<script>
export default {
  name: 'btn-one',
  props: {
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
  font-size: 0.16rem;
  color: #ffffff;
  padding: 0 0.1rem;
}
</style>