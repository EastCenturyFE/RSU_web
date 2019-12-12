<template>
  <div id="unite-monitor">
    <SearchGroup />
    <SearchRadioGroup />
    <ResultCard />
  </div>
</template>

<script>
import ResultCard from './components/ResultCard'
import SearchGroup from './components/SearchGroup'
import SearchRadioGroup from './components/SearchRadioGroup'

export default {
  name: 'UniteMonitor',
  components: {
    ResultCard,
    SearchGroup,
    SearchRadioGroup,
  },
  data () {
    return {
      tabPosition: 'top',
    }
  },
}
</script>

<style lang="less" scoped>
</style>
