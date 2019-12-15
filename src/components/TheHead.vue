<template>
  <div id="the-head">
    <ul class="menu">
      <li
        v-for="(item, index) in tablist"
        :key="item.tab"
        @click="handleClick(item.path, index)"
        :class="index === tabIndex ? 'active' : ''"
      >{{ item.name }}</li>
    </ul>
    <h1>高速公路收费系统日志监控</h1>
    <div class="head-right">
      <el-dropdown @command="handleLogout">
        <span class="el-dropdown-link">
          <!-- <el-badge :value="99" :hidden="false" :max="99" class="badge-content">
            <img src="/static/img/layout/info.png" />
          </el-badge>-->
          <!-- 下拉菜单 -->
          {{roles}}
          <i class="el-icon-arrow-down"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">登 出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

const tableArray = [
  { name: "首页", path: "/home", roles: ["admin", "hndfsj"] },
  { name: "监测模式", path: "/monitor", roles: ["admin", "hndfsj"] },
  { name: "日志报表", path: "/index", roles: ["admin"] },
];

export default {
  name: "TheHead",
  components: {},
  data() {
    return {
      tablist: [],
      tabIndex: 0
    };
  },
  computed: {
    ...mapState({ roles: "roles" })
  },
  methods: {
    ...mapActions(["pageLogout"]),
    handleClick(path, index) {
      this.tabIndex = index;
      this.$router.push(path);
    },
    handleLogout(command) {
      this.pageLogout();
    },
    initTab() {
      this.tablist = tableArray.filter(val => val.roles.includes(this.roles));
    },
  },
  created() {
    this.tabIndex = tableArray.findIndex(val => val.path === this.$route.path);

    this.initTab();
  }
};
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
    left: 8px;
    .active {
      color: #01e4fa;
    }
    li {
      display: inline-block;
      width: 90px;
      text-align: center;
      position: relative;
      cursor: pointer;

      &::after {
        content: "";
        position: absolute;
        top: 19px;
        right: -15px;
        width: 25px;
        height: 20px;
        background: url("/static/img/layout/menu.png");
      }
      &:first-child::after {
        right: -1px;
      }
      &:last-child::after {
        width: 0;
      }
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
    .el-dropdown-link {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.8);
      cursor: pointer;
    }
  }
}

.el-dropdown-menu {
  background: #f2f2f2;
  border-color: #f2f2f2;

  .popper__arrow::after {
    border-bottom-color: #f2f2f2;
  }
}
</style>
