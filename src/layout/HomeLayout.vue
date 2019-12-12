<template>
  <div id="home-layout">
    <TheNavMenu class="layout-left the-nav-menu" />
    <div class="layout-right">
      <TheHead />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHead from '@/components/TheHead'
import TheNavMenu from '@/components/TheNavMenu'

export default {
  name: 'HomeLayout',
  components: {
    TheHead,
    TheNavMenu,
  },
}
</script>

<style lang="less" scoped>
#home-layout {
  display: flex;

  .layout-left {
    flex-shrink: 0;
    width: 278px;
    min-height: 100vh;
    background-color: #272d32;
  }

  .layout-right {
    flex-grow: 1;
    flex-shrink: 0;
    min-width: 500px;
    max-width: calc(~"100% - 278px");
  }
}
</style>
