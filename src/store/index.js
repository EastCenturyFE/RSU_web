/*
 * @Description:
 * @Author: YOYO 792611446@qq.com
 * @Date: 2019-12-12 15:57:58
 * @LastEditors: YOYO 792611446@qq.com
 * @LastEditTime: 2019-12-13 16:46:16
 */
import Vue from 'vue'
import Vuex from 'vuex'

import { root } from './modules/root'
import { uniteMonitor } from './modules/uniteMonitor'

Vue.use(Vuex)

const store = {
  strict: process.env.NODE_ENV !== 'production',
  ...root,
  modules: {
    uniteMonitor,
  },
}

export default new Vuex.Store(store)
