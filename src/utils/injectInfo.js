/*
 * @Description:
 * @Author: YOYO 792611446@qq.com
 * @Date: 2019-12-12 15:57:58
 * @LastEditors: xiao xin (834529118@qq.com)
 * @LastEditTime: 2019-12-14 18:14:11
 */
import {
  restData,
} from '@/config'
import {
  getPropVal,
} from '@/utils/objectUtil'

/**
 * @description                     注入用户信息
 * @param  {Object}           res   响应对象
 * @return {boolean | Object}       如果不成功返回 false
 *                                  否则返回通过响应拿到的用户数据
 */
function injectInfo (res) {
  try {
    const info = getRoleConfiguration(res)

    // 如果不合法就返回就结束注入用户信息
    if (!info) {
      return false
    }

    const user = getUserInfo(info)

    const loaded = true

    const timestamp = `${Date.now()}`

    return {
      user,
      loaded,
      timestamp,
    }
  } catch (e) {
    return false
  }
}

/**
 * @description                     获取后端返回的 角色信息并进行校验
 *                                  如果合法则返回用户信息，否则返回false
 * @param  {Object}           res   响应对象
 * @return {boolean | Object}       如果不成功返回 false，否则返回通过响应拿到的用户数据
 */
function getRoleConfiguration (info) {
  // let user

  // if (getPropVal(info, restData.authUserPath + '.rolesString')) {
  //   user = getPropVal(info, restData.authUserPath)
  // }

  // if (!user || !user.rolesString || !user.rolesString.length) {
  //   console.warn('用户角色信息配置不合法!')

  //   return false
  // }

  return info.data
}

// 整理并获得 用户信息
function getUserInfo (info) {
  const {
    id,
    post,
    mobile,
    realname,
    username,
    roles,
  } = info

  return {
    id,
    post,
    mobile,
    realname,
    username,
    roles,
  }
}

export default injectInfo
