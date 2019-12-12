<template>
  <div id="log-list">
    <div>
      本页面为列表页
      <br />
      <br />
      <br />
    </div>

    <el-tabs type="border-card" @tab-click="handleClick">
      <el-tab-pane label="系统日志" name="log"></el-tab-pane>
      <el-tab-pane label="RSU信息日志" name="rsu"></el-tab-pane>
      <el-tab-pane label="车辆信息日志" name="car"></el-tab-pane>
    </el-tabs>

    <div class="table-list">
      <div></div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="rsuId" label="rsu标识" width="180">
        </el-table-column>
        <el-table-column prop="roadId" label="门架标识" width="180">
        </el-table-column>
        <el-table-column prop="doorFrame" label="桩号"> </el-table-column>
        <el-table-column prop="sysName" label="系统名称"> </el-table-column>
        <el-table-column prop="level" label="日志级别"> </el-table-column>
        <el-table-column prop="methodName" label="方法名称"> </el-table-column>
        <el-table-column prop="requestUrl" label="请求地址"> </el-table-column>
        <el-table-column prop=" requestTime" label="耗时"> </el-table-column>
        <el-table-column prop=" happenTime" label="发生时间"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogList',
  components: {
    // activeName: 'first',
  },
  data () {
    return {
      tableData: [
        {
          rsuId: '01',
          roadId: '001',
          doorFrame: 'r门架',
          sysName: 'rsu交易系统',
          level: '1级',
          methodName: 'CarNumber',
          requestUrl: '/rest/carnumber/list',
          requestTime: '0.9s',
          happenTime: '2019-12-12 15:50:00',
        },
        {
          rsuId: '01',
          roadId: '001',
          doorFrame: 'r门架',
          sysName: 'rsu交易系统',
          level: '1级',
          methodName: 'CarNumber',
          requestUrl: '/rest/carnumber/list',
          requestTime: '0.9s',
          happenTime: '2019-12-12 15:50:00',
        },
        {
          rsuId: '01',
          roadId: '001',
          doorFrame: 'r门架',
          sysName: 'rsu交易系统',
          level: '1级',
          methodName: 'CarNumber',
          requestUrl: '/rest/carnumber/list',
          requestTime: '0.9s',
          happenTime: '2019-12-12 15:50:00',
        },
      ],
    }
  },
  methods: {
    handleClick (tab) {
      console.log(tab.name)
    },
  },
  created () {},
}
</script>

<style lang="less">
#log-list {
  border: 1px solid red;
  .el-tabs--border-card {
    background: transparent;
    .el-tabs__header {
      background: transparent;
      border-bottom: 1px solid #0d2a95;
    }
    .el-tabs__item {
      color: #fff;
      &.is-active {
        background-color: #0d2a95;
        border-right-color: #0d2a95;
        border-left-color: #0d2a95;
      }
    }
  }
  .table-list {
    .el-table th,
    .el-table tr {
      background-color: transparent;
    }
    .el-table,
    .el-table__expanded-cell {
      background-color: transparent;
    }
  }
}
</style>
