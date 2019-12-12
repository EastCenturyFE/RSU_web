<template>
  <div id="the-head">
    <h1>收费站车道监测系统</h1>
    <div class="head-right">
      <el-badge :value="99" :hidden="false" :max="99" class="badge-content">
        <img src="/static/img/layout/info.png">
      </el-badge>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TheHead',
  components: {
  },
}
</script>

<style lang="less">
#the-head {
  width: 100%;
  height: 55px;
  line-height: 55px;
  background-image: url('/static/img/layout/header.png');
  background-size: 100% 55px;
  background-repeat: no-repeat;
  position: relative;
  h1{
    width: 100%;
    color: #fff;
    font-weight: bold;
    font-size: 26px;
    text-align: center;
  }
  .head-right {
    position: absolute;
    top: 2px;
    right: 40px;
    .badge-content {
      margin-top: -5px;
    }
    .el-badge__content.is-fixed{
      top: 10px;
    }
  }
}
</style>
