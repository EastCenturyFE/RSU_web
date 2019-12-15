<!--
 * @Description: 请输入当前文件描述
 * @Author: xiao xin (834529118@qq.com)
 * @Date: 2019-12-14 18:02:49
 * @LastEditors: xiao xin (834529118@qq.com)
 * @LastEditTime: 2019-12-15 22:51:44
 -->
<template>
  <div id="home-page">
    <div class="vertical-box">
      <div class="dynamic">
        <el-select v-model="delay" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="box">
        <div>
          <SuccessRate :delay="delay" />
        </div>
        <div>
          <ErrorTimes :delay="delay" />
        </div>
        <div>
          <TradeAmount :delay="delay" />
        </div>
      </div>
      <div class="box">
        <div>
          <UploadCount :delay="delay" />
        </div>
        <div>
          <CarType :delay="delay" />
        </div>
        <div>
          <CpuRate :delay="delay" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SuccessRate from "./components/successRate";
import ErrorTimes from "./components/errorTimes";
import TradeAmount from "./components/tradeAmount";
import UploadCount from "./components/uploadCount";
import CarType from "./components/carType";
import CpuRate from "./components/cpuRate";


export default {
  name: "HomePage",
  components: {
    SuccessRate,
    ErrorTimes,
    TradeAmount,
    UploadCount,
    CarType,
    CpuRate,
  },
  data() {
    return {
      options: [
      {
        value: 2600,
        label: '实时'
      },
      {
        value: 60000,
        label: '1分钟'
      },
      {
        value: 600000,
        label: '10分钟'
      },
      {
        value: 1200000,
        label: '20分钟'
      },
      {
        value: 1800000,
        label: '30分钟'
      }
    ],
    delay: 600000
    };
  },
  methods: {},
  created() {}
};
</script>

<style lang="less" scoped>
#home-page {
  // border: 1px solid blue;
  padding: 5vh 40px;
  height: calc(84vh - 60px);
  padding-top: 0;
  // .vertical-box {
  // border: 1px solid red;
  // }
  /deep/.dynamic {
    // margin: 1vh;
    padding: 2vh 0;
    float: right;
    .el-input__inner {
      border-color: #0d2a95;
      background: transparent;
      color: #fff;
      width: 120px;
    }
  }
  .box {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-bottom: 5vh;
    > div {
      min-width: 350px;
      width: 32%;
      height: 360px;
      background: #042359;
      border-radius: 4px;
    }
  }
}
</style>
