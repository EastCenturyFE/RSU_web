<template>
  <div id="login">
      <div class="header">
        <img src="/static/img/login/log.png" alt="">
      </div>
      <div class="section">
        <div class="loginBox">
          <h3>日志监测系统</h3>
          <el-input
            v-model="username"
            class="username"
            placeholder="请输入用户名"
            prefix-icon="iconfont iconzhanghu"
            clearable
            @keyup.enter.native="loginClickHandler"
          ></el-input>
          <el-input
            v-model="password"
            class="password"
            type="password"
            placeholder="请输入密码"
            prefix-icon="iconfont iconmima54"
            clearable
            @keyup.enter.native="loginClickHandler"
          ></el-input>
          <el-button
            class="login"
            @click="loginClickHandler"
            :loading="loginLoading"
            >登录</el-button><!-- :loading="loginLoading" -->
        </div>
      </div>

      <div class="footer">
        <!-- 技术支持： -->
        <p>河南东方世纪交通科技股份有限公司</p>
      </div>
    </div>
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
      // checked: '',
      timer: '',
    }
  },
  computed: mapState(['loaded', 'loginLoading']),
  methods: {
    ...mapActions(['pageLogin']),
    loginClickHandler () {
      this.pageLogin({
        username: this.username,
        pwd: this.password,
      })
    },
  },
  mounted () {
    // clearTimeout(this.timer)
    // this.timer = setTimeout(() => {
    //   this.getDicData({ loginLoading: false })
    // }, 15000)
    this.loaded && this.$router.push(pages.home.path)
  },
}
</script>

<style lang="less">
#login {
  width: 100%;
  height: 100vh;
  min-width: 1100px;
  min-height: 750px;
  background: url("/static/img/login/bg.png") no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;
    .header {
      text-align: right;
      > img {
        width: 186px;
        height: 51px;
        margin: 40px;
      }
    }
  .section {
    width: 505px;
    height: 360px;
    background: rgba(0,39,77,0.8);
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -180px;
    margin-left: -252px;
    border-radius: 6px;
    .loginBox {
      width: 350px;
      margin: 15px auto;
      .username {
        .el-input__prefix {
          .iconfont {
            font-size: 24px !important;
            margin-right: 20px;
          }
        }
      }
      .password {
        .el-input__prefix {
          .iconfont {
            font-size: 24px !important;
            margin-right: 20px;
          }
        }
      }
      img {
        width: 560px;
        // position: absolute;
        // left: -800px;
        // top: 30px;
      }
      h3 {
        padding: 0;
        margin: 0;
        color: #fff;
        font-weight: normal;
        text-align: center;
        font-size: 30px;
        line-height: 80px;
        height: 96px;
      }
      .el-input {
        margin-bottom: 20px;
      }
      .autoLogin {
        .el-checkbox__label {
          color:red;
          // color: @ec-color-text-label;
        }
      }
      .login {
        width: 100%;
        margin-top: 35px;
        background: #4C92B1;
        // background: linear-gradient(to bottom right, #ffa05b, #ff6e1f);
        color: #fff;
        font-size: 18px;
        border: none;
        &:hover {
          // background: linear-gradient(to bottom right, #ffb45b, #ff821f);
          background: #5AA2C4;
        }
      }
    }
    input {
      background-color: #040833;
    }
    .el-input__inner {
      background-color: #040833;
      border: 1px solid #040833;
      color: #fff;
    }
  }
  .footer {
    width: 100%;
    // min-width: 1600px;
    position: absolute;
    bottom: 50px;
    left: 0px;
    font-size: 18px;
    p {
      // margin:0;
      // padding: 0;
      text-align: center;
      color: #ABAAAA;
    }
  }
}
</style>
