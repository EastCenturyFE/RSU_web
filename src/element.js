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
} from 'element-ui'

const element = {
  install: function (Vue) {
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

    Vue.prototype.$loading = Loading.service
  },
}

export default element
