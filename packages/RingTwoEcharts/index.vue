<template lang="pug">
c-echarts(:cId='cId', :option='option')
</template>

<script>
export default {
  name: "ring-two-echarts",
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
  },
  computed: {
    option() {
      return {
        angleAxis: {
          max: 100,
          startAngle: 90,
          show: false,
        },
        radiusAxis: {
          type: "category",
          show: false,
        },
        polar: {
          radius: ["90%", "100%"],
        },
        series: [
          {
            type: "bar",
            stack: "one",
            data: [60],
            roundCap: true,
            zlevel: 2,
            coordinateSystem: "polar",
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#914CE6", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#E82C81", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
          {
            type: "bar",
            stack: "one",
            roundCap: true,
            zlevel: 1,
            data: [40],
            coordinateSystem: "polar",
            color: "rgba(145,76,230,0.2)",
          },
        ],
      };
    },
  }
};
</script>
