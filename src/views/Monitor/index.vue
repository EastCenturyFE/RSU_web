<template>
  <div id="monitor">
    <div class="amap-demo" id="amapContainer">
    </div>

    <div class="page-container">
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
            <img draggable="false" src="/static/Monitor/up.png" alt="" />
          </div>
        </div>
        <div class="car-item">
          <div class="block-style"></div>
          <span class="title">RSU交易额</span>
          <span class="value">
            125.25<sup>w</sup>
          </span>
          <div class="img-container">
            <img draggable="false" src="/static/Monitor/up.png" alt="" />
          </div>
        </div>
        <div class="car-item">
          <div class="block-style"></div>
          <span class="title">车辆总数</span>
          <span class="value">
            125.25<sup>w</sup>
          </span>
          <div class="img-container">
            <img draggable="false" src="/static/Monitor/up.png" alt="" />
          </div>
        </div>
      </div>

      <div class="list-container">
        <div class="list-item">
          <div class="tabs-container">
            车辆类型分析
          </div>
          <div class="table-container">
            <table>
              <tr class="table-header">
                <td>路段名称</td>
                <td>数量</td>
              </tr>
              <tr class="table-content">
                <td>假的路段</td>
                <td>假的数量</td>
              </tr>
              <tr>
                <td>假的路段</td>
                <td>假的数量</td>
              </tr>
              <tr>
                <td>假的路段</td>
                <td>假的数量</td>
              </tr>
              <tr>
                <td>假的路段</td>
                <td>假的数量</td>
              </tr>
              <tr>
                <td>假的路段</td>
                <td>假的数量</td>
              </tr>
              <tr>
                <td>假的路段</td>
                <td>假的数量</td>
              </tr>
              <tr>
                <td>假的路段</td>
                <td>假的数量</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="list-item">
           <div class="tabs-container">
            车辆类型分析
          </div>
          <div class="table-container">
            <table>
              <tr class="table-header">
                <td>路段名称</td>
                <td>数量</td>
              </tr>
              <tr class="table-content">
                <td>假的路段</td>
                <td>假的数量</td>
              </tr>
              <tr>
                <td>假的路段</td>
                <td>假的数量</td>
              </tr>
              <tr>
                <td>假的路段</td>
                <td>假的数量</td>
              </tr>
              <tr>
                <td>假的路段</td>
                <td>假的数量</td>
              </tr>
              <tr>
                <td>假的路段</td>
                <td>假的数量</td>
              </tr>
              <tr>
                <td>假的路段</td>
                <td>假的数量</td>
              </tr>
              <tr>
                <td>假的路段</td>
                <td>假的数量</td>
              </tr>
            </table>
          </div>
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
      // center: [121.59996, 31.197646],
      center: [116.418261, 39.921984],
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
      /* eslint-enable */
    })
  },
}
</script>

<style lang="less" scoped>
#monitor{
  min-height: calc(100vh - 55px);
  height: 100%;
  // -webkit-user-select: none;
  //   -moz-user-select: none;
  //   -ms-user-select: none;
  //   user-select: none;
  .amap-demo{
    height: auto;
    min-height: calc(100vh - 55px);
  }

  .page-container{
    position: absolute;
    z-index: 999;
    top: 55px;
    width: 100%;
    height: calc(100vh - 55px);
    pointer-events: none;
    padding: 0 50px;
    box-sizing: border-box;
  }

  .car-container{
    height: 90px;
    width: 1346px;
    margin: 0 auto;
    margin-top: 20px;
    display: grid;
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

  .list-container{
    height: 440px;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    .list-item{
      width: 504px;
      height: 100%;
      .tabs-container{
        pointer-events: auto;
        width: 170px;
        height: 40px;
        background-image: url('/static/Monitor/tabs-back.png');
        background-size: cover;
        text-align: center;
        line-height: 30px;
        font-size: 18px;
        color: #00ebff;
      }

      .table-container{
        pointer-events: auto;
        margin-top: 18px;
        height: 380px;
        background: rgba(0,8,47, .6);

        table{
          width: 100%;
        }
        tr{
          width: 100%;
        }
        .table-header{
          background: rgba(29,67,159, 4);
        }
        tr > td {
          height: 45px;
          text-align: center;
          line-height: 45px;
          font-size: 15px;
          border-bottom: 1px solid rgb(17, 44, 113);
        }
      }
    }
  }
}
</style>
