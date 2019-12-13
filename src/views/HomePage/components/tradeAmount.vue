
<template>
  <div id="trade-amount">
    <div id='tradeAmount_charts'></div>
  </div>
</template>

<script>
import { getTradeAmount } from '../service'

// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/line')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')

export default {
  name: 'TradeAmount',
  components: {
  },
  data () {
    return {
      myChart: null,
    }
  },
  methods: {
    setChartOption (xAxisData, reqTotalSumData) {
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
            name: '(次)',
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
          data: ['交易金额'],
          textStyle: {
            color: '#fff',
          },
        },
        series: [
          {
            name: '交易金额',
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
            data: reqTotalSumData,
          },
        ],
      }
      this.myChart.setOption(option)
      window.onresize = this.myChart.resize
    },
    // 初始化chart
    initChart (xAxisData, reqTotalSumData) {
      const container = document.querySelector('#tradeAmount_charts')
      this.myChart = echarts.init(container)
      this.setChartOption(xAxisData, reqTotalSumData)
    },
    async getData () {
      let res = await getTradeAmount()
      if (res.code === 'success') {
        let { ms, pageList } = res.data
        console.log(ms)
        let reqTotalSumData = []
        let xAxisData = []
        pageList.forEach(item => {
          let { reqTotalSum, key } = JSON.parse(item)
          reqTotalSumData.push(reqTotalSum.value)
          xAxisData.push(key)
        })
        this.initChart(xAxisData, reqTotalSumData)
      }
    },
  },
  created () {},
  mounted () {
    this.getData()
  },
}
</script>

<style lang="less" scoped>
#trade-amount {
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
