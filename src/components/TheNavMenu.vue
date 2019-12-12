<template>
  <div id="the-nav-menu">
    <input ref="hiddenInputRef" type="hidden" />
    <el-menu
      @select="menuSelectHandler"
      :default-active="defaultActive"
      :unique-opened="true"
      active-text-color="#fff"
      background-color="#272d32"
      text-color="#b4b3b3">
      <template v-for="({ meta, name, children }, index) of navMenuConfig">
        <template v-if="meta.hasRoute()">
          <el-menu-item
            v-if="!children"
            :index="meta.path ? `^${meta.path}$` : name"
            :key="index"
            :class="[ defaultActive === name ? 'el-menu-item-actived' : '' ]" >
              <img :src="`/static/img/layout/${meta.icon}.png`" class="img-icon" />
              <span slot="title">{{meta.name || '去定义meta name'}}</span>
          </el-menu-item>
          <el-submenu v-else :index="`${index}`" :key="index">
            <template slot="title">
              <img :src="`/static/img/layout/${meta.icon}.png`" class="img-icon" />
              <span>{{meta.name}}</span>
            </template>
            <el-menu-item
              v-for="({ name, meta }) of children"
              :key="name"
              :index="meta.path ? `^${meta.path}$` : name"
              :class="[ defaultActive === name ? 'el-menu-item-actived' : '' ]">
              <template v-if="meta.hasRoute()">
                {{meta.name || '去定义meta name'}}
              </template>
            </el-menu-item>
          </el-submenu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { navMenuConfig } from '@/router/routes'

export default {
  name: 'TheNavMenu',
  data () {
    return {
      navMenuConfig,
      defaultActive: '',
    }
  },
  methods: {
    /**
     * @description                   menu 组件 select 事件
     * @param  {String}               index 值
     * @return {undefied}             无返回值
     */
    menuSelectHandler (name) {
      if (/^\^.*\$$/.test(name)) {
        const { defaultActive } = this

        window.open(/^\^(.*)\$$/.exec(name)[1], '_BLANK')

        this.defaultActive = ''

        this.$nextTick(() => {
          this.defaultActive = defaultActive
        })
      } else {
        this.defaultActive = name
        this.$router.push({ name })
      }
    },
    /**
     * @description                   页面刷新时设置选中状态
     * @return {undefied}             无返回值
     */
    setRefreshSelectedStatu () {
      const matched = this.$route.matched.slice(1)
      const firstName = matched[0].name

      this.setDefaultActive(this.navMenuConfig, firstName)
    },
    /**
     * @description                   设置 defaultActive 值
     * @return {Boolean}              是否结束查找
     */
    setDefaultActive (arr, firstName) {
      return arr.some(({ name, children }) => {
        let is = name === firstName

        if (is) {
          this.defaultActive = name

          return is
        }

        if (children) {
          is = this.setDefaultActive(children, firstName)
        }

        return is
      })
    },
  },
  created () {
    this.setRefreshSelectedStatu()
  },
}
</script>

<style lang="less" scoped>
#the-nav-menu {
  /deep/ .el-menu {
    border: none;

    .el-menu-item {
      font-size: 16px;
      width: 278px;
      font-weight: bold;
      border-left: 4px solid transparent;
    }

    .el-menu-item-actived,
    .el-menu-item:hover {
      background-color: #1c2024 !important;
      padding-right: 60px;
      border-right: 4px solid #ec703a !important;
    }

    .el-submenu__title {
      font-size: 16px;
      font-weight: bold !important;
      border-left: 4px solid transparent;
    }

    .el-menu--inline {
      .el-menu-item {
        font-size: 15px;
        font-weight: normal;
        padding-left: 112px !important;
        border-left: 5px solid transparent;
      }
    }

    .el-submenu__icon-arrow {
      font-size: 16px !important;
    }

    .img-icon {
      margin-left: 30px;
      margin-right: 40px;
      width: 22px;
      height: 22px;
    }
  }
}
</style>
