
<template>
  <div id="success-rate">
    <div id='successRate_charts'></div>
  </div>
</template>

<script>

import { getSuccessRate } from '../service'
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/line')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')

export default {
  name: 'SuccessRate',
  components: {
  },
  data () {
    return {
      myChart: null,
    }
  },
  methods: {
    setChartOption (xAxisData, successRateAVGData, tradingRateAVGData) {
      // 指定图表的配置项和数据
      var option = {
        tooltip: {},
        grid: {
          right: '15%',
          bottom: '35%',
        },
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
          data: ['交易额平均成功率', '设备平均成功率'],
          textStyle: {
            color: '#fff',
          },
        },
        series: [
          {
            name: '交易额平均成功率',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 1,
            lineStyle: {
              color: '#ffac53',
              width: 3,
            },
            itemStyle: {
              color: '#ffac53',
            },
            data: successRateAVGData,
          },
          {
            name: '设备平均成功率',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 1,
            lineStyle: {
              color: '#3890f2',
              width: 3,
            },
            itemStyle: {
              color: '#3890f2',
            },
            data: tradingRateAVGData,
          },
        ],
      }
      this.myChart.setOption(option)
      window.onresize = this.myChart.resize
    },
    // 初始化chart
    initChart (xAxisData, successRateAVGData, tradingRateAVGData) {
      const container = document.querySelector('#successRate_charts')
      this.myChart = echarts.init(container)
      this.setChartOption(xAxisData, successRateAVGData, tradingRateAVGData)
    },
    async getData () {
      let res = await getSuccessRate()
      if (res.code === 'success') {
        let { ms, pageList } = res.data
        console.log(ms)
        let successRateAVGData = []
        let tradingRateAVGData = []
        let xAxisData = []
        pageList.forEach(item => {
          let { successRateAVG, tradingRateAVG, key } = JSON.parse(item)
          successRateAVGData.push(successRateAVG.value)
          tradingRateAVGData.push(tradingRateAVG.value)
          xAxisData.push(key)
        })
        this.initChart(xAxisData, successRateAVGData, tradingRateAVGData)
      }
    },
  },
  created () {
  },
  mounted () {
    this.getData()
  },
}
</script>

<style lang="less" scoped>
#success-rate {
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
