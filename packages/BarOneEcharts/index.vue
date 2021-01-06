<template lang="pug">
  .bar-one-echarts
    .bar-one-echarts_title {{ title }}
    .bar-one-echarts_echarts
      c-echarts(:cId='cId', :option='option')
</template>

<script>
import up from "../../examples/assets/up.png";
import down from "../../examples/assets/down.png";

export default {
  name: "bar-one-echarts",
  props: {
    title: {
      type: String,
      default: "全行合计占比",
    },
    cId: {
      type: String,
      require: true,
    },
    xName: {
      type: Array,
      default() {
        return ["建行", "招行", "工行", "农行", "中行", "交行"];
      },
    },
    xDatas: {
      type: Array,
      default() {
        return [
          { value: 5, cValue: "10%" },
          { value: 10, cValue: "10%" },
          { value: 10, cValue: "10%" },
          { value: 10, cValue: "10%" },
          { value: 10, cValue: "10%" },
          { value: 10, cValue: "-10%" },
        ];
      },
    },
  },
  computed: {
    option() {
      return {
        grid: {
          top: "30%",
          right: "10%",
          left: "15%",
          bottom: "10%",
        },
        xAxis: {
          data: this.xName,
          axisLine: {
            lineStyle: {
              color: "#08BBE1",
              width: 1 * window.fontScale,
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#FFFFFF",
            fontSize: 14 * window.fontScale,
          },
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#ffffff",
            formatter: "{value}%",
            fontSize: 14 * window.fontScale,
          },
          splitLine: {
            lineStyle: {
              color: "rgba(8,187,225,0.2)",
            },
          },
        },
        series: [
          {
            type: "bar",
            data: this.xDatas,
            barWidth: "30%",
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#09DAFC", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#097EED", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
              barBorderRadius: [3, 3, 0, 0],
            },
            label: {
              show: true,
              position: "top",
              rotate: -1,
              formatter(params) {
                let {
                  data: { value, cValue },
                } = params;
                return [
                  `{${cValue.includes("-") ? "rateDown" : "rate"}|${cValue}}{${
                    cValue.includes("-") ? "down" : "up"
                  }|}`,
                  `{a|${value}%}`,
                ].join("\n");
              },
              rich: {
                a: {
                  color: "#ffffff",
                  fontSize: 14 * window.fontScale,
                  align: "center",
                },
                rate: {
                  color: "#F9AE25",
                  fontSize: 10 * window.fontScale,
                  align: "center",
                },
                rateDown: {
                  color: "#02a69c",
                  fontSize: 10 * window.fontScale,
                  align: "center",
                },
                up: {
                  height: 15 * window.fontScale,
                  align: "left",
                  backgroundColor: {
                    image: up,
                  },
                },
                down: {
                  height: 15 * window.fontScale,
                  align: "left",
                  backgroundColor: {
                    image: down,
                  },
                },
              },
            },
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss">
.bar-one-echarts {
  position: relative;
  width: 100%;
  height: 100%;
  &_title {
    position: absolute;
    top: 0;
    left: 0.1rem;
    font-size: 0.2rem;
    color: #ffffff;
    &::before {
      content: "";
      display: inline-block;
      width: 0.06rem;
      height: 0.06rem;
      margin-right: 0.06rem;
      background: #09dafc;
    }
  }
  &_echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
