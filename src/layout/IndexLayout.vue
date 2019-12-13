<!--
 * @Description:
 * @Author: YOYO 792611446@qq.com
 * @Date: 2019-12-12 16:14:51
 * @LastEditors: YOYO 792611446@qq.com
 * @LastEditTime: 2019-12-13 15:29:35
 -->
<template>
  <div id="index-layout">
    <TheHead />
    <div class="contain">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHead from '@/components/TheHead'

export default {
  name: 'HomeLayout',
  components: {
    TheHead,
  },
}
</script>

<style lang="less" scoped>
#index-layout {
  width: 100%;
  min-width: 1400px;
  min-height: 500px;
  height: 100vh;
  background-image: linear-gradient(-45deg, #011c4c, #001c4d);
  overflow: auto;
}
</style>
