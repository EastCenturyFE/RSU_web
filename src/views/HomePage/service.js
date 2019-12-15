/*
 * @Description:
 * @Author: YOYO 792611446@qq.com
 * @Date: 2019-12-13 21:13:31
 * @LastEditors: xiao xin (834529118@qq.com)
 * @LastEditTime: 2019-12-16 01:39:08
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
  console.log(res)
  if (res.code === 'success') {
    // "{"key":"宁洛高速漯河至周口省界段","doc_count":3269914,"upNunmsSum":{"value":8.190142642E9},"downNumsSum":{"value":8.112914874E9}}"
    res.data.pageList = res.data.pageList.map(val => {
      const data = JSON.parse(val)
      console.log(data)
      return {
        ...data,
        upNunmsSum: {
          value: (data.upNunmsSum.value / 100000).toFixed(2)
        },
        downNumsSum: {
          value: (data.downNumsSum.value / 100000).toFixed(2)
        }
      }
    })
  }
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
