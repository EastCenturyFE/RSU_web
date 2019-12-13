
<template>
  <div id="error-times">
    <div id='errorTimes_charts'></div>
  </div>
</template>

<script>
import { getErrorTime } from '../service'
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/line')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')

export default {
  name: 'ErrorTimes',
  components: {
  },
  data () {
    return {
      myChart: null,
    }
  },
  methods: {
    setChartOption (xAxisData, docCount) {
      // 指定图表的配置项和数据
      var option = {
        grid: {
          right: '18%',
        },
        tooltip: {},
        xAxis: {
          name: '系统名称',
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
          data: ['错误日志次数'],
          textStyle: {
            color: '#fff',
          },
        },
        series: [
          {
            name: '错误日志次数',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 1,
            lineStyle: {
              color: '#EF5081',
              width: 3,
            },
            itemStyle: {
              color: '#EF5081',
            },
            data: docCount,
          },
        ],
      }
      this.myChart.setOption(option)
      window.onresize = this.myChart.resize
    },
    // 初始化chart
    initChart (xAxisData, docCount) {
      const container = document.querySelector('#errorTimes_charts')
      this.myChart = echarts.init(container)
      this.setChartOption(xAxisData, docCount)
    },
    async getData () {
      let res = await getErrorTime()
      if (res.code === 'success') {
        let { ms, pageList } = res.data
        console.log(ms)
        let docCount = []
        let xAxisData = []
        pageList.forEach(item => {
          let { doc_count, key } = item
          docCount.push(doc_count)
          xAxisData.push(key)
        })
        this.initChart(xAxisData, docCount)
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
#error-times {
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
