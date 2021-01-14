<template lang="pug">
  .page-home
    .echarts-box
      bar-two-echarts(
        cId="demo",
        :rem='rem',
        :title="title",
        :xDatas="xDatas"
        :xName='xName'
      )
</template>
<script>
export default {
  name: "page-home",
  data() {
    return {
      rem: false,
      xDatas: [
        {
          value: 20,
          datas: [
            { name: "纯新增", value: "41", unit: "人" },
            { name: "存量流失", value: "40", unit: "人" },
          ],
        },
        {
          value: 30,
          datas: [
            { name: "纯新增", value: "41", unit: "人" },
            { name: "存量流失", value: "40", unit: "人" },
          ],
        },
        {
          value: 40,
          datas: [
            { name: "纯新增", value: "41", unit: "人" },
            { name: "存量流失", value: "40", unit: "up" },
          ],
        },
        {
          value: 40,
          datas: [
            { name: "纯新增", value: "41", unit: "人" },
            { name: "存量流失", value: "40", unit: "up" },
          ],
        },
        {
          value: 40,
          datas: [
            { name: "纯新增", value: "41", unit: "人" },
            { name: "存量流失", value: "40", unit: "up" },
          ],
        },
        {
          value: 60,
          datas: [
            { name: "纯新增", value: "41", unit: "人" },
            { name: "存量流失", value: "40", unit: "up" },
          ],
        },
      ],
      xName: ["全行", "重点区域", "六行", "京津翼", "长三角", "粤港澳"],
      title: "标题",
    };
  },
  methods: {},
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
