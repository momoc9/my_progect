import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
Vue.prototype.axios = axios //   axios并不是vue插件,所以只能在每个需要发送请求的组件中即时引入。为了解决这个问题，我们在引入 axios 之后，通过修改原型链，来更方便的使用。

// 引用API文件
//import api from './api/index.js'
// 引用工具文件
// import utils from './utils/index.js'
// // 将API方法绑定到全局
// Vue.prototype.$api = api
// Vue.prototype.$utils = utils

Vue.config.productionTip = false

Vue.use(ElementUI) //  vue自定义全局组件并通过全局方法 Vue.use() 使用该组件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
