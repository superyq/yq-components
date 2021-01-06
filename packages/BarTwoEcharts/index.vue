<template lang="pug">
  .bar-two-echarts
    .bar-two-echarts_title {{ title }}
    .bar-two-echarts_echarts
      c-echarts(:cId='cId', :option='option')
</template>

<script>
import up from "@/assets/up.png";

export default {
  name: "bar-two-echarts",
  props: {
    cId: {
      type: String,
      require: true,
    },
    title: {
      type: String,
    },
    xName: {
      type: Array,
      default() {
        return ["全行", "重点区域", "六行", "京津翼", "长三角", "粤港澳"];
      },
    },
    xData: {
      type: Array,
      default() {
        return [10, 20, 30, 40, 50, 60];
      },
    },
  },
  computed: {
    option() {
      return {
        grid: {
          top: "20%",
          right: "8%",
          left: "8%",
          bottom: "15%",
        },
        tooltip: {
          formatter(params) {
            let {
              data: { datas },
            } = params;
            let child = "";
            datas.map((item) => {
              let child_item =
                item.unit === "up"
                  ? `<img src='${up}'>`
                  : `<div class='box-item_unit'>${item.unit}</div>`;

              child += `<div class='bar-two-echarts_box-item'>
                      <div class='box-item_name'>${item.name}</div>
                      <div class='box-item_number'>${item.value}</div>
                      ${child_item}
                    </div>`;
            });
            let html = `<div class='bar-two-echarts_box'>
                      ${child}
                    </div>`;
            return html;
          },
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
            interval: 0,
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
            show: false,
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
            data: this.xData,
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
              formatter: ["{a|{c}%}"].join("\n"),
              rich: {
                a: {
                  color: "#ffffff",
                  fontSize: 16 * window.fontScale,
                  align: "center",
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
.bar-two-echarts {
  position: relative;
  width: 100%;
  height: 100%;
  &_title {
    position: absolute;
    top: 0.15rem;
    left: 0.35rem;
    font-size: 0.12rem;
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
  &_box {
    padding: 0.1rem 0.15rem 0.1rem 0.2rem;
    background: rgba(3, 250, 254, 0.1);
    border-radius: 0.5px;
    border-radius: 0.5px;
    font-size: 0.14rem;
    color: #ffffff;
    &-item {
      display: flex;
      align-items: center;
      margin-bottom: 0.05rem;
      .box-item_number {
        font-size: 0.16rem;
        color: #ff9f05;
      }
      img {
        width: 0.13rem;
        height: 0.18rem;
        object-fit: cover;
      }
    }
  }
}
</style>
