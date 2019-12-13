import {
  Table,
  TableColumn,
  DatePicker,
  Input,
  Tabs,
  TabPane,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Badge,
  Button,
} from 'element-ui'

const element = {
  install: function (Vue) {
    Vue.use(Table)
    Vue.use(Button)
    Vue.use(TableColumn)
    Vue.use(DatePicker)
    Vue.use(Input)
    Vue.use(TabPane)
    Vue.use(Tabs)
    Vue.use(Menu)
    Vue.use(Submenu)
    Vue.use(MenuItem)
    Vue.use(Badge)
    Vue.use(MenuItemGroup)
  },
}

export default element
