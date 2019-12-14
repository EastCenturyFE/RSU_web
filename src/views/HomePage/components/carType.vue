
<template>
  <div id="car-type">
    <div id='carType_charts'></div>
  </div>
</template>

<script>
import { getCarType } from '../service'
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/line')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')

export default {
  name: 'UploadCount',
  components: {
  },
  data () {
    return {
      myChart: null,
    }
  },
  methods: {
    setChartOption (xAxisData, data1, data2, data3) {
      // 指定图表的配置项和数据
      var option = {
        grid: {
          right: '15%',
          bottom: '35%',
        },
        tooltip: {},
        xAxis: {
          name: '路段',
          nameTextStyle: {
            color: '#D9DBE2',
            fontSize: 12,
            align: 'left',
          },
          nameLocation: 'end',
          data: xAxisData,
          axisLine: {
            lineStyle: {
              color: '#082B72',
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#082B72',
            },
          },
          axisTick: {
            show: false,
          },
          axisPointer: {
            show: true,
          },
          axisLabel: {
            show: true,
            rotate: -45,
            textStyle: {
              color: '#D9DBE2',
              fontSize: '12',
            },
          },
        },
        yAxis: [
          {
            type: 'value',
            position: 'left',
            name: '(辆)',
            nameLocation: 'end',
            splitLine: {
              show: true,
              lineStyle: {
                color: '#082B72',
              },
            },
            axisTick: {
              show: false,
            },
            nameTextStyle: {
              color: '#D9DBE2',
              fontSize: 12,
              align: 'left',
            },
            axisLine: {
              lineStyle: {
                color: '#082B72',
              },
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#D9DBE2',
                fontSize: '12',
              },
            },
          },
        ],
        legend: {
          top: 10,
          left: 'center',
          data: ['货车', '客车', '拖拉机'],
          textStyle: {
            color: '#fff',
          },
        },
        series: [
          {
            name: '货车',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 1,
            lineStyle: {
              color: '#1CC082',
              width: 3,
            },
            itemStyle: {
              color: '#1CC082',
            },
            data: data1,
          },
          {
            name: '客车',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 1,
            lineStyle: {
              color: '#F85182',
              width: 3,
            },
            itemStyle: {
              color: '#F85182',
            },
            data: data2,
          },
          {
            name: '拖拉机',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 1,
            lineStyle: {
              color: '#F85182',
              width: 3,
            },
            itemStyle: {
              color: '#F85182',
            },
            data: data3,
          },
        ],
      }
      this.myChart.setOption(option)
      window.onresize = this.myChart.resize
    },
    // 初始化chart
    initChart (xAxisData, data1, data2, data3) {
      const container = document.querySelector('#carType_charts')
      this.myChart = echarts.init(container)
      this.setChartOption(xAxisData, data1, data2, data3)
    },
    async getData () {
      // let res = await getCarType()
      // if (res.code === 'success') {
      //   let { ms, pageList } = res.data
      //   console.log(ms, pageList)

      //   // xAxisData-横坐标数据，后边的都是serise里的data数据
      //   this.initChart(xAxisData, upNunmsSumData, downNumsSumData)
      // }
      let xAxisData = ['路段1', '路段2', '路段3', '路段4', '路段5']
      let data1 = [100, 200, 300, 200, 400]
      let data2 = [50, 100, 200, 300, 400]
      let data3 = [10, 20, 60, 40, 50]
      this.initChart(xAxisData, data1, data2, data3)
    },
  },
  created () {},
  mounted () {
    this.getData()
  },
}
</script>

<style lang="less" scoped>
#car-type {
  width: 100%;
  height: 100%;
  padding: 10px;
  >div{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
