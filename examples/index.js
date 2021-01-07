import Loading from "../packages/Loading/index.js";
import Percentage from "../packages/Percentage/index.js";
import Master from "../packages/Master/index.js";
import Echarts from "../packages/Echarts/index.js";
import AutoScroll from "../packages/AutoScroll/index.js";
import Scroll from "../packages/Scroll/index.js";
import BarOneEcharts from "../packages/BarOneEcharts/index.js";
import BarTwoEcharts from "../packages/BarTwoEcharts/index.js";
import LineOneEcharts from "../packages/LineOneEcharts/index.js";
import MoreBarEcharts from "../packages/MoreBarEcharts/index.js";
import PieOneEcharts from "../packages/PieOneEcharts/index.js";
import RadarOneEcharts from "../packages/RadarOneEcharts/index.js";
import RingOneEcharts from "../packages/RingOneEcharts/index.js";
import RingOneTable from "../packages/RingOneTable/index.js";
import RingTwoEcharts from "../packages/RingTwoEcharts/index.js";
import TableWrapperOne from "../packages/TableWrapperOne/index.js";
import NumberOne from "../packages/NumberOne/index.js";
import BtnOne from "../packages/BtnOne/index.js";
import EleOne from "../packages/EleOne/index.js";
import HeaderOne from "../packages/HeaderOne/index.js";
import SortOne from "../packages/SortOne/index.js";
import SortTwo from "../packages/SortTwo/index.js";

const components = [
  Loading,
  Percentage,
  Master,
  Echarts,
  AutoScroll,
  Scroll,
  BarOneEcharts,
  BarTwoEcharts,
  LineOneEcharts,
  MoreBarEcharts,
  PieOneEcharts,
  RadarOneEcharts,
  RingOneEcharts,
  RingOneTable,
  RingTwoEcharts,
  TableWrapperOne,
  NumberOne,
  BtnOne,
  EleOne,
  HeaderOne,
  SortOne,
  SortTwo
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
  Scroll,
  BarOneEcharts,
  BarTwoEcharts,
  LineOneEcharts,
  MoreBarEcharts,
  PieOneEcharts,
  RadarOneEcharts,
  RingOneEcharts,
  RingOneTable,
  RingTwoEcharts,
  TableWrapperOne,
  NumberOne,
  BtnOne,
  EleOne,
  HeaderOne,
  SortOne,
  SortTwo
}