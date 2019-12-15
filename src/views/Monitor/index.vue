<template>
  <div
    id="monitor"
    v-loading.fullscreen="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div class="amap-demo" id="amapContainer"></div>

    <div class="page-container">
      <div class="car-container">
        <!-- <div v-for="(item, i) in carData" :key="i">
        </div>-->
        <div class="car-item">
          <div class="block-style"></div>
          <span class="title">系统日志总数</span>
          <span class="value">
            <number-roll :number="number" :add="add" :initData="number" />
            <!-- <sup>w</sup> -->
          </span>

          <span class="danwei">条</span>
          <!-- <div class="img-container">
            <img draggable="false" src="/static/Monitor/up.png" alt />
          </div> -->
        </div>
        <div class="car-item">
          <div class="block-style"></div>
          <span class="title">RSU交易额</span>
          <span class="value">
            <number-roll :number="number1" :add="add" :initData="number1" />
            <!-- <sup>w</sup> -->
          </span>
          <span class="danwei">元</span>

          <!-- <div class="img-container">
            <img draggable="false" src="/static/Monitor/up.png" alt />
          </div> -->
        </div>
        <div class="car-item">
          <div class="block-style"></div>
          <span class="title">车辆总数</span>
          <span class="value">
            <number-roll :number="number2" :add="add" :initData="number2" />
            <!-- <sup>w</sup> -->
          </span>
          <span class="danwei">辆</span>
          <!-- <div class="img-container">
            <img draggable="false" src="/static/Monitor/up.png" alt />
          </div> -->
        </div>
      </div>

      <div class="list-container">
        <div class="list-item">
          <div class="tabs-container">车辆轨迹监测</div>
          <div class="table-container">
            <div class="table-header">
              <table>
                <colgroup>
                  <col style="width: 150px; min-width: 150px;" />
                  <col style="width: 150px; min-width: 150px;" />
                  <col style="width: 150px; min-width: 150px;" />
                </colgroup>
                <thead>
                  <tr>
                    <th>路段</th>
                    <th>车牌号</th>
                    <th>车型</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="table-content">
              <table :class="{'table-animation': shelaingguiji.length >= 16}">
                <colgroup>
                  <col style="width: 150px; min-width: 150px;" />
                  <col style="width: 150px; min-width: 150px;" />
                  <col style="width: 150px; min-width: 150px;" />
                </colgroup>
                <tbody>
                  <tr @click="handleClick(item)" v-for="(item, i) in shelaingguiji" :key="i">
                    <td>{{item.name}}</td>
                    <td>{{item.chepai}}</td>
                    <td>{{item.chexing}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="list-item">
          <div class="tabs-container">设备成功率监测</div>
          <div class="table-container">
            <div class="table-header">
              <table>
                <colgroup>
                  <col style="width: 150px; min-width: 100px;" />
                  <col style="width: 100px; min-width: 100px;" />
                  <col style="width: 100px; min-width: 150px;" />
                  <col style="width: 100px; min-width: 150px;" />
                </colgroup>
                <thead>
                  <tr>
                    <th>门架编号</th>
                    <th>设备品牌</th>
                    <th>设备IP</th>
                    <th>成功率</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="table-content">
              <table :class="{'table-animation': shebeichenggongjiance.length >= 16}">
                <colgroup>
                  <col style="width: 100px; min-width: 100px;" />
                  <col style="width: 100px; min-width: 100px;" />
                  <col style="width: 150px; min-width: 150px;" />
                  <col style="width: 150px; min-width: 150px;" />
                </colgroup>
                <tbody>
                  <tr
                    v-for="(item, i) in shebeichenggongjiance"
                    :class="{'rsu-red': item.chenggong < 95}"
                    :key="i"
                  >
                    <td>{{item.name}}</td>
                    <td>{{item.leixing}}</td>
                    <td>{{item.ip}}</td>
                    <td>{{item.chenggong}} %</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="rsu-container">
        <div class="tabs-container">RSU交易成功率监测</div>
        <div class="table-container">
          <div class="table-header">
            <table>
              <colgroup>
                <col style="width: 170px; min-width: 150px;" />
                <col style="width: 150px; min-width: 150px;" />
                <col style="width: 150px; min-width: 150px;" />
                <col style="width: 150px; min-width: 150px;" />
              </colgroup>
              <thead>
                <tr>
                  <th>门架编号</th>
                  <th>RSU类型</th>
                  <th>RSU_IP</th>
                  <th>成功率</th>
                </tr>
              </thead>
            </table>
          </div>
          <div class="table-content">
            <table :class="{'table-animation': jiaoyiechegonglu.length >= 16}">
              <colgroup>
                <col style="width: 150px; min-width: 150px;" />
                <col style="width: 150px; min-width: 150px;" />
                <col style="width: 150px; min-width: 150px;" />
                <col style="width: 150px; min-width: 150px;" />
              </colgroup>
              <tbody>
                <tr
                  v-for="(item, i) in jiaoyiechegonglu"
                  :key="i"
                  :class="{'rsu-red': item.chengognlu < 95}"
                >
                  <td>{{item.name}}</td>
                  <td>{{item.leix}}</td>
                  <td>{{item.ip}}</td>
                  <td>{{item.chengognlu}} %</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NumberRoll from "./components/numberRoll";

import { getCountLog, getcountCheLinag, getcountJiaoyi, jiaoyiechegonglu, shebeichenggongjiance, shelaingguiji } from "./service.js";

export default {
  name: "MyTask",
  components: {
    NumberRoll
  },
  data() {
    return {
      number: 0,
      number1: 0,
      number2: 0,
      loading: false,
      add: 100000,
      jiaoyiechegonglu: [],
      shebeichenggongjiance: [],
      shelaingguiji: [],
      driving: null,
      temr: null,
      temr2: null
    };
  },
  methods: {
    initMap() {
      this.loading = true;
      /* eslint-disable */
      const map = (this.map = new AMap.Map("amapContainer", {
        zoom: 11.8,
        zooms: [10, 17],
        center: [113.658097, 34.745795],
        mapStyle: `amap://styles/${process.env.VUE_APP_MAP_STYLE}`,
        viewMode: "3D",
        pitch: 50,
        rotation: 25,
        skyColor: "red",
        showBuildingBlock: false
      }));

      map.on("complete", () => {
        this.loading = false;
      });

      var path1 = [
        [75.757904, 38.118117],
        [97.375719, 24.598057],
        [117.375719, 38.118117]
      ];


      // let OverlayGroup = new AMap.OverlayGroup([Polyline]);

      this.driving = new AMap.Driving({
        policy: AMap.DrivingPolicy.LEAST_TIME,
        map,
        showTraffic: false,
        hideMarkers: true,
        autoFitView: true
      });

      // this.map.add(OverlayGroup);
      /* eslint-enable */
    },
    async initCarData() {
      const countLog = await getCountLog();
      if (countLog.code === "success") {
        this.number = countLog.data.aDouble * 1;
      }

      const cheLinag = await getcountCheLinag();

      if (cheLinag.code === "success") {
        this.number2 = cheLinag.data.aDouble * 1;
      }

      const countJiaoyi = await getcountJiaoyi();
      if (countJiaoyi.code === "success") {
        // const count = parseInt((countJiaoyi.data.sums * 1 / 10000000))
        this.number1 = countJiaoyi.data.sums * 1
      }
    },
    async tableListData () {
      if (this.jiaoyiechegonglu.length >= 16) {
        this.jiaoyiechegonglu = this.jiaoyiechegonglu.splice(8, this.jiaoyiechegonglu.length)
      }

      if (this.shebeichenggongjiance.length >= 16) {
        this.shebeichenggongjiance = this.shebeichenggongjiance.splice(8, this.shebeichenggongjiance.length)
      }

      if (this.shelaingguiji.length >= 16) {
        this.shelaingguiji = this.shelaingguiji.splice(8, this.shelaingguiji.length)
      }
      const res = await jiaoyiechegonglu()
      const res1 = await shebeichenggongjiance()
      const res2 = await shelaingguiji()
      if (res.code === 'success') {
        this.jiaoyiechegonglu.push(...res.data.pageList)
      }

      if (res1.code === 'success') {
        this.shebeichenggongjiance.push(...res1.data.pageList)
      }

      if (res2.code === 'success') {
        this.shelaingguiji.push(...res2.data.pageList)
      }
    },
    handleClick (item) {
      const start = item.start.split(',')
      const end = item.end.split(',')
      this.driving.search(
        new AMap.LngLat(start[0], start[1]),
        new AMap.LngLat(end[0], end[1])
      )
    }
  },
  mounted() {
    this.initMap();
  },
  beforeDestroy() {
    clearInterval(this.temr)
    clearInterval(this.temr2)
  },
  created() {
    this.tableListData();
    this.initCarData();
    this.temr = setInterval(() => {
      this.tableListData();
    }, 6000)
    this.temr2 = setInterval(() => {
      this.initCarData();
    }, 2600)
  }
};
</script>

<style lang="less" scoped>
#monitor {
  // min-height: calc(100vh - 55px);
  min-height: 920px;
  height: calc(100vh - 55px);
  // height: 100%;
  .amap-demo {
    height: auto;
    height: 100%;
  }
  // 表格公用样式
  .table-list {
    table {
      width: 100%;
      border-collapse: collapse;
    }
    .table-header {
      background: rgba(29, 67, 159, 0.8);
    }
    .table-content {
      background: rgba(0, 8, 47, 0.8);
    }
    .table-content {
      overflow: hidden;
      table {
        margin-top: 0px;
      }
      .table-animation {
        transition: all 1.5s;
        margin-top: -328px;
      }

      .rsu-red{
        color: red;
      }
    }
    tr {
      width: 100%;
      text-align: center;
      line-height: 40px;
      border-bottom: 1px solid rgb(17, 44, 113);
      font-size: 15px;
    }
  }

  // 列表上方title样式
  .list-tite {
    pointer-events: auto;
    width: 170px;
    height: 40px;
    background-image: url("/static/Monitor/tabs-back.png");
    background-size: cover;
    text-align: center;
    line-height: 30px;
    font-size: 18px;
    color: #00ebff;
    overflow: hidden;
    transform: skewX(-20deg);
    margin-bottom: 6px;
  }

  .page-container {
    position: absolute;
    z-index: 999;
    top: 55px;
    width: 100%;
    min-width: 1400px;
    height: calc(100vh - 55px);
    pointer-events: none;
    padding: 0 50px;
    box-sizing: border-box;
  }

  .car-container {
    height: 90px;
    width: 1346px;
    margin: 0 auto;
    margin-top: 15px;
    display: grid;
    grid-template-columns: repeat(3, 460px);
    grid-template-rows: 90px;
    grid-column-gap: 48px;

    .car-item {
      pointer-events: auto;
      background: rgba(10, 24, 67, 0.8);
      border: 1px solid #0c3188;
      border-radius: 2px;
      display: flex;
      line-height: 90px;

      .block-style {
        width: 20px;
        height: 14px;
        margin-left: 30px;
        position: relative;

        &::after {
          content: "";
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

      .title {
        font-size: 16px;
        color: rgb(240, 237, 237);
        min-width: 130px;
        text-align: center;
      }

      .value {
        font-size: 36px;
        color: #00ebff;
        position: relative;
        sup {
          font-size: 10px;
          position: absolute;
          right: -10px;
          top: -12px;
        }
        &::before {
          content: "";
          display: inline-block;
          position: absolute;
          top: 70px;
          height: 2px;
          width: 100%;
          background: #00ebff;
        }

        &::after {
          content: "";
          position: absolute;
          right: 0;
          top: 68px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #00ebff;
        }
      }

      .danwei{
        margin-left: 10px;
        font-size: 24px;
      }

      .img-container {
        margin-left: 40px;
        img {
          vertical-align: middle;
        }
      }
    }
  }

  .list-container {
    height: 424px;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    .list-item {
      width: 504px;
      height: 100%;
      .tabs-container {
        .list-tite;
      }

      .table-container {
        pointer-events: auto;
        height: 366px;
        overflow: hidden;

        .table-list;
      }
    }
  }
  .btn-container {
    pointer-events: auto;
  }

  .rsu-container {
    min-height: 350px;
    // background: red;
    .tabs-container {
      .list-tite;
    }

    .table-container {
      pointer-events: auto;
      height: 370px;
      width: 100%;
      overflow: hidden;

      .table-list;
    }
  }
}
</style>
