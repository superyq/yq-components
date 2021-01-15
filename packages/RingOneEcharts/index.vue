<template lang="pug">
  c-echarts(:cId='cId', :option="option")
</template>

<script>
import { sortArr } from "@/utils";
export default {
  name: "ring-one-echarts",
  props: {
    cId: {
      type: String,
      require: true,
    },
    xDatas: {
      type: Array,
      require: true,
    },
    colorArr: {
      type: Array,
      default() {
        return ["#3F06F8", "#5AD8A6", "#F6BD16", "#5b8ff9", "#E86452", "#9E03FF"];
      },
    },
  },
  mounted() {
    this.dealArr();
  },
  watch: {
    xDatas() {
      this.dealArr();
    },
    colorArr() {
      this.dealArr();
    }
  },
  computed: {
    fontScale() {
      return window.fontScale || 1;
    },
  },
  data() {
    return {
      baseOption: {
        tooltip: {
          formatter: "{b}: {c}%",
        },
        radiusAxis: {
          type: "category",
          // 极坐标名称
          data: [],
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            color: "#fff",
            // 字与柱间距
            margin: 16 * this.fontScale,
            // 字体大小
            fontSize: 12 * this.fontScale,
          },
        },
        angleAxis: {
          max: 0,
          // 隐藏刻度线
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        polar: {
          center: ["50%", "50%"],
          radius: "100%",
        },
        series: [
          {
            type: "bar",
            data: [],
            coordinateSystem: "polar",
            roundCap: true,
            barCategoryGap: "40%",
          },
        ],
      },
      option: {},
    };
  },
  methods: {
    dealArr() {
      let nameArr = [];
      let seriesData = [];
      this.xDatas.map((item, index) => {
        nameArr.push(item.name);
        seriesData.push({
          value: item.number,
          itemStyle: {
            color: this.colorArr[index],
          },
        });
      });

      this.baseOption.angleAxis.max =
        (sortArr(this.xDatas, -1, "number")[0].number * 4) / 3;
      this.baseOption.radiusAxis.data = nameArr;
      this.baseOption.series[0].data = seriesData.reverse();

      this.option = this.baseOption;
    },
  },
};
</script>
