import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'amfe-flexible' // 引入rem适配
import './utils/register-vant' // 引入加载注册 vant模块
import './style/index.less' // 引入全局样式
import echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
