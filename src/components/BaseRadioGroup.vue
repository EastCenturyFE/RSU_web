<template>
  <el-radio-group id="base-radio-group" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-radio-group>
</template>

<script>
export default {
  name: 'BaseRadioGroup',
}
</script>

<style lang="less" scoped>
#base-radio-group {
  /deep/ .el-radio-button__inner {
    font-size: 16px;
    color: #333;
    padding: 13px 21px;
    border-radius: 0;
  }

  /deep/ .el-radio-button {
    &:first-child {
      .el-radio-button__inner{
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
      }
    }

    &:last-child {
      .el-radio-button__inner{
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
      }
    }
  }

  /deep/ .is-active {
    .el-radio-button__inner {
      color: #fff;
    }
  }
}
</style>
