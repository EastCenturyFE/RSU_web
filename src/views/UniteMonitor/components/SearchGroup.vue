<template>
  <div id="search-group">
    <span class="m-r-14">关键字:</span>
    <el-input v-model="keyword" clearable class="search-input" placeholder="请输入内容"></el-input>
    <el-button @click="handleClickBySearch" class="search-button" type="primary">查询</el-button>
  </div>
</template>

<script>
export default {
  name: 'SearchGroup',
  data () {
    return {
      keyword: '',
    }
  },
  methods: {
    handleClickBySearch () {
      console.log(1, this.$route.name)
    },
  },
}
</script>

<style lang="less" scoped>
#search-group {
  color: #333;
  font-size: 15px;
  padding: 22px 0 22px 40px;
  border-bottom: 1px solid #e0e0e0;
  position: relative;

  .search-input {
    width: 240px;

    /deep/ .el-input__inner {
      height: 36px;
      border-radius: 2px;
    }
  }

  .search-button {
    padding: 10px 24px;
    border-radius: 2px;
    position: absolute;
    right: 145px;
  }

  .m-r-14 {
    margin-right: 14px;
  }
}
</style>
