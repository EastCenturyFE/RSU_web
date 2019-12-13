import Vue from 'vue'
import App from '@/App.vue'

import '@/plugins/axiosExtend'
import store from '@/store'

import '@/plugins/routerGuards'
import router from '@/router'

import directive from '@/directive'

import element from './element'
import 'element-ui/lib/theme-chalk/index.css'

import VueAMap from 'vue-amap'
Vue.use(VueAMap)
Vue.use(element)

VueAMap.initAMapApiLoader({
  key: '570d3c0a476dcf376edd5239e3629ed7',
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.15',
})

Vue.config.productionTip = false

// 全局注册自定义指令
Object.entries(directive).forEach(
  ([key, value]) => void Vue.directive(key, value)
)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
