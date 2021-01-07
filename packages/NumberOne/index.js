import NumberOne from "./index.vue";

NumberOne.install = function (Vue) {
  Vue.component(NumberOne.name, NumberOne)
}

export default NumberOne;