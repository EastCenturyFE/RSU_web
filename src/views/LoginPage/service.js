/*
 * @Description:
 * @Author: YOYO 792611446@qq.com
 * @Date: 2019-12-13 16:35:38
 * @LastEditors: YOYO 792611446@qq.com
 * @LastEditTime: 2019-12-13 22:19:29
 */
import request from '@/utils/request'

// 请求系统日志列表
export async function pageLogin (params) {
  return request.post('/home/logs/', params)
}
