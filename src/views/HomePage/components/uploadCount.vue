
<template>
  <div id="upload-count">
    <div id='uploadCount_charts'></div>
  </div>
</template>

<script>

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
    setChartOption () {
      // 指定图表的配置项和数据
      var option = {
        grid: {
          right: '15%',
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
          data: ['1', '23', '25', '4', '45', '6', '7', '78', '78', '65'],
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
          data: ['上传数量', '未上传数量'],
          textStyle: {
            color: '#fff',
          },
        },
        series: [
          {
            name: '上传数量',
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
            data: [1, 23, 25, 4, 45, 6, 7, 78, 78, 65],
          },
          {
            name: '未上传数量',
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
            data: [2, 5, 7, 5, 7, 5, 5, 10, 10, 60],
          },
        ],
      }
      this.myChart.setOption(option)
      window.onresize = this.myChart.resize
    },
    // 初始化chart
    initChart (selector) {
      const container = document.querySelector(selector)
      this.myChart = echarts.init(container)
      this.setChartOption()
    },
  },
  created () {},
  mounted () {
    console.log(123123123123)
    this.initChart('#uploadCount_charts')
  },
}
</script>

<style lang="less" scoped>
#upload-count {
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
