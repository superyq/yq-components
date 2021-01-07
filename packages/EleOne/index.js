import EleOne from "./index.vue";

EleOne.install = function (Vue) {
  Vue.component(EleOne.name, EleOne)
}

export default EleOne;