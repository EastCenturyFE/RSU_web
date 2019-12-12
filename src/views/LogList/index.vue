<template>
  <div id="log-list">
    <div>
      本页面为列表页
      <br />
      <br />
      <br />
    </div>

    <div class='tabs-list'>
      <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="系统日志" name="log"></el-tab-pane>
        <el-tab-pane label="RSU信息日志" name="rsu"></el-tab-pane>
        <el-tab-pane label="车辆信息日志" name="car"></el-tab-pane>
      </el-tabs>
      <div class='search-all'>
        <div class='search-box'>
          <el-input placeholder="请输入搜索内容" v-model="search" size="small">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
       </div>
      </div>
    </div>

    <div class="table-list">
      <div class='searchs'>
        <div class='search-time'>
          <div class='searchTime-box'>
            <span>时间段：</span>
            <el-date-picker
              size="small"
              v-model="dataTime"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <p> 日志条数：<span>5500000</span>条</p>
          <p> 查询时间：<span>1.5</span>s</p>
        </div>
      </div>
      <el-table :data="tableData" style="width: 100%" stripe>
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
  },
  data () {
    return {
      activeName: 'log',
      search: '',
      dataTime: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
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
        }, {
          rsuId: '01',
          roadId: '001',
          doorFrame: 'r门架',
          sysName: 'rsu交易系统',
          level: '1级',
          methodName: 'CarNumber',
          requestUrl: '/rest/carnumber/list',
          requestTime: '0.9s',
          happenTime: '2019-12-12 15:50:00',
        }, {
          rsuId: '01',
          roadId: '001',
          doorFrame: 'r门架',
          sysName: 'rsu交易系统',
          level: '1级',
          methodName: 'CarNumber',
          requestUrl: '/rest/carnumber/list',
          requestTime: '0.9s',
          happenTime: '2019-12-12 15:50:00',
        }, {
          rsuId: '01',
          roadId: '001',
          doorFrame: 'r门架',
          sysName: 'rsu交易系统',
          level: '1级',
          methodName: 'CarNumber',
          requestUrl: '/rest/carnumber/list',
          requestTime: '0.9s',
          happenTime: '2019-12-12 15:50:00',
        }, {
          rsuId: '01',
          roadId: '001',
          doorFrame: 'r门架',
          sysName: 'rsu交易系统',
          level: '1级',
          methodName: 'CarNumber',
          requestUrl: '/rest/carnumber/list',
          requestTime: '0.9s',
          happenTime: '2019-12-12 15:50:00',
        }, {
          rsuId: '01',
          roadId: '001',
          doorFrame: 'r门架',
          sysName: 'rsu交易系统',
          level: '1级',
          methodName: 'CarNumber',
          requestUrl: '/rest/carnumber/list',
          requestTime: '0.9s',
          happenTime: '2019-12-12 15:50:00',
        }, {
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
  input {
    background-color: transparent;
  }
  .el-input__inner{
    background-color: transparent;
    border: 1px solid #0d2a95;
    color: #fff;
  }
  .el-range-editor .el-range-input, .el-date-editor .el-range-separator{
    color: #fff;
  }
  .tabs-list {
    position: relative;
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
    .el-tabs__content{
      display: none;
    }
    .el-tabs--border-card{
      border: 1px solid transparent;
    }
    .search-all{
      position: absolute;
      top: -2px;
      right: 10px;
      .search-box{
        display: inline-block;
        width: 300px;
        .el-input-group__append, .el-input-group__prepend{
          background-color: #0d2a95;
          color: #fff;
          border: 1px solid #0d2a95;
        }
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
      color: #fff
    }
    .el-table thead{
      color: #fff;
      background-color: #0d2a95;
    }
    .el-table--enable-row-hover .el-table__body tr:hover>td{
      background: #03173E;
    }
    .el-table--striped .el-table__body tr.el-table__row--striped td{
      background: #03173E;

    }
    .el-table td, .el-table th.is-leaf{
      border-bottom: 1px solid #0d2a95;
    }
    .searchs{
      height: 100px;
        // border: 1px solid red;
        padding: 10px 0;
      .search-time{
        float: right;
        .searchTime-box{
          margin-bottom: 10px;
        }
        p{
          font-size: 14px;
          color: #C0C4CC;
          margin-bottom: 10px;
          span{
            font-size: 16px;
          }
        }
      }
    }
  }

}
</style>
