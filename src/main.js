import Vue from 'vue'
import App from '@/App.vue'

import '@/plugins/axiosExtend'
import store from '@/store'

import '@/plugins/routerGuards'
import router from '@/router'

import directive from '@/directive'

import {
  Table,
  TableColumn,
  DatePicker,
  Input,
  Tabs,
  TabPane,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueAMap from 'vue-amap'
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(Input)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(VueAMap)

VueAMap.initAMapApiLoader({
  key: '570d3c0a476dcf376edd5239e3629ed7',
  // plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
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
