<template>
  <div id="app">
    <!-- 加载中 -->
    <!-- <loading :loading='true'></loading> -->

    <!-- 百分比进度条 -->
    <!-- <div class="percentage-box">
      <percentage :background='["#002adb", "red"]' :haveBg='false'></percentage>
    </div> -->

    <!-- 遮罩 -->
    <!-- <c-master></c-master> -->

    <!-- 基础echarts -->
    <!-- <div class="ehcarts-wrapper">
      <c-echarts cId="demo" :option="option"></c-echarts>
    </div> -->
    
    <!-- 上下滚动 -->
    <div class="c-scroll_box">
      <c-scroll @toBottom="toBottom">
        <ul>
          <li v-for="item in 10" :key="item">A</li>
        </ul>
      </c-scroll>
    </div>
  </div>
</template>

<script>
// import loading from "~/Loading/index.vue";
// import percentage from "~/Percentage/index.vue";
// import cMaster from "~/Master/index.vue";
// import cEcharts from "~/Echarts/index.vue";
import cScroll from "~/Scroll/index.vue";

export default {
  name: "App",
  components: {
    // loading,
    // percentage,
    // cMaster,
    // cEcharts,
    cScroll,
  },
  data() {
    return {
      option: {
        grid: {
          top: "12%",
          left: "10%",
          right: "5%",
          bottom: "15%",
        },
        xAxis: {
          type: "category",
          data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
          axisLabel: {
            color: "red",
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
            color: "red",
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
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            lineStyle: {
              color: ["#FF9F05", "rgba(255,159,5,0)"][0],
            },
            symbol: "circle",
            symbolSize: 12 * window.fontScale,
            itemStyle: {
              // color: '#FF9F05',
              color: ["#FF9F05", "rgba(255,159,5,0)"][0],
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
                    color: ["#FF9F05", "rgba(255,159,5,0)"][0], // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: ["#FF9F05", "rgba(255,159,5,0)"][1], // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
        ],
      },
    };
  },
  methods: {
    toBottom() {
      console.log(11);
    },
  },
};
</script>

<style>
.percentage-box {
  width: 200px;
  height: 10px;
  border-radius: 10px;
  overflow: hidden;
}
.ehcarts-wrapper {
  width: 500px;
  height: 500px;
  border: 1px solid;
}
.c-scroll_box {
  height: 100px;
  width: 100px;
  border: 1px solid;
  overflow: hidden;
}
.c-scroll_box ul {
  width: calc(100% - 50px);
}
</style>
