<template lang="pug">
c-echarts(:cId='cId', :option='option')
</template>

<script>
export default {
  name: "radar-one-echarts",
  props: {
    cId: {
      type: String,
    },
    color: {
      type: Array,
      default() {
        return ["#FF9F05", "rgba(255,159,5,0)"];
      },
    },
    xName: {
      type: Array,
      default() {
        return [
          { name: "经营计划客户覆盖率", max: 50 },
          { name: "核心需求评估客户覆盖率", max: 50 },
          { name: "解决方案客户覆盖率", max: 50 },
          { name: "产品及年度检视报告客户覆盖率", max: 50 },
          { name: "客户关系检视客户覆盖率", max: 50 },
          { name: "经营计划客户覆盖率", max: 50 },
        ];
      },
    },
    xDatas: {
      type: Array,
      default() {
        return [43, 10, 28, 35, 50, 10];
      },
    },
  },
  computed: {
    option() {
      return {
        tooltip: {},
        radar: {
          nameGap: 8 * window.fontScale,
          splitNumber: 5,
          name: {
            show: true,
            textStyle: {
              color: "rgba(255,255,255,0.8)",
              fontSize: 12 * window.fontScale,
            },
          },
          axisLine: {
            lineStyle: {
              color: "#064D8D",
              opacity: 0.4,
            },
          },
          splitLine: {
            lineStyle: {
              color: "#064D8D",
              opacity: 0.4,
            },
          },
          radius: "65%",
          splitArea: {
            areaStyle: {
              color: ["rgba(0,0,0,0)", "rgba(6,77,141,1)"],
            },
          },
          indicator: this.xName,
        },
        series: [
          {
            type: "radar",
            symbol: "circle",
            symbolSize: 6 * window.fontScale,
            itemStyle: {
              color: "#CB2DFD",
            },
            emphasis: {
              label: {
                color: "red",
              },
            },
            data: [
              {
                value: this.xDatas,
              },
            ],
          },
        ],
      };
    },
  },
};
</script>
