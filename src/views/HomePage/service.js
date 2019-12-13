/*
 * @Description:
 * @Author: YOYO 792611446@qq.com
 * @Date: 2019-12-13 21:13:31
 * @LastEditors: YOYO 792611446@qq.com
 * @LastEditTime: 2019-12-13 21:18:52
 */
import request from '@/utils/request'

// successRate数据
export async function getSuccessRate () {
  return request.get('/etc/shebiejiaoyi')
}

// errorTimes数据
export async function getErrorTime () {
  return request.get('/etc/sysErrorLog',)
}

// tradeAmount数据
export async function getTradeAmount () {
  return request.get('/etc/jiaoyijine',)
}

// uploadCount数据
export async function getUploadCount () {
  return request.get('/etc/tupianshangchuan',)
}

// // successRate数据
// export async function getCarDetail (params) {
//   return request.get('/etc/getCarLogById', params)
// }

// // successRate数据
// export async function getCarDetail (params) {
//   return request.get('/etc/getCarLogById', params)
// }
