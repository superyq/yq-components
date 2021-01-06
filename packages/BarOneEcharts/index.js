import BarOneEcharts from "./index.vue";

BarOneEcharts.install = function (Vue) {
  Vue.component(BarOneEcharts.name, BarOneEcharts)
}

export default BarOneEcharts;