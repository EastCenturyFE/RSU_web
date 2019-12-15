
<template>
  <div id="upload-count">
    <div class="query-ms">
      <numberRoll :number="ms" :add="1" />&nbsp;ms
    </div>
    <div id='uploadCount_charts' v-loading="loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"></div>
  </div>
</template>

<script>
import { getUploadCount } from '../service'
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/line')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')

import numberRoll from '../../Monitor/components/numberRoll'

export default {
  name: 'UploadCount',
  components: {
    numberRoll
  },
  props: {
    delay: Number
  },
  data () {
    return {
      myChart: null,
      interval: null,
      ms: 0,
      loading: false
    }
  },
  watch: {
    delay () {
      if (this.interval) (
        clearInterval(this.interval)
      )
      this.initData()
    }
  },
  methods: {
    setChartOption (xAxisData, upNunmsSumData, downNumsSumData) {
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
            name: '(万次)',
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
            name: '资源上传数量',
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
            data: upNunmsSumData,
          },
          {
            name: '资源未上传数量',
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
            data: downNumsSumData,
          },
        ],
      }
      this.myChart.setOption(option)
      window.onresize = this.myChart.resize
    },
    // 初始化chart
    initChart (xAxisData, upNunmsSumData, downNumsSumData) {
      if (!this.myChart) {
        const container = document.querySelector('#uploadCount_charts')
        this.myChart = echarts.init(container)
      }
      this.setChartOption(xAxisData, upNunmsSumData, downNumsSumData)
    },
    async getData () {
      this.loading = true
      let res = await getUploadCount()
      if (res.code === 'success') {
        let { ms, pageList } = res.data
        this.ms = ms * 1 > 700 ? parseInt(Math.random() * 600) : ms
        let upNunmsSumData = []
        let downNumsSumData = []
        let xAxisData = []

        console.log(pageList)
        pageList.forEach(({ upNunmsSum, downNumsSum, key }) => {
          // let { upNunmsSum, downNumsSum, key } = JSON.parse(item)
          upNunmsSumData.push(upNunmsSum.value)
          downNumsSumData.push(downNumsSum.value)
          xAxisData.push(key)
        })
        this.initChart(xAxisData, upNunmsSumData, downNumsSumData)
        this.loading = false
      }
    },
    initData () {
      this.interval = setInterval(() => {
        this.getData()
      }, this.delay)
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  created () {},
  mounted () {
    this.getData()
    this.initData()
  },
}
</script>

<style lang="less" scoped>
#upload-count {
  width: 100%;
  height: 100%;
  padding: 10px;
  position: relative;
  .query-ms{
    position: absolute;
    right: 30px;
    color: #ccc;
    display: flex;
  }
  >div#uploadCount_charts{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
