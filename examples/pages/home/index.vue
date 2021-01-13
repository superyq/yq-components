<template lang="pug">
  .page-home
    .echarts-box
      ring-two-echarts(
        cId="demo"
      )
</template>
<script>
export default {
  name: "page-home",
  data() {
    return {
      color: ["red", "rgba(255,159,5,0)"],
      obj: {
        title: "a",
        datas: [
          { name: "周一", number: 10 },
          { name: "周一", number: 10 },
          { name: "周一", number: 10 },
          { name: "周一", number: 10 },
          { name: "周一", number: 10 },
          { name: "周一", number: 10 },
        ],
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
