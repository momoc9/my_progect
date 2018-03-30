import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import JQ from '@/page/jq'
// 引入子路由
// import MySend from '../components/child/mySend.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 表示默认路由进来的组件
      name: 'Index',
      component: Index
    },
    {
      path: '/content/:id',
      name: 'Content',
      component: Content
    },
    {
      path: '/jq',
      name: 'JQ',
      component: JQ
      // children: [
      //   {
      //     // 当 /user/:id/profile 匹配成功，
      //     // UserProfile 会被渲染在 User 的 <router-view> 中
      //     path: '/mySend',
      //     component: MySend
      //   }
      // ]
    }
    // {
    //   path: '/mySend',
    //   name: 'mySend',
    //   component: MySend
    // }
  ]
})
