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
    password,
  } = params

  return request.post(restData.checkLoginUrl, {
    username,
    password: params.md5 ? password : md5(password),
  })
}

// 用于页面注销
export function pageLogout () {
  return request.post(restData.logoutUrl)
}

export function getServiceAreaData (params) {
  return request.post('地址', params)
}
