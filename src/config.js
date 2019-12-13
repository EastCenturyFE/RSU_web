/*
 * @Description:
 * @Author: YOYO 792611446@qq.com
 * @Date: 2019-12-12 15:57:58
 * @LastEditors: YOYO 792611446@qq.com
 * @LastEditTime: 2019-12-13 22:32:21
 */
/** 开发模式 */
export const devMode = false

/** 产品信息 */
export const productInfo = {
  // 产品名称
  name: 'jdyw_web',

  // 产品版本号
  version: 'v_0.0.1',

  // 系统名称
  systemName: '日志监测系统',
  // 高德开发者Key
  aMapKey: '6db7be8da2fea6c2690df5866292a295',

  // 产品服务地址
  address: 'yd',
}

/** 后端服务对接相关配置 */
export const restData = {
  // 用户登录校验接口地址
  checkLoginUrl: '/etc/login',

  // 用户注销登录接口地址
  logoutUrl: '/rest/default/quit',

  // 获取用户信息(检查会话状态)的接口地址
  checkUserInfoUrl: '/rest/default/user/info',

  // 是否需要同步字典
  dictSyncEnabled: false,

  // 返回数据中用户对象配置的路径
  authUserPath: 'data.userInfo',

  // 返回数据中会话超时信息路径
  sessionTimeoutMsgPath: 'code',

  // 服务端返回的用户会话超时判定信息
  sessionTimeoutMsg: 'hndfsj_app_session_timeout',

  // 网络请求异常的统一提示信息
  waringMsg: '数据服务通信异常',

  // 网络请求超时时长
  timeout: 19000,
}

// 系统内置角色名称定义(与后端对应)
export const roleNames = {
  // 大队长
  ddz: 'JDYW_E_CHANICAL_HEADER',
}

/** 系统关键路由 */
export const pages = {
  // 登录页
  login: {
    path: '/login',
    name: 'login',
  },

  // 主页
  home: {
    path: '/home',
    name: 'home',
  },
}

export default {
  devMode,
  productInfo,
  restData,
  pages,
}
