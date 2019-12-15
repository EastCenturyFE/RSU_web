// 日志头部
// 模拟系统日志列表数据
const logHeader = [{
  label: 'RSU标识',
  prop: 'rsuId',
},
{
  label: '道路标识',
  prop: 'rsuId',
},
{
  label: '门架标识',
  prop: 'doorFrame',
  width: 180,
},
// {
//   label: 'sysName',
//   prop: '系统名称',
// },
{
  label: '日志级别',
  prop: 'level',
  width: 90,
},
{
  label: '环境',
  prop: 'dev',
  width: 90,
},
{
  label: '方法名称',
  prop: 'methodName',
  width: 90,
},
{
  label: '请求地址',
  prop: 'requestUrl',
  width: 180,
},
{
  label: '请求类型',
  prop: 'requestType',
  width: 90,
},
{
  label: 'IP',
  prop: 'clientHost',
  width: 120,
},
{
  label: '耗时(ms)',
  prop: 'requestTime',
  width: 90,
},
{
  label: '创建时间',
  prop: 'createTime',
  width: 180,
},
]
export const searchSysLogList = [{
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
}]

// 模拟rsu信息日志列表数据
const rsuHeader = [{
  label: '设备id',
  prop: 'rsuId',
},
{
  label: '主备',
  prop: 'types',
  width: 60
},
{
  label: '车牌号',
  prop: 'plateNo',
  width: 100
},
{
  label: 'cpu(%)',
  prop: 'cpu',
  width: 100
},
{
  label: '内存(G)',
  prop: 'mem',
  width: 100
},
{
  label: '负载(%)',
  prop: 'load',
  width: 100
},
{
  label: 'tcp(ms)',
  prop: 'tcp',
  width: 100
},
{
  label: '磁盘容量(G)',
  prop: 'size',
  width: 110
},
{
  label: '上传数量(条)',
  prop: 'upNunms',
  width: 120
},
{
  label: '下载数量(条)',
  prop: 'downNums',
  width: 120
},
{
  label: '交易金额（元）',
  prop: 'reqTotal',
  width: 140
},
{
  label: '设备成功率(%)',
  prop: 'successRate',
  width: 140
},
{
  label: '交易成功率(%)',
  prop: 'tradingRate',
  width: 140
},
{
  label: '创建时间',
  prop: 'createTime',
  width: 180
},
]
export const rsuLogList = [{
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
  roadId: '',
}]

// 模拟车辆信息日志列表数据
const carHeader = [{
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
  width: 100
},
// {
//   label: '出站时间',
//   prop: 'exitTime',
// },
{
  label: '入站时间',
  prop: 'entryTime',
},
{
  label: '车牌号',
  prop: 'plateNo',
  width: 100
},
{
  label: '操作人id',
  prop: 'operatorId',
},
{
  label: '车速(Km/h)',
  prop: 'speed',
  width: 100
},
{
  label: '创建时间',
  prop: 'createTime',
},
]
export const carLogLists = [{
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

const log = {
  startTime: '',
  endTime: '',
  rsuId: '',
  doorFrame: '',
  sysName: '',
}
const rsu = {
  startTime: '',
  endTime: '',
  rsuId: '',
  types: '',
  plateNo: '',
}
const car = {
  startTime: '',
  endTime: '',
  equipId: '',
  roadId: '',
  carType: '',
}

export const tabParams = {
  log,
  rsu,
  car,
}
