/*
 * @Description: 请输入当前文件描述
 * @Author: xiao xin (834529118@qq.com)
 * @Date: 2019-12-14 18:02:49
 * @LastEditors: xiao xin (834529118@qq.com)
 * @LastEditTime: 2019-12-15 13:34:02
 */
import {
  Table,
  TableColumn,
  DatePicker,
  Input,
  Tabs,
  TabPane,
  // Menu,
  // Submenu,
  // MenuItem,
  // MenuItemGroup,
  Badge,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Loading,
  Dialog,
  Tooltip,
  Icon,
  Select,
  Option
} from 'element-ui'

const element = {
  install: function (Vue) {
    Vue.use(Tooltip)
    Vue.use(Table)
    Vue.use(Button)
    Vue.use(DatePicker)
    Vue.use(TableColumn)
    Vue.use(Input)
    Vue.use(TabPane)
    Vue.use(Tabs)
    Vue.use(Dropdown)
    Vue.use(DropdownMenu)
    Vue.use(DropdownItem)
    Vue.use(Badge)
    Vue.use(Loading.directive)
    Vue.use(Dialog)
    Vue.use(Icon)
    Vue.use(Select)
    Vue.use(Option)

    Vue.prototype.$loading = Loading.service
  },
}

export default element
