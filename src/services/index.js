/*
 * @Description:
 * @Author: YOYO 792611446@qq.com
 * @Date: 2019-12-12 15:57:58
 * @LastEditors: YOYO 792611446@qq.com
 * @LastEditTime: 2019-12-13 22:35:38
 */
import md5 from 'md5'

import request from '@/utils/request'
import { restData } from '@/config'

// token登录
export function appTokenLogin (params) {
  return request.post(restData.checkUserInfoUrl, params)
}

// session登录
export function appSessionLogin () {
  return request.post(restData.checkUserInfoUrl)
}

// 用于页面登录
export function pageLogin (params) {
  const {
    username,
    pwd,
  } = params

  return request.post(restData.checkLoginUrl, {
    username,
    pwd: params.md5 ? pwd : md5(pwd),
  })
}

// 用于页面注销
export function pageLogout () {
  return request.post(restData.logoutUrl)
}

export function getServiceAreaData (params) {
  return request.post('地址', params)
}
