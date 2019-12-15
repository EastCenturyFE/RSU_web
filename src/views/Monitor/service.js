/*
 * @Description: 请输入当前文件描述
 * @Author: xiao xin (834529118@qq.com)
 * @Date: 2019-12-14 18:02:49
 * @LastEditors: xiao xin (834529118@qq.com)
 * @LastEditTime: 2019-12-15 21:54:36
 */
import {
  get
} from '@/utils/request'

// 获取系统日志数量
export function getCountLog() {
  return get('/etc/countLog')
}

export function getcountCheLinag() {
  return get('/etc/countCheLinag')
}

export function getcountJiaoyi() {
  return get('/etc/countJiaoyi')
}

export function jiaoyiechegonglu () {
  return get('/etc/jiaoyiechegonglu')
}

export function shebeichenggongjiance() {
  return get('/etc/shebeichenggongjiance')
}

export function shelaingguiji () {
  return get('/etc/shelaingguiji')
}
