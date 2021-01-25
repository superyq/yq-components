<template lang="pug">
  c-echarts(:cId='cId', :option='option', :class='{ "more-bar_px": !rem }')
</template>

<script>
import up from "@/assets/up.png";
import down from "@/assets/down.png";

export default {
  name: "more-bar-echarts",
  props: {
    rem: {
      type: Boolean,
      default: true,
    },
    cId: {
      type: String,
      require: true,
    },
    xName: {
      type: Array,
      default() {
        return ["北京"];
      },
    },
    lName: {
      type: Array,
      default() {
        return ["建行", "招商", "工行", "交通", "农行", "中国"];
      },
    },
    xDatas: {
      type: Array,
      default() {
        return [
          {
            name: "建行",
            type: "bar",
            barWidth: "20%",
            stack: "总量",
            label: {
              show: true,
              formatter: "{c} %",
            },
            itemStyle: {
              color: "yellow",
            },
            data: [{ value: 10, cValue: "-10%" }],
          },
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
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none",
          },
          backgroundColor: "rgba(10,39,161,0.5)",
          formatter: function (params) {
            let { axisValue } = params[0];
            var content = "";
            params.reverse().map((item) => {
              content += `<div class='item'>
                        <div class='item_icon' style="background: ${item.color}"></div>
                        <div class='item_name'>${item.seriesName}</div>
                        <div class='item_number'>${item.value}%</div>
                        <div class='item_upordown'>
                          <div class='${
                            item.data.cValue.includes("-") ? "item_down" : "item_up"
                          }'>${item.data.cValue}</div>
                          <img src='${item.data.cValue.includes("-") ? down : up}'/>
                        </div>
                      </div>`;
            });
            return `<div class='more-bar-echarts'>
                    <h2>${axisValue}</h2>
                    ${content}
                </div>`;
          },
        },
        legend: {
          orient: "vertical",
          left: "12%",
          top: "22%",
          textStyle: {
            color: "#fff",
            padding: [3 * this.fontScale, 0, 0, 8 * this.fontScale],
          },
          itemWidth: 10 * this.fontScale,
          itemHeight: 10 * this.fontScale,
          itemGap: 22 * this.fontScale,
          icon: "circle",
          data: this.lName,
        },
        xAxis: {
          type: "category",
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
          type: "value",
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "rgba(255,255,255,0.7)",
            formatter: "{value}%",
            fontSize: 14 * this.fontScale,
          },
          splitLine: {
            lineStyle: {
              color: "rgba(8,187,225,0.2)",
              type: "dashed",
            },
          },
        },
        series: this.xDatas,
      };
    },
  },
};
</script>

<style lang="scss">
.more-bar-echarts {
  width: 2.3rem;
  height: 1.8rem;
  padding: 0.1rem 0 0.1rem 0.1rem;
  h2 {
    margin-bottom: 0.05rem;
  }
  .item {
    display: flex;
    align-items: center;
    margin-bottom: 0.02rem;
    &_icon {
      width: 0.08rem;
      height: 0.08rem;
      border-radius: 50%;
      margin-right: 0.1rem;
    }
    &_name {
      margin-right: 0.36rem;
    }
    &_number {
      width: 0.6rem;
    }
    &_upordown {
      margin-left: 0.08rem;
      display: flex;
      align-items: center;
      .item_up {
        color: rgb(249, 174, 37);
      }
      .item_down {
        color: rgb(0, 210, 162);
      }
      img {
        margin-left: 0.05rem;
        width: 0.1rem;
        height: 0.09rem;
        object-fit: cover;
      }
    }
  }
}
.more-bar_px {
  .more-bar-echarts {
    width: 230px;
    height: 180px;
    padding: 10px 0 10px 10px;
    h2 {
      margin-bottom: 5px;
    }
    .item {
      margin-bottom: 2px;
      &_icon {
        width: 8px;
        height: 8px;
        margin-right: 10px;
      }
      &_name {
        margin-right: 36px;
      }
      &_number {
        width: 60px;
      }
      &_upordown {
        margin-left: 8px;
        img {
          margin-left: 5px;
          width: 10px;
          height: 9px;
        }
      }
    }
  }
}
</style>
