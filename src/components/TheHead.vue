<template>
  <div id="the-head">
    <ul class="menu">
      <li
        v-for="(item, index) in tablist"
        :key="item.tab"
        @click="handleClick(item.path, index)"
        :class="index === tabIndex ? 'active' : ''"
      >
        {{ item.name }}
      </li>
    </ul>
    <h1>收费站车道监测系统</h1>
    <div class="head-right">
      <el-badge :value="99" :hidden="false" :max="99" class="badge-content">
        <img src="/static/img/layout/info.png" />
      </el-badge>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHead',
  components: {},
  data () {
    return {
      tablist: [
        { name: '首页', path: '/home' },
        { name: '检测模式', path: '/monitor' },
        { name: '业务模式', path: '/index' },
      ],
      tabIndex: 0,
    }
  },
  methods: {
    handleClick (path, index) {
      this.tabIndex = index
      this.$router.push(path)
    },
  },
}
</script>

<style lang="less">
#the-head {
  width: 100%;
  height: 55px;
  line-height: 55px;
  background-image: url("/static/img/layout/header.png");
  background-size: 100% 55px;
  background-repeat: no-repeat;
  position: relative;
  .menu {
    position: absolute;
    top: -5px;
    left: 18px;
    .active {
      color: #01e4fa;
    }
    li {
      border-right: 1px solid #1a42a4;
      display: inline-block;
      width: 80px;
      text-align: center;
      cursor: pointer;
    }
  }
  h1 {
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
    .el-badge__content.is-fixed {
      top: 10px;
    }
  }
}
</style>
