<template lang="pug">
  .page-home
    bar-two-echarts(cId='demo', title='我是标题', :xName='["asdf"]', :xDatas='[10]')
</template>
<script>
export default {
  name: "page-home",
  mounted() {
    console.log(window.fontScale);
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
