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
