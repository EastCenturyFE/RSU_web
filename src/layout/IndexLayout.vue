<template>
  <div id="index-layout">
      <TheHead />
      <router-view></router-view>
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
  min-width: 1100px;
  min-height: 500px;
  height: 100vh;
  background-image: linear-gradient(-45deg, #011c4c, #001c4d);
}
</style>
