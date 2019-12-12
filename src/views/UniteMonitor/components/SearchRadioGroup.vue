<template>
  <div id="search-radio-group">
    <BaseRadioGroup v-model="tabPosition">
      <el-radio-button
        v-for="({ text, value }, index) of serviceAreaList"
        :key="index"
        :label="value">
        {{text}}
      </el-radio-button>
    </BaseRadioGroup>
  </div>
</template>

<script>
import BaseRadioGroup from '@/components/BaseRadioGroup'

const SERVICE_AREA_LIST = [
  {
    text: '郑州东服务区',
    value: '郑州东服务区',
  },
  {
    text: '郑州西服务区',
    value: '郑州西服务区',
  },
  {
    text: '郑州南服务区',
    value: '郑州南服务区',
  },
  {
    text: '郑州北服务区',
    value: '郑州北服务区',
  },
]

export default {
  name: 'SearchRadioGroup',
  components: {
    BaseRadioGroup,
  },
  data () {
    return {
      tabPosition: SERVICE_AREA_LIST[0].value,
      serviceAreaList: SERVICE_AREA_LIST,
    }
  },
  methods: {
  },
  created () {
  },
}
</script>

<style lang="less" scoped>
#search-radio-group {
  padding-top: 32px;
  margin-left: 30px;
  border-bottom: 1px solid #e0e0e0;

  /deep/ .el-radio-button__inner {
    border-bottom: none;
  }
}
</style>
