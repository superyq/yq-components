import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

import './scss/index.scss'
// 路由
import router from '@/router'

// 自适应js
import "./utils/rem.js";

import myComponents from "./index.js";
Vue.use(myComponents);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
