import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

import myComponents from "./index.js";
Vue.use(myComponents);

new Vue({
  render: h => h(App),
}).$mount('#app')
