<!--
 * @Description: 请输入当前文件描述
 * @Author: xiao xin (834529118@qq.com)
 * @Date: 2019-12-13 19:46:40
 * @LastEditors: xiao xin (834529118@qq.com)
 * @LastEditTime: 2019-12-15 20:59:32
 -->
<template>
  <div>{{amount}}</div>
</template>

<script>
export default {
  name: 'numberRoll',
  props: {
    number: Number,
    add: {
      type: Number,
      default: 4
    }
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
        numText += that.add
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
