<template>
  <div id="service-area-card">
    <div class="card-body">
      视频
    </div>
    <div class="card-footer">
      名字
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceAreaCard',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  },
}
</script>

<style lang="less" scoped>
#service-area-card {
  .card-body {
    background-color: #b2b2b2;
    width: 270px;
    height: 186px;
  }

  .card-footer {
    color: #333;
    font-size: 14px;
  }
}
</style>
