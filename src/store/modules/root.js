import Vue from 'vue'

import { Message } from 'element-ui'

import router from '@/router'
import { pages } from '@/config'
import injectInfo from '@/utils/injectInfo'
import { appSessionLogin, appTokenLogin, pageLogin, pageLogout } from '@/services'

const state = {
  id: '',
  post: '',
  mobile: '',
  realname: '',
  username: '',
  roles: [],
  loaded: false,
  timestamp: `${Date.now()}`,
}

const getters = {}

const mutations = {
  setUser (state, user) {
    Object.assign(state, user)
  },
  setLoaded (state, loaded = false) {
    state.loaded = loaded
  },
  setTimestamp (state, timestamp) {
    state.timestamp = timestamp
  },
  clearInfo (state) {
    const user = {
      id: '',
      post: '',
      mobile: '',
      realname: '',
      username: '',
      roles: [],
    }

    const loaded = false

    const timestamp = `${Date.now()}`

    Object.assign(state, {
      user,
      loaded,
      timestamp,
    })
  },
}

const actions = {
  // 系统登陆方式。token 登录 | session 登录
  async appLogin ({ dispatch }) {
    let res = { code: 'success' }

    // try catch 仅仅只为了捕获 JSON.parse 错误
    try {
      /**
       * 无法识别是跨系统统一登录，还是单系统刷新页面
       * 所以认定为多系统统一登录认证的情况，使用token
       */
      const name = window.name
      // 避免token泄露执行清空操作
      window.name = ''

      const token = JSON.parse(name).token

      // token登录 方式成功就成功，不成功就使用 刷新登录 方式
      res = await dispatch('appTokenLogin', token)

      if (res.code !== 'success') {
        res = await dispatch('appSessionLogin')
      }
    } catch (e) {
      res = await dispatch('appSessionLogin')
    }

    return res
  },
  // token登录
  async appTokenLogin ({ dispatch }, token) {
    return dispatch('_login', {
      fn: appTokenLogin,
      params: { token },
    })
  },
  // session登录
  async appSessionLogin ({ dispatch }) {
    return dispatch('_login', {
      fn: appSessionLogin,
    })
  },
  // 用于页面登录
  async pageLogin ({ dispatch }, palyload) {
    const { code, msg } = await dispatch('_login', {
      fn: pageLogin,
      params: palyload,
    })

    if (code === 'success') {
      Message({
        type: 'success',
        duration: 1200,
        message: '登录成功正在为你跳转',
        customClass: 'message-show-index',
      })

      // 不知道为什么就是想让你看一下我的登录效果600
      await ((time) => new Promise((resolve, reject) => void setTimeout(resolve, time)))(800)

      router.push({ path: pages.home.path })
    } else {
      Message({
        type: 'error',
        duration: 1600,
        message: msg || '登录失败，请重新登录',
        customClass: 'message-show-index',
      })

      // 不知道为什么就是想让你看一下我的登录效果600
      await ((time) => new Promise((resolve, reject) => void setTimeout(resolve, time)))(800)
    }

    return { code, msg }
  },
  async _login ({ commit }, { fn, params }) {
    const res = await fn(params)

    if (res.code === 'success') {
      const info = injectInfo(res)

      if (typeof info !== 'boolean') {
        commit('setUser', info.user)
        commit('setLoaded', info.loaded)
        commit('setTimestamp', info.timestamp)
      }

      return info ? { code: 'success' } : { code: 'error', msg: '用户信息注入失败' }
    } else {
      return {
        code: res.code || 'error',
        msg: res.msg || '登录失败了',
      }
    }
  },
  // 清除信息
  async clearInfo ({ commit }) {
    const user = {
      id: '',
      post: '',
      mobile: '',
      realname: '',
      username: '',
      roles: [],
    }

    const loaded = false

    const timestamp = `${Date.now()}`

    commit('setUser', user)
    commit('setLoaded', loaded)
    commit('setTimestamp', timestamp)

    return true
  },
  // 用于用户注销
  async pageLogout ({ commit }) {
    const { code, msg } = await pageLogout()

    if (code === 'success') {
      commit('clearInfo')

      Message({
        type: 'success',
        duration: 1200,
        message: '注销成功正在为你跳转',
      })

      router.push({ path: pages.login.path })
    } else {
      Message({
        type: 'error',
        duration: 1600,
        message: msg || '注销失败，请重新注销',
      })
    }

    return { code, msg }
  },
  async _logout ({ dispatch }, postArgs) {
    // 调用开发者注销接口
    const { code, msg } = await Vue.prototype.$http.post(...postArgs)
    if (code === 'success') {
      return await dispatch('clearInfo')
        .catch(() => false) ? { code: 'success' } : { code: 'error', msg: '用户信息清除失败' }
    } else {
      return {
        code: code || 'error',
        msg: msg || '退出失败了',
      }
    }
  },
}

export const root = {
  state,
  getters,
  actions,
  mutations,
}
