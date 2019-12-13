<!--
 * @Description: 请输入当前文件描述
 * @Author: xiao xin (834529118@qq.com)
 * @Date: 2019-12-13 19:46:40
 * @LastEditors: xiao xin (834529118@qq.com)
 * @LastEditTime: 2019-12-13 21:38:11
 -->
<template>
  <div>{{amount}}</div>
</template>

<script>
export default {
  name: 'numberRoll',
  props: {
    number: Number,
  },
  data () {
    return {
      amount: 0,
    }
  },
  watch: {
    number (val) {
      this.numFun(this.amount, val)
    },
  },
  methods: {
    numFun (startNum, maxNum) {
      let that = this
      let numText = startNum
      let golb
      function numSlideFun () {
        numText += 4
        if (numText >= maxNum) {
          numText = maxNum
          cancelAnimationFrame(golb)
        } else {
          golb = requestAnimationFrame(numSlideFun)
        }

        that.amount = numText
      }

      numSlideFun()
    },
  },
  created () {
    this.numFun(this.amount, this.number)
  },
}
</script>

<style>
</style>
