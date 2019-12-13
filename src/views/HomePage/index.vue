<template>
  <div id="home-page">
    <div class="vertical-box">
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  components: {
  },
  data () {
    return {}
  },
  methods: {},
  created () {},
}
</script>

<style lang="less" scoped>
#home-page {
  // border: 1px solid blue;
  padding: 8vh 40px;
  height: calc(84vh - 60px);
  // .vertical-box {
    // border: 1px solid red;
  // }
  .box {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-bottom: 8vh;
    > div {
      min-width: 350px;
      width: 30%;
      height: 300px;
      background: #042359;
      border-radius: 4px;
    }
  }
}
</style>
