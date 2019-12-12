<template>
  <el-button type="primary" @click="loginClickHandler">没看错，我就是登陆按钮</el-button>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import { pages } from '@/config'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
    }
  },
  computed: mapState([ 'loaded' ]),
  methods: {
    ...mapActions([
      'pageLogin',
    ]),
    loginClickHandler () {
      this.pageLogin({
        username: 'testgly',
        password: '111111',
      })
    },
  },
  mounted () {
    this.loaded && this.$router.push(pages.home.path)
  },
}
</script>
