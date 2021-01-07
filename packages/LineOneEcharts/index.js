import LineOneEcharts from "./index.vue";

LineOneEcharts.install = function (Vue) {
  Vue.component(LineOneEcharts.name, LineOneEcharts)
}

export default LineOneEcharts;