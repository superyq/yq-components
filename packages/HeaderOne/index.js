import HeaderOne from "./index.vue";

HeaderOne.install = function (Vue) {
  Vue.component(HeaderOne.name, HeaderOne)
}

export default HeaderOne;