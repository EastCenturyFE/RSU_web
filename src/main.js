/*
 * @Description: 请输入当前文件描述
 * @Author: xiao xin (834529118@qq.com)
 * @Date: 2019-12-14 18:02:49
 * @LastEditors: xiao xin (834529118@qq.com)
 * @LastEditTime: 2019-12-14 20:58:59
 */
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
// Vue.use(VueAMap)
Vue.use(element)

// VueAMap.initAMapApiLoader({
//   key: '570d3c0a476dcf376edd5239e3629ed7',
//   plugin: ['AMap.Driving'],
//   // 默认高德 sdk 版本为 1.4.4
//   v: '1.4.15',
// })

Vue.config.productionTip = false

// 全局注册自定义指令
Object.entries(directive).forEach(
  ([key, value]) => void Vue.directive(key, value)
)

window.oncontextmenu = () => false

window.onkeydown = function (e) {
  // if (e.keyCode === 123) {
  //   e.preventDefault()
  // }
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
