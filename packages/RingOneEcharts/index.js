import RingOneEcharts from "./index.vue";

RingOneEcharts.install = function (Vue) {
  Vue.component(RingOneEcharts.name, RingOneEcharts)
}

export default RingOneEcharts;