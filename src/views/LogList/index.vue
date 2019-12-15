<template>
  <div id="log-list">
    <el-tooltip effect="dark" content="12" placement="top">1212</el-tooltip>
    <div class="tabs-list">
      <el-tabs type="border-card" v-model="activeName" @tab-click="handleClickTab">
        <el-tab-pane label="RSU信息日志" name="rsu">
          <div class="searchs">
            <div class="search-time">
              <div class="searchTime-box">
                <ul>
                  <li>
                    <span>时间：</span>
                    <el-date-picker
                      size="small"
                      v-model="dataTime_rsu"
                      type="datetimerange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      format="yyyy-MM-dd HH:mm:ss"
                      value-format="yyyy-MM-dd HH:mm:ss"
                    ></el-date-picker>
                  </li>
                  <li>
                    <span>日志标识：</span>
                    <el-input placeholder="请输入搜索内容" v-model="rsu.rsuId" size="small" />
                  </li>
                  <li>
                    <span>主备：</span>
                    <el-input placeholder="请输入搜索内容" v-model="rsu.types" size="small" />
                  </li>
                  <li>
                    <span>车牌号：</span>
                    <el-input placeholder="请输入搜索内容" v-model="rsu.plateNo" size="small" />
                  </li>
                </ul>
                <el-button type="primary" size="small" @click="handleClick('rsu')">查询</el-button>
              </div>
              <div class="time-right">
                总条数：
                <span>500条</span>
                &nbsp;
                查询时间：
                <span>{{requestTime}}</span>
              </div>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="车辆信息日志" name="car">
          <div class="searchs">
            <div class="search-time">
              <div class="searchTime-box">
                <ul>
                  <li>
                    <span>时间：</span>
                    <el-date-picker
                      size="small"
                      v-model="dataTime_car"
                      type="datetimerange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      format="yyyy-MM-dd HH:mm:ss"
                      value-format="yyyy-MM-dd HH:mm:ss"
                    ></el-date-picker>
                  </li>
                  <li>
                    <span>日志标识：</span>
                    <el-input placeholder="请输入搜索内容" v-model="car.equipId" size="small" />
                  </li>
                  <li>
                    <span>路段id：</span>
                    <el-input placeholder="请输入搜索内容" v-model="car.roadId" size="small" />
                  </li>
                  <li>
                    <span>车辆类型：</span>
                    <el-input placeholder="请输入搜索内容" v-model="car.carType" size="small" />
                  </li>
                </ul>
                <el-button type="primary" size="small" @click="handleClick('car')">查询</el-button>
              </div>
              <div class="time-right">
                总条数：
                <span>500条</span>
                &nbsp;
                查询时间：
                <span>{{requestTime}}</span>
              </div>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="系统日志" name="log">
          <div class="searchs">
            <div class="search-time">
              <div class="searchTime-box">
                <ul>
                  <li>
                    <span>时间：</span>
                    <el-date-picker
                      size="small"
                      v-model="dataTime_log"
                      type="datetimerange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      format="yyyy-MM-dd HH:mm:ss"
                      value-format="yyyy-MM-dd HH:mm:ss"
                    >
                      <!-- value-format="timestamp" -->
                    </el-date-picker>
                  </li>
                  <li>
                    <span>日志标识：</span>
                    <el-input placeholder="请输入搜索内容" v-model="log.rsuId" size="small" />
                  </li>
                  <li>
                    <span>门架编号：</span>
                    <el-input placeholder="请输入搜索内容" v-model="log.doorFrame" size="small" />
                  </li>
                  <li>
                    <span>系统名称：</span>
                    <el-input placeholder="请输入搜索内容" v-model="log.sysName" size="small" />
                  </li>
                </ul>
                <el-button type="primary" size="small" @click="handleClick('log')">查询</el-button>
              </div>
              <div class="time-right">
                总条数：
                <span>500条</span>
                &nbsp;
                查询时间：
                <span>{{requestTime}}</span>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
      <!-- <div class="search-all">
        <div class="search-box">
          <el-input placeholder="请输入搜索内容" v-model="search" size="small">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>-->
    </div>

    <div class="table-list">
      <el-table :data="tableData" style="width: 100%" stripe>
        <!-- :prop="item.prop" -->
        <el-table-column
          v-for="(item, index) in header"
          :key="item+index"
          :label="item.label"
          :prop="item.prop"
          :width="item.width"
        ></el-table-column>
        <el-table-column width="90" label="操作" v-if="activeName === 'log'">
          <template slot-scope="scope">
            <el-button
              type="primary"
              plain
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
            >查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog
      title="异常详情"
      :visible.sync="dialogVisible"
      width="60%"
      custom-class="dialog-container"
    >
      <div>
        <div class="dialog-item dialog-item-success">
          <span class="title">正常信息:</span>
          <el-input
            type="textarea"
            readonly
            resize="none"
            :rows="1"
            placeholder="请输入内容"
            v-model="dialogData.resultJson"
          ></el-input>
        </div>
        <div class="dialog-item">
          <span class="title">异常信息:</span>
          <el-input
            type="textarea"
            readonly
            resize="none"
            :rows="10"
            placeholder="请输入内容"
            v-model="dialogData.errorJson"
          ></el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="small" @click="dialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { header, tabParams } from "./config";
import { getLogList, getRsuList, getCarList } from "./service";

export default {
  name: "LogList",
  components: {},
  data() {
    return {
      activeName: "rsu",
      dataTime_log: "",
      dataTime_rsu: "",
      dataTime_car: "",
      tableData: [],
      header: header["rsuHeader"],
      requestTime: "--",
      log: { ...tabParams.log },
      rsu: { ...tabParams.rsu },
      car: { ...tabParams.car },
      dialogVisible: false,
      dialogData: {}
    };
  },
  methods: {
    handleClickTab(tab) {
      let name = tab.name;

      this[name] = { ...tabParams[name] };
      this[`dataTime_${name}`] = "";

      this.activeName = name;
      this.header = header[`${tab.name}Header`];
      this[name].startTime = "";
      this[name].endTime = "";

      if (name === "car") {
        this.requestCarList(this.car);
      } else if (name === "rsu") {
        this.requestRsuList(this.rsu);
      } else {
        this.requestLogList(this.log);
      }
    },
    handleClick(type) {
      this[type].startTime = this[`dataTime_${type}`]
        ? this[`dataTime_${type}`][0]
        : "";
      this[type].endTime = this[`dataTime_${type}`]
        ? this[`dataTime_${type}`][1]
        : "";
      if (type === "car") {
        this.requestCarList(this.car);
      } else if (type === "rsu") {
        this.requestRsuList(this.rsu);
      } else {
        this.requestLogList(this.log);
      }
    },
    handleEdit(index, row) {
      if (row.level !== 'error') {
        this.dialogData = {
          ...row,
          errorJson: '-'
        }
      } else {
        this.dialogData = row;
      }
      this.dialogVisible = true;
    },
    async requestLogList(params) {
      let res = await getLogList(params);
      if (res.code === "success") {
        let { ms, pageList } = res.data;
        this.tableData = pageList;
        this.requestTime = ms + "ms";
      }
    },
    async requestRsuList(params) {
      let res = await getRsuList(params);
      if (res.code === "success") {
        let { ms, pageList } = res.data;
        this.tableData = pageList;
        this.requestTime = ms + "ms";
      }
    },
    async requestCarList(params) {
      let res = await getCarList(params);
      if (res.code === "success") {
        let { ms, pageList } = res.data;
        this.tableData = pageList;
        this.requestTime = ms + "ms";
      }
    }
  },
  created() {
    this.requestRsuList({});
  }
};
</script>

<style lang="less">
#log-list {
  padding: 40px 40px 0;
  input {
    background-color: transparent;
  }
  .el-input__inner {
    background-color: transparent;
    border: 1px solid #0d2a95;
    color: #fff;
  }
  .el-range-editor .el-range-input,
  .el-date-editor .el-range-separator {
    color: #fff;
  }
  .tabs-list {
    position: relative;
    .searchs {
      padding: 20px 2px;
      .search-time {
        .searchTime-box {
          margin-bottom: 30px;
          ul {
            display: inline-block;
            li {
              display: inline-block;
              width: 230px;
              margin-right: 15px;
              // border: 1px solid red;
              > span {
                font-size: 14px;
              }
              &:first-child {
                width: 450px;
              }
              .el-input {
                display: inline-block;
                width: 160px;
              }
            }
          }
          .el-button {
            float: right;
          }
        }
        .time-right {
          float: right;
          font-size: 12px;
          color: #c0c4cc;
          margin: 10px 0;
          text-align: right;
          span {
            font-size: 16px;
          }
        }
      }
    }
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
    // .el-tabs__content {
    //   display: none;
    // }
    .el-tabs--border-card {
      border: 1px solid transparent;
    }
    .search-all {
      position: absolute;
      top: -2px;
      right: 10px;
      .search-box {
        display: inline-block;
        width: 300px;
        .el-input-group__append,
        .el-input-group__prepend {
          background-color: #0d2a95;
          color: #fff;
          border: 1px solid #0d2a95;
        }
      }
    }
  }

  .table-list {
    // border-right: 1px solid #0d2a95;
    // border-left: 1px solid #0d2a95;

    .el-table th,
    .el-table tr {
      background-color: transparent;
    }
    .el-table,
    .el-table__expanded-cell {
      background-color: transparent;
      color: #fff;
    }
    .el-table thead {
      color: #fff;
      background-color: #0d2a95;
    }
    .el-table--enable-row-hover .el-table__body tr:hover > td {
      background: #03173e;
    }
    .el-table--striped .el-table__body tr.el-table__row--striped td {
      background: #03173e;
    }
    .el-table td,
    .el-table th.is-leaf {
      border-bottom: 1px solid #0d2a95;
    }
    .el-table--border::after,
    .el-table--group::after,
    .el-table::before {
      background: transparent;
    }
  }

  .dialog-container {
    background: #03173e;
    .el-dialog__title {
      color: #fff;
    }

    .dialog-item {
      display: flex;
      align-items: center;
      .title {
        color: #fff;
        display: inline-block;
        min-width: 80px;
      }
      &:not(:first-child) {
        margin-top: 10px;
      }

      .el-textarea__inner {
        color: #f56c6c;
        background: #040833;
        border-color: #040833;
      }
    }

    .dialog-item-success {
      .el-textarea__inner {
        color: #67c23a;
      }
    }
  }
}
</style>
