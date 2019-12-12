<template>
  <el-breadcrumb id="base-breadcrumb" separator-class="el-icon-arrow-right">
    <template v-if="breadcrumbList.length">
      <img
        :src="`/static/img/layout/${breadcrumbList[0].icon}.black.png`"
        class="img-icon">
    </template>
    <el-breadcrumb-item
      v-for="({ path, name }, index) of breadcrumbList"
      :key="index"
      :to="{ path }">
      {{ name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'BaseBreadcrumb',
  data () {
    return {
      breadcrumbList: [],
    }
  },
  watch: {
    $route () {
      this.getBreadcrumbList()
    },
  },
  methods: {
    getBreadcrumbList () {
      this.breadcrumbList = this.$route.matched
        .reduce((prevAll, { path, meta: { name, icon, hideInBreadcrumb } }) => {
          return name && !hideInBreadcrumb
            ? [...prevAll, { path, name, icon }]
            : prevAll
        }, [])
    },
  },
  created () {
    this.getBreadcrumbList()
  },
}
</script>

<style lang="less" scoped>
#base-breadcrumb {
  position: relative;

  .img-icon {
    width: 22px;
    height: 22px;
    float: left;
    margin-top: 16px;
    margin-right: 13px;
  }
}

</style>
