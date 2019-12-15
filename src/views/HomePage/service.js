/*
 * @Description:
 * @Author: YOYO 792611446@qq.com
 * @Date: 2019-12-13 21:13:31
 * @LastEditors: xiao xin (834529118@qq.com)
 * @LastEditTime: 2019-12-16 00:54:42
 */
import request from '@/utils/request'

// successRate数据
export async function getSuccessRate() {
  return request.get('/etc/shebiejiaoyi')
}

// errorTimes数据
export async function getErrorTime() {
  return request.get('/etc/sysErrorLog', )
}

// tradeAmount数据
export async function getTradeAmount() {
  return request.get('/etc/jiaoyijine', )
}

// uploadCount数据
export async function getUploadCount() {
  const res = await request.get('/etc/tupianshangchuan', )
  return res
}

// carType数据
export async function getCarType(params) {
  return request.get('/etc/cheliangleix', params)
}

// cpurate数据
export async function getCpuRate(params) {
  return request.get('/etc/cheliangquyu', params)
}
