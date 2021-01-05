import Loading from "../packages/Loading/index.js";
import Percentage from "../packages/Percentage/index.js";
import Master from "../packages/Master/index.js";
import Echarts from "../packages/Echarts/index.js";
import AutoScroll from "../packages/AutoScroll/index.js";
import Scroll from "../packages/Scroll/index.js";

const components = [
  Loading,
  Percentage,
  Master,
  Echarts,
  AutoScroll,
  Scroll
]

const install = function (Vue) {
  if (install.installed) return

  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Loading,
  Percentage,
  Master,
  Echarts,
  AutoScroll,
  Scroll
}