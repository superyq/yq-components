<template lang="pug">
  .bar-one-echarts(:class="{ 'bar-one-echarts_px': !rem }")
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
    rem: {
      type: Boolean,
      default: true
    },
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
    fontScale() {
      return window.fontScale || 1;
    },
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
              width: 1 * this.fontScale,
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#FFFFFF",
            fontSize: 14 * this.fontScale,
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
            fontSize: 14 * this.fontScale,
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
                  fontSize: 14 * this.fontScale,
                  align: "center",
                },
                rate: {
                  color: "#F9AE25",
                  fontSize: 10 * this.fontScale,
                  align: "center",
                },
                rateDown: {
                  color: "#02a69c",
                  fontSize: 10 * this.fontScale,
                  align: "center",
                },
                up: {
                  height: 15 * this.fontScale,
                  align: "left",
                  backgroundColor: {
                    image: up,
                  },
                },
                down: {
                  height: 15 * this.fontScale,
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
    display: flex;
    align-items: center;
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
.bar-one-echarts_px {
  .bar-one-echarts_title {
    font-size: 20px;
    left: 10px;
    &::before {
      width: 6px;
      height: 6px;
      margin-right: 6px;
    }
  }
}
</style>
