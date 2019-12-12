<template>
  <div class="result-card">
    <ServiceAreaCard class="card-item" />
    <ServiceAreaCard class="card-item" />
    <ServiceAreaCard class="card-item" />
    <ServiceAreaCard class="card-item" />
    <ServiceAreaCard class="card-item" />
    <ServiceAreaCard class="card-item" />
    <ServiceAreaCard class="card-item" />
    <ServiceAreaCard class="card-item" />
    <ServiceAreaCard class="card-item" />
    <ServiceAreaCard class="card-item" />
    <ServiceAreaCard class="card-item" />
    <ServiceAreaCard class="card-item" />
    <ServiceAreaCard class="card-item" />
    <ServiceAreaCard class="card-item" />
    <ServiceAreaCard class="card-item" />
    <ServiceAreaCard class="card-item" />
  </div>
</template>

<script>
import ServiceAreaCard from './ServiceAreaCard'

export default {
  name: 'ResultCard',
  components: {
    ServiceAreaCard,
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
.result-card {
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  padding-bottom: 36px;

  .card-item {
    margin-top: 36px;
    margin-left: 40px;
  }
}
</style>
