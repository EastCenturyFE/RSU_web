import { get } from '@/utils/request'

// 获取系统日志数量
export function getCountLog () {
  return get('/etc/countLog')
}
