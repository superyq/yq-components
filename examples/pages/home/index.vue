<template lang="pug">
  .page-home
    .echarts-box
      sort-two(sort='4')
</template>
<script>
import a from "../../assets/number-bg1.png";
export default {
  name: "page-home",
  data() {
    return {
      a,
      obj: {
        title: "aasdf",
        datas: [
          { name: "周一", number: 10 },
          { name: "周二", number: 20 },
          { name: "周一", number: 30 },
          { name: "周二", number: 40 },
          { name: "周一", number: 50 },
          { name: "周二", number: 60 },
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
