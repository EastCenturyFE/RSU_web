// 日志头部
// 模拟系统日志列表数据
const logHeader = [
  {
    label: 'rsu标识',
    prop: 'rsuId',
  },
  {
    label: '道路标识',
    prop: 'rsuId',
  },
  {
    label: '门架标识',
    prop: 'doorFrame',
  },
  {
    label: 'sysName',
    prop: '系统名称',
  },
  {
    label: '日志级别',
    prop: 'level',
  },
  {
    label: '环境',
    prop: 'dev',
  },
  {
    label: '方法名称',
    prop: 'methodName',
  },
  {
    label: '请求地址',
    prop: 'requestUrl',
  },
  {
    label: '请求类型',
    prop: 'requestType',
  },
  {
    label: 'ip',
    prop: 'clientHost',
  },
  {
    label: '耗时',
    prop: 'requestTime',
  },
  {
    label: '发生时间',
    prop: 'happenTime',
  },
]
export const searchSysLogList = [
  {
    lines: '0',
    rsuId: '11',
    roadId: '2123',
    doorFrame: '门架',
    pileNo: 'K22+11',
    sysName: '系统名',
    level: '1级',
    dev: 'codova',
    methodName: 'searchSysLog',
    requestUrl: '/etc/searchSysLog/',
    requestType: 'GET',
    clientHost: '8080',
    requestTime: '2s',
    happenTime: '2019-12-12 10:10:00',
    resultJson: '',
    errorJson: '',
  },
]

// 模拟rsu信息日志列表数据
const rsuHeader = [
  {
    label: '设备id',
    prop: 'rsuId',
  },
  {
    label: '主备',
    prop: 'types',
  },
  {
    label: 'cpu',
    prop: 'cpu',
  },
  {
    label: '内存',
    prop: 'mem',
  },
  {
    label: '负载',
    prop: 'load',
  },
  {
    label: 'tcp',
    prop: 'tcp',
  },
  {
    label: '磁盘容量',
    prop: 'size',
  },
  {
    label: '上传数量',
    prop: 'upNunms',
  },
  {
    label: '下载数量',
    prop: 'downNums',
  },
  {
    label: '总数量',
    prop: 'reqTotal',
  },
  {
    label: '设备成功率',
    prop: 'successRate',
  },
  {
    label: '交易成功率',
    prop: 'tradingRate',
  },
  {
    label: '发生时间',
    prop: 'happenTime',
  },
]
export const rsuLogList = [
  {
    'rsuId': '62476271-4844-44ec-ae3d-937fc196bd10',
    'types': '备',
    'cpu': '0.4271320819252305',
    'mem': 23,
    'load': '3.6546485732149314',
    'tcp': '1',
    'size': '2G',
    'plateNo': '豫P129U6',
    'upNunms': '3',
    'downNums': '35',
    'reqTotal': '44',
    'successRate': '140194705',
    'tradingRate': '97.998',
    'happenTime': '2019-12-12 18:10:18',
  },
  {
    'rsuId': '7a04fe24-8a52-4ad5-bb11-4be143b153b6',
    'types': '备',
    'cpu': '0.45903105716453313',
    'mem': 37,
    'load': '6.224066742129816',
    'tcp': '5',
    'size': '13G',
    'plateNo': '豫P129U6',
    'upNunms': '19',
    'downNums': '3',
    'reqTotal': '0',
    'successRate': '753002931',
    'tradingRate': '99.998',
    'happenTime': '2019-12-13 02:10:18',
  },
  {
    'rsuId': 'def00b0a-8340-4547-beb9-3c72bf6f959f',
    'types': '备',
    'cpu': '0.3426283869717973',
    'mem': 38,
    'load': '8.255926162306462',
    'tcp': '9',
    'size': '15G',
    'plateNo': '豫P129U6',
    'upNunms': '10',
    'downNums': '43',
    'reqTotal': '6',
    'successRate': '1697702276',
    'tradingRate': '97.998',
    'happenTime': '2019-12-12 20:10:18',
  },
  {
    'rsuId': '5f23ae95-b76f-49bd-b768-045239718958',
    'types': '主',
    'cpu': '0.45415833363835456',
    'mem': 32,
    'load': '0.9774056959477473',
    'tcp': '5',
    'size': '3G',
    'plateNo': '豫P129U6',
    'upNunms': '4',
    'downNums': '31',
    'reqTotal': '47',
    'successRate': '-1012858715',
    'tradingRate': '97.998',
    'happenTime': '2019-12-13 00:10:18',
  },
  {
    'rsuId': '5370298a-8388-4dab-9057-f2c3b703cc80',
    'types': '备',
    'cpu': '0.46233204186932464',
    'mem': 40,
    'load': '6.163025225925879',
    'tcp': '15',
    'size': '1G',
    'plateNo': '豫P129U6',
    'upNunms': '40',
    'downNums': '4',
    'reqTotal': '35',
    'successRate': '-1674264145',
    'tradingRate': '97.998',
    'happenTime': '2019-12-13 00:10:18',
  },
]

// 模拟车辆信息日志列表数据
const carHeader = [
  {
    label: '设备',
    prop: 'equipId',
  },
  {
    label: '路段id',
    prop: 'roadId',
  },
  {
    label: '出站id',
    prop: 'exitStationId',
  },
  {
    label: '出站时间',
    prop: 'exitTime',
  },
  {
    label: '入栈时间',
    prop: 'entryTime',
  },
  {
    label: '车牌号',
    prop: 'plateNo',
  },
  {
    label: '操作人id',
    prop: 'operatorId',
  },
  {
    label: '车速',
    prop: 'speed',
  },
]
export const carLogLists = [
  {
    'equipId': 'aae67350-260e-491b-b055-ff9a216dc965',
    'roadId': '110104438',
    'carType': 'A',
    'netId': '41',
    'exitStationId': '33025',
    'exitTime': null,
    'entryTime': '2019-12-13 03:37:18',
    'entryStationId': '2019-12-12 18:37:18',
    'plateNo': '豫P129U6',
    'passcard': '34010902220100385425',
    'operatorId': '110104438',
    'speed': '89',
  },
  {
    'equipId': '23e2edf6-9809-4e3e-a9d5-2ce42391d98d',
    'roadId': '110102122',
    'carType': 'A',
    'netId': '41',
    'exitStationId': '33020',
    'exitTime': null,
    'entryTime': '2019-12-13 03:37:18',
    'entryStationId': '2019-12-12 18:37:18',
    'plateNo': '豫P129U6',
    'passcard': '37011801230201752857',
    'operatorId': '210104434',
    'speed': '144',
  },
  {
    'equipId': '0fd9351b-b4bc-4cd4-9de6-a2c4ccec5a60',
    'roadId': '110104434',
    'carType': 'F',
    'netId': '41',
    'exitStationId': '33020',
    'exitTime': null,
    'entryTime': '2019-12-13 03:37:18',
    'entryStationId': '2019-12-12 18:37:18',
    'plateNo': '豫P129U6',
    'passcard': '41011724221103026985',
    'operatorId': '110304438',
    'speed': '84',
  },
  {
    'equipId': 'e073d71d-100a-4f8a-adf0-e73cd8b67f86',
    'roadId': '110104538',
    'carType': 'D',
    'netId': '41',
    'exitStationId': '33025',
    'exitTime': null,
    'entryTime': '2019-12-13 03:37:18',
    'entryStationId': '2019-12-12 18:37:18',
    'plateNo': '豫P129U6',
    'passcard': '34010902220100385425',
    'operatorId': '110102122',
    'speed': '101',
  },
  {
    'equipId': 'bb371864-ff9a-451a-a39b-f9be1e4ff1ad',
    'roadId': '110104138',
    'carType': 'F',
    'netId': '41',
    'exitStationId': '33026',
    'exitTime': null,
    'entryTime': '2019-12-13 03:37:18',
    'entryStationId': '2019-12-12 18:37:18',
    'plateNo': '豫P129U6',
    'passcard': '32011702220000028269',
    'operatorId': '110102122',
    'speed': '135',
  },
]

export const header = {
  logHeader,
  rsuHeader,
  carHeader,
}
