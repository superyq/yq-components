import Master from "./index.vue";

Master.install = function (Vue) {
  Vue.component(Master.name, Master)
}

export default Master;