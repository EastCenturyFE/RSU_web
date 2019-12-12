<template>
  <el-dropdown id="the-dropdown" @command="handleCommand">
    <div class="the-dropdown-content">
      <span class="user-name">{{ realname }}</span>
      <i class="el-icon-arrow-down el-icon--right"></i>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="pageLogout">注销</el-dropdown-item>
      <el-dropdown-item>狮子头</el-dropdown-item>
      <el-dropdown-item>螺蛳粉</el-dropdown-item>
      <el-dropdown-item>双皮奶</el-dropdown-item>
      <el-dropdown-item>蚵仔煎</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'TheDropdown',
  computed: {
    ...mapState([
      'realname',
    ]),
  },
  methods: {
    ...mapActions([
      'pageLogout',
    ]),
    handleCommand (command) {
      command && this[command]()
    },
  },
}
</script>

<style lang="less" scoped>
#the-dropdown {
  .the-dropdown-content {
    cursor: pointer;

    .user-name {
      color: #666;
      font-size: 14px;
      margin-right: 6px;
    }
  }
}
</style>
