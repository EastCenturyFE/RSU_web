/*
 * @Description:
 * @Author: YOYO 792611446@qq.com
 * @Date: 2019-12-13 21:13:31
 * @LastEditors: YOYO 792611446@qq.com
 * @LastEditTime: 2019-12-14 16:37:11
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

// carType数据
export async function getCarType (params) {
  return request.get('/etc/cheliangleixing', params)
}

// cpurate数据
export async function getCpuRate (params) {
  return request.get('/etc/cpu', params)
}
