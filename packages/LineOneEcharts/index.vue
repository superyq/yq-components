<template lang="pug">
  c-echarts(:cId='cId', :option='option')
</template>

<script>
export default {
  name: "line-one-echarts",
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
        return ["1月", "2月", "3月", "4月", "5月", "6月", "7月"];
      },
    },
    xData: {
      type: Array,
      default() {
        return [820, 932, 901, 934, 1290, 1330, 1320];
      },
    },
  },
  computed: {
    option() {
      return {
        grid: {
          top: "12%",
          left: "10%",
          right: "5%",
          bottom: "15%",
        },
        xAxis: {
          type: "category",
          data: this.xName,
          axisLabel: {
            color: "rgba(255,255,255,0.7)",
            fontSize: 16 * window.fontScale,
          },
          axisLine: {
            lineStyle: {
              color: "rgba(8,187,225,0.3)",
            },
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "rgba(255,255,255,0.7)",
            fontSize: 14 * window.fontScale,
          },
          axisLine: {
            lineStyle: {
              color: "rgba(8,187,225,0.3)",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(8,187,225,0.3)",
            },
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            data: this.xData,
            type: "line",
            lineStyle: {
              color: this.color[0],
            },
            symbol: "circle",
            symbolSize: 12 * window.fontScale,
            itemStyle: {
              // color: '#FF9F05',
              color: this.color[0],
              borderColor: "#fff",
              borderWidth: 2 * window.fontScale,
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: this.color[0], // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: this.color[1], // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss"></style>
