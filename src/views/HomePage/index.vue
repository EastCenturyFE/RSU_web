<template>
  <div id="home-page">
    <div class="vertical-box">
      <div class="box">
        <div><SuccessRate /></div>
        <div><ErrorTimes /></div>
        <div><TradeAmount /></div>
      </div>
      <div class="box">
        <div><UploadCount /></div>
        <div><SuccessRate /></div>
        <div><SuccessRate /></div>
      </div>
    </div>
  </div>
</template>

<script>

import SuccessRate from './components/successRate'
import ErrorTimes from './components/errorTimes'
import TradeAmount from './components/tradeAmount'
import UploadCount from './components/uploadCount'

export default {
  name: 'HomePage',
  components: {
    SuccessRate,
    ErrorTimes,
    TradeAmount,
    UploadCount,
  },
  data () {
    return {}
  },
  methods: {},
  created () {},
}
</script>

<style lang="less" scoped>
#home-page {
  // border: 1px solid blue;
  padding: 8vh 40px;
  height: calc(84vh - 60px);
  // .vertical-box {
    // border: 1px solid red;
  // }
  .box {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-bottom: 8vh;
    > div {
      min-width: 350px;
      width: 30%;
      height: 300px;
      background: #042359;
      border-radius: 4px;
    }
  }
}
</style>
