<template>
  <div id="monitor">
    <!-- <el-amap ref="map" vid="amapContainer" :amap-manager="AMapManager"
    :center="center" :zoom="zoom" class="amap-demo" mapStyle="ab56ea6d2065aadeee5cb62e09b107a1">
    </el-amap> -->

    <div class="amap-demo" id="amapContainer">
    </div>

    <div class="car-container">
        <el-slider v-model="value1"></el-slider>
      <!-- <div v-for="(item, i) in carData" :key="i">
      </div> -->
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
      new AMap.Map('amapContainer', {
        zoom: 4,
        resizeEnable: true,
        center: [121.59996, 31.197646],
        mapStyle: `amap://styles/${process.env.VUE_APP_MAP_STYLE}`,
        viewMode: '3D',
        pitch: 50,
        rotation: 25,
      })    
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
    height: 80px;
    position: absolute;
    top: 100px;
    width: 100vw;
    z-index: 999;
    background: #fff;
  }
}
</style>
