/*
 * @Description:
 * @Author: YOYO 792611446@qq.com
 * @Date: 2019-12-13 16:35:38
 * @LastEditors: xiao xin (834529118@qq.com)
 * @LastEditTime: 2019-12-16 00:16:33
 */
import request from '@/utils/request'
import {formatDateTime} from '../../utils/objectUtil'

// 请求系统日志列表
export async function getLogList (params) {
  return request.get('/etc/searchSysLog', params)
}

function handleLoad (load) {
  if (load < 0) {
    return (load * 100).toFixed(2)
  }
  if (load < 10) {
    return (load * 10).toFixed(2)
  }
  return load.toFixed(2)
}

// resu日志列表
export async function getRsuList (params) {
  const res = await request.get('/etc/searchRsuLog', params)
  if (res.code === 'success') {
    res.data.pageList = res.data.pageList.map(({load, tradingRate, ...rest}) => {
      return {
        ...rest,
        load: handleLoad(load),
        tradingRate: tradingRate.toFixed(2)
      }
    })
  }
  return res
}

// 车辆日志列表
export async function getCarList (params) {
  const res = await request.get('/etc/searchCarLog', params)
  return res
}

// 日志详情
export async function getLogDetail (params) {
  return request.get('/etc/getSysLogById', params)
}

// rsu详情
export async function getRsuDetail (params) {
  return request.get('/etc/getRsuLogById', params)
}

// car详情
export async function getCarDetail (params) {
  return request.get('/etc/getCarLogById', params)
}
