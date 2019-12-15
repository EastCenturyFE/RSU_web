/*
 * @Description: 请输入当前文件描述
 * @Author: xiao xin (834529118@qq.com)
 * @Date: 2019-12-14 18:02:49
 * @LastEditors: xiao xin (834529118@qq.com)
 * @LastEditTime: 2019-12-14 18:05:50
 */
// vue.config.js
const ZipPlugin = require('zip-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'
const path = require('path')

// 河南东方世纪
const target = 'http://192.168.10.30:8888'

// 鲲鹏培训
// const target = 'http://192.168.201.11:8888'

// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/etc': {
        target,
        onProxyRes: cookiePathRewriter,
        pathRewrite: {
          '^/etc': '/etc',
        },
      },
      '/resource': {
        target,
        onProxyRes: cookiePathRewriter,
        pathRewrite: {
          '^/resource': '/resource',
        },
      },
    },
  },
  configureWebpack: (config) => {
    if (isProduction) {
      config.plugins.push(new ZipPlugin({
        path: path.join(__dirname, './dist'), // dist.zip的输出路径；./dist 把dist.zip 输出到根路径dist文件夹下
        filename: 'dist.zip',
      }))
    }
  },
}

/**
 * Cookie Path Rewrite Helper
 * how to use: onProxyRes: cookiePathRewriter (in proxyTable items.)
 */
function cookiePathRewriter (proxyRes, req, res) {
  // judge if "set-cookie" is included in the response header
  let cookies = proxyRes.headers['set-cookie']
  if (!cookies || cookies.length === 0) {
    delete proxyRes.headers['set-cookie']
    return
  }

  // rewrite cookie path
  let cookieItems = cookies[0].split(';')
  let newCookie = ''
  for (let i = 0, len = cookieItems.length; i < len; i++) {
    if (newCookie.length > 0) {
      newCookie += ';'
    }
    // judge if start with "path=" or "Path="
    if (cookieItems[i].indexOf('path=') >= 0) {
      newCookie += 'path=/'
    } else if (cookieItems[i].indexOf('Path=') >= 0) {
      newCookie += 'Path=/'
    } else {
      newCookie += cookieItems[i]
    }
  }
  // rewrite the cookie
  proxyRes.headers['set-cookie'] = newCookie
}
