import { pages } from '@/config'

import {
  initRoutesMeta,
  getNavMenuConfig,
  downToUpReduceMetaAuthority,
} from '@/utils/router'

const HomeLayout = () => import(/* webpackChunkName: "home" */ '@/layout/HomeLayout.vue')
const HomePage = () => import(/* webpackChunkName: "home" */ '@/views/HomePage')

const MyTask = () => import(/* webpackChunkName: "myTask" */ '@/views/MyTask')

const UniteMonitor = () => import(/* webpackChunkName: "uniteMonitor" */ '@/views/UniteMonitor')

const LoginPage = () => import(/* webpackChunkName: "login" */ '@/views/LoginPage')

const NoFind = () => import(/* webpackChunkName: "404" */ '@/views/Exception/404.vue')
const NoPermission = () => import(/* webpackChunkName: "403" */ '@/views/Exception/403.vue')

// 开始书写
const IndexLayout = () => import(/* webpackChunkName: "403" */ '@/layout/IndexLayout.vue')
const LogList = () => import(/* webpackChunkName: "403" */ '@/views/LogList')


const routes = [
  {
    path: '/index',
    component: IndexLayout,
    meta: { hideInMenu: true },
    children: [
      {
        path: '',
        name: 'loglist',
        component: LogList,
        meta: {
          name: '事件列表',
          title: '事件列表',
          authority: false,
        },
      },
    ],
  },

  {
    path: '/home',
    component: HomeLayout,
    meta: { hideInMenu: true },
    children: [
      {
        path: '',
        alias: pages.home.name,
        name: pages.home.name,
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
  {
    path: 'infoMana',
    meta: { name: '信息管理', icon: 'infoMana', path: 'http://www.baidu.com' },
  },
  {
    path: '/uniteMonitor',
    component: HomeLayout,
    meta: { hideInMenu: true },
    children: [
      {
        path: '',
        name: 'uniteMonitor',
        component: UniteMonitor,
        meta: {
          name: '统一监控',
          title: '统一监控',
          icon: 'uniteMonitor',
          authority: false,
        },
      },
    ],
  },
  {
    path: 'outsideLink',
    meta: { name: '实时定位', icon: 'realTimePositioning', path: 'http://www.baidu.com' },
  },
  {
    path: 'dataVisualization',
    meta: { name: '数据可视化', icon: 'dataVisualization', path: 'http://www.baidu.com' },
  },
  {
    path: pages.login.path,
    name: pages.login.name,
    component: LoginPage,
    meta: {
      title: '登录页面',
      hideInMenu: true,
    },
  },
  {
    path: '/',
    redirect: 'index',
    meta: { hideInMenu: true },
  },
  {
    path: '/403',
    component: NoPermission,
    meta: { hideInMenu: true, title: '你没有权限访问该页面' },
  },
  {
    path: '*',
    component: NoFind,
    meta: { hideInMenu: true, title: '没有找到你要去的页面' },
  },
]

const reduceRoute = downToUpReduceMetaAuthority(initRoutesMeta(routes))

export const navMenuConfig = getNavMenuConfig(reduceRoute)

export default reduceRoute
