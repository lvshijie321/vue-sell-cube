// 注册命令式组件
import { createAPI } from 'cube-ui' // cube-ui 提供组件命令式调用的 api
import Vue from 'vue'
import HeaderDetail from 'components/header-detail/header-detail'

createAPI(Vue, HeaderDetail)
