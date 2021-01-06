import barTwoEcharts from "./index.vue";

barTwoEcharts.install = function (Vue) {
  Vue.component(barTwoEcharts.name, barTwoEcharts)
}

export default barTwoEcharts;