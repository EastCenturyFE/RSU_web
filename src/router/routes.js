import { pages } from '@/config'

import {
  initRoutesMeta,
  getNavMenuConfig,
  downToUpReduceMetaAuthority,
} from '@/utils/router'

const HomePage = () =>
  import(/* webpackChunkName: "home" */ '@/views/HomePage')
const Login = () => import(/* webpackChunkName: "home" */ '@/views/LoginPage')

const NoFind = () =>
  import(/* webpackChunkName: "404" */ '@/views/Exception/404.vue')

// 开始书写
const IndexLayout = () =>
  import(/* webpackChunkName: "IndexLayout" */ '@/layout/IndexLayout.vue')
const LogList = () =>
  import(/* webpackChunkName: "LogList" */ '@/views/LogList')
const Monitor = () =>
  import(/* webpackChunkName: "Monitor" */ '@/views/Monitor')

const routes = [
  {
    path: '/',
    name: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'loglist',
    component: Login,
    meta: {
      name: '登录',
      title: '登录',
      authority: false,
    },
  },
  {
    path: '',
    component: IndexLayout,
    meta: { hideInMenu: true },
    children: [
      {
        path: '/index',
        name: 'loglist',
        component: LogList,
        meta: {
          name: '事件列表',
          title: '事件列表',
          authority: true,
        },
      },
      {
        path: '/monitor',
        component: Monitor,
        meta: {
          name: '统一监控',
          title: '统一监控',
          icon: 'uniteMonitor',
          authority: true,
        },
      },
      {
        path: '/home',
        component: HomePage,
        meta: {
          name: '首页',
          title: '首页',
          icon: pages.home.name,
          authority: true,
        },
      },
    ],
  },
  // {
  //   path: '/403',
  //   component: NoPermission,
  //   meta: { hideInMenu: true, title: '你没有权限访问该页面' },
  // },
  {
    path: '*',
    component: NoFind,
    meta: { hideInMenu: true, title: '没有找到你要去的页面' },
  },
]

const reduceRoute = downToUpReduceMetaAuthority(initRoutesMeta(routes))

export const navMenuConfig = getNavMenuConfig(reduceRoute)

export default reduceRoute
