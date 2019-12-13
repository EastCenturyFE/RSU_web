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
            <ul>
              <li class="table-header">
                <div>路段名称</div>
                <div>类型</div>
                <div>数量</div>
              </li>
            </ul>
            <ul class="table-data">
              <li v-for="(item, i) in tableDta" :class="[animation ? `li-animation-${i}` : '']" :key="i">
                <div>{{item.name}}</div>
                <div>{{item.aa}}</div>
                <div>{{item.type}}</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="list-item">
           <div class="tabs-container">
            车辆类型分析
          </div>
          <div class="table-container">
            <ul>
              <li class="table-header">
                <div>路段名称</div>
                <div>类型</div>
                <div>数量</div>
              </li>
            </ul>
            <ul class="table-data">
              <li v-for="(item, i) in tableDta" :class="[animation ? `li-animation-${i}` : '']" :key="i">
                <div>{{item.name}}</div>
                <div>{{item.aa}}</div>
                <div>{{item.type}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="btn-container">
        <el-button @click="handleClick" type="primary">模拟动画按钮</el-button>
      </div>
    </div>

  </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from 'vue-amap'

const moniData = [
  {
    name: 'moniData_name',
    aa: 'moniData_aa',
    type: 'moniData_type',
  },
  {
    name: 'moniData_name',
    aa: 'moniData_aa',
    type: 'moniData_type',
  },
  {
    name: 'moniData_name',
    aa: 'moniData_aa',
    type: 'moniData_type',
  },
  {
    name: 'moniData_name',
    aa: 'moniData_aa',
    type: 'moniData_type',
  },
  {
    name: 'moniData_name',
    aa: 'moniData_aa',
    type: 'moniData_type',
  },
  {
    name: 'moniData_name',
    aa: 'moniData_aa',
    type: 'moniData_type',
  },
  {
    name: 'moniData_name',
    aa: 'moniData_aa',
    type: 'moniData_type',
  },
  {
    name: 'moniData_name',
    aa: 'moniData_aa',
    type: 'moniData_type',
  },
  {
    name: 'moniData_name',
    aa: 'moniData_aa',
    type: 'moniData_type',
  },
]

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
      // center: [116.418261, 39.921984],
      value1: 12,
      tableDta: [
        {
          name: '223',
          aa: '13',
          type: 'ahah',
        },
        {
          name: '223',
          aa: '13',
          type: 'ahah',
        },
        {
          name: '223',
          aa: '13',
          type: 'ahah',
        },
        {
          name: '223',
          aa: '13',
          type: 'ahah',
        },
        {
          name: '223',
          aa: '13',
          type: 'ahah',
        },
        {
          name: '223',
          aa: '13',
          type: 'ahah',
        },
        {
          name: '223',
          aa: '13',
          type: 'ahah',
        },
        {
          name: '223',
          aa: '13',
          type: 'ahah',
        },
      ],
    }
  },
  computed: {
    animation () {
      return this.tableDta.length > 8
    },
  },
  methods: {
    handleClick () {
      if (this.animation) {
        return
      }
      this.tableDta.push(...moniData)
      setTimeout(() => {
        this.tableDta = [...this.tableDta.slice(9, this.tableDta.length)]
      }, 3000)
    },
  },
  created () {
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
        overflow: hidden;
        transform: skewX(-20deg);
      }

      .table-container{
        pointer-events: auto;
        margin-top: 18px;
        height: 366px;
        background: rgba(0,8,47, .6);
        overflow: hidden;

        table{
          width: 100%;
        }
        li{
          width: 100%;
          display: flex;
          height: 41px;
          line-height: 40px;
          border-bottom: 1px solid rgb(17, 44, 113);
          box-sizing: border-box;
        }
        .table-header{
          background: rgba(29,67,159, .8);
        }
        .table-data{
          height: 326px;
          overflow: hidden;
        }
        li > div {
          height: 100%;
          flex-grow: 1;
          text-align: center;
          font-size: 15px;
          overflow: hidden;
        }

        .li-animation-0{
          transition: margin 1.5s;
          margin-top: -328px
        }
      }
    }
  }
  .btn-container{
    pointer-events: auto;
  }
}
</style>
