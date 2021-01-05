import Echarts from "./index.vue";

Echarts.install = function (Vue) {
  Vue.component(Echarts.name, Echarts)
}

export default Echarts;