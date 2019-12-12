import { pages } from '@/config'

import {
  initRoutesMeta,
  getNavMenuConfig,
  downToUpReduceMetaAuthority,
} from '@/utils/router'

// const HomeLayout = () =>
//   import(/* webpackChunkName: "home" */ '@/layout/HomeLayout.vue')
const HomePage = () =>
  import(/* webpackChunkName: "home" */ '@/views/HomePage')

const NoFind = () =>
  import(/* webpackChunkName: "404" */ '@/views/Exception/404.vue')

// 开始书写
const IndexLayout = () =>
  import(/* webpackChunkName: "403" */ '@/layout/IndexLayout.vue')
const LogList = () => import(/* webpackChunkName: "403" */ '@/views/LogList')
const Monitor = () =>
  import(/* webpackChunkName: "myTask" */ '@/views/Monitor')

const routes = [
  {
    path: '/',
    component: IndexLayout,
    meta: { hideInMenu: true },
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'loglist',
        component: LogList,
        meta: {
          name: '事件列表',
          title: '事件列表',
          authority: false,
        },
      },
      {
        path: '/monitor',
        component: Monitor,
        meta: {
          name: '统一监控',
          title: '统一监控',
          icon: 'uniteMonitor',
          authority: false,
        },
      },
      {
        path: '/home',
        component: HomePage,
        meta: {
          name: '首页',
          title: '首页',
          icon: pages.home.name,
          authority: false,
        },
      },
    ],
  },
  // {
  //   path: '/',
  //   redirect: 'index',
  //   meta: { hideInMenu: true },
  // },
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
