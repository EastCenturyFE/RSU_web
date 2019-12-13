<template>
  <div id="monitor">
    <div class="amap-demo" id="amapContainer">
    </div>

    <div class="car-container">
      <!-- <div v-for="(item, i) in carData" :key="i">
      </div> -->
      <div class="car-item">
        <div class="block-style"></div>
        <span class="title">系统日志总数</span>
        <span class="value">
          125.25<sup>w</sup>
        </span>
        <div class="img-container">
          <img src="/static/Monitor/up.png" alt="" />
        </div>
      </div>
      <div class="car-item">
        <div class="block-style"></div>
        <span class="title">RSU交易额</span>
        <span class="value">
          125.25<sup>w</sup>
        </span>
        <div class="img-container">
          <img src="/static/Monitor/up.png" alt="" />
        </div>
      </div>
      <div class="car-item">
        <div class="block-style"></div>
        <span class="title">车辆总数</span>
        <span class="value">
          125.25<sup>w</sup>
        </span>
        <div class="img-container">
          <img src="/static/Monitor/up.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from 'vue-amap'

export default {
  name: 'MyTask',
  components: {
  },
  data () {
    return {
      map: null,
      AMapManager,
      zoom: 12,
      center: [121.59996, 31.197646],
      value1: 12,
      carData: [
        {
          name: 'RSU交易额',
          value: '125.25',
        },
        {
          name: 'RSU交易额1',
          value: '125.25',
        },
        {
          name: 'RSU交易额2',
          value: '125.25',
        },
        {
          name: 'RSU交易额3',
          value: '125.25',
        },
      ],
    }
  },
  methods: {
  },
  async created () {
    lazyAMapApiLoaderInstance.load().then(() => {
      /* eslint-disable */
      this.map = new AMap.Map('amapContainer', {
        zoom: 11.8,
        zooms: [10, 17],
        enter: [114.425081, 34.554875],
        mapStyle: `amap://styles/${process.env.VUE_APP_MAP_STYLE}`,
        viewMode: '3D',
        pitch: 50,
        rotation: 25,
        skyColor: 'red',
        showBuildingBlock: false,
      })
      // this.map.AmbientLight = new AMap.Lights.AmbientLight([0,0,0],0.1)
      // this.map.DirectionLight = new AMap.Lights.DirectionLight([10,0,1],[0,0,1],0.6);
      /* eslint-enable */
    })
  },
}
</script>

<style lang="less" scoped>
#monitor{
  height: calc(100vh - 55px);
  .amap-demo{
    height: 100%;
  }

  .car-container{
    height: 90px;
    position: absolute;
    width: 1346px;
    top: 80px;
    left: 50%;
    margin-left: -673px;
    z-index: 999;
    display: grid;
    pointer-events: none;
    grid-template-columns: repeat(3, 418px);
    grid-template-rows: 90px;
    grid-column-gap: 48px;

    .car-item{
      pointer-events:auto;
      background: rgba(10, 24, 67, .8);
      border: 1px solid #0c3188;
      border-radius: 2px;
      display: flex;
      line-height: 90px;

      .block-style{
        width: 20px;
        height: 14px;
        margin-left: 30px;
        position: relative;

        &::after{
          content: '';
          position: absolute;
          top: 38px;
          left: 0;
          width: 5px;
          height: 14px;
          background: #00ebff;
          transform: skewX(-30deg);
          box-shadow: 10px 0 0 #00ebff;
        }
      }

      .title{
        font-size: 16px;
        color: rgb(240,237,237);
        // margin: 0 28px 0 20px;
        min-width: 130px;
        text-align: center;
      }

      .value{
        font-size: 36px;
        color: #00ebff;
        position: relative;
        sup{
          font-size: 10px;
          position: absolute;
          right: -6px;
          top: -12px;
        }
        &::before{
          content: '';
          display: inline-block;
          position: absolute;
          top: 70px;
          height: 2px;
          width: 100%;
          background: #00ebff;
        }

        &::after{
          content: '';
          position: absolute;
          right: 0;
          top: 68px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #00ebff;
        }
      }

      .img-container{
        margin-left: 40px;
        img{
          vertical-align: middle;
        }
      }

    }
  }
}
</style>
