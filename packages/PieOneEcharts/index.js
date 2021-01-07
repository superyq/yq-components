import pieOneEcharts from "./index.vue";

pieOneEcharts.install = function (Vue) {
  Vue.component(pieOneEcharts.name, pieOneEcharts)
}

export default pieOneEcharts;