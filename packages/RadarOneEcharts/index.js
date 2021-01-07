import RadarOneEcharts from "./index.vue";

RadarOneEcharts.install = function (Vue) {
  Vue.component(RadarOneEcharts.name, RadarOneEcharts)
}

export default RadarOneEcharts;