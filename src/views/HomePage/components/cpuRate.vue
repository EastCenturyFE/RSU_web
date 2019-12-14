
<template>
  <div id="cpu-rate">
    <div id='cpuRate_charts'></div>
  </div>
</template>

<script>
import { getCpuRate } from '../service'
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
    setChartOption (xAxisData, data1) {
      // 指定图表的配置项和数据
      var option = {
        grid: {
          right: '15%',
          bottom: '35%',
        },
        tooltip: {},
        xAxis: {
          name: '时间',
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
            name: '(%)',
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
          data: ['cpu占有率'],
          textStyle: {
            color: '#fff',
          },
        },
        series: [
          {
            name: 'cpu占有率',
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
        ],
      }
      this.myChart.setOption(option)
      window.onresize = this.myChart.resize
    },
    // 初始化chart
    initChart (xAxisData, data1) {
      const container = document.querySelector('#cpuRate_charts')
      this.myChart = echarts.init(container)
      this.setChartOption(xAxisData, data1)
    },
    async getData () {
      // let res = await getCarType()
      // if (res.code === 'success') {
      //   let { ms, pageList } = res.data
      //   console.log(ms, pageList)

      //   // xAxisData-横坐标数据，后边的都是serise里的data数据
      //   this.initChart(xAxisData, upNunmsSumData, downNumsSumData)
      // }
      let xAxisData = ['12:00', '12:10', '12:20', '12:30', '12:40']
      let data1 = [40, 60, 40, 90, 98]
      this.initChart(xAxisData, data1)
    },
  },
  created () {},
  mounted () {
    this.getData()
  },
}
</script>

<style lang="less" scoped>
#cpu-rate {
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
