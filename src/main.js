/*
 * @Description:
 * @Author: YOYO 792611446@qq.com
 * @Date: 2019-12-12 15:57:58
 * @LastEditors: YOYO 792611446@qq.com
 * @LastEditTime: 2019-12-12 15:58:37
 */
import Vue from "vue";
import App from "@/App.vue";

import "@/plugins/axiosExtend";
import store from "@/store";

import "@/plugins/routerGuards";
import router from "@/router";

import directive from "@/directive";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;

// 全局注册自定义指令
Object.entries(directive).forEach(
  ([key, value]) => void Vue.directive(key, value)
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
