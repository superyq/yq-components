<template lang="pug">
  .page-home
    .echarts-box
      table-wrapper-one(
        :rem='rem',
        :widthArr='widthArr', 
        :headerArr='headerArr', 
        :datasArr='datasArr', 
        :bottom='bottom', 
        :option='option'
      )
</template>
<script>
export default {
  name: "page-home",
  data() {
    return {
      rem: false,
      widthArr: [2.8, 1.64, 1.5, 1.5, 1],
      headerArr: ["私行占比排名", "私行占比", "系统占比", "期末（私行）", "期末（零售）"],
      datasArr: [{ name: "yq", sort: 5, width: "10%", datas: [10, 20, 30, 100] }],
      option: {},
      bottom: "0.2",
    };
  },
  methods: {},
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
