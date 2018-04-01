import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/page/index'
// import Content from '@/page/content'
// import JQ from '@/page/jq'

// import Main from '../components/main.vue'
// 引入子路由
import MySend from '../components/child/mySend.vue'
import MyReview from '../components/child/myReview.vue'
import MySupport from '../components/child/mySupport.vue'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/', // 表示默认路由进来的组件
    //   component: Index
    // },
    // {
    //   path: '/content/:id',
    //   component: Content
    // },
    // {
    //   path: '/main/:id',
    //   name: 'Main',
    //   component: Main
    // },
    // {
    //   path: '/jq',
    //   name: 'JQ',
    //   component: JQ
    //   // children: [
    //   //   {
    //   //     // 当 /user/:id/profile 匹配成功，
    //   //     // UserProfile 会被渲染在 User 的 <router-view> 中
    //   //     path: '/mySend',
    //   //     component: MySend
    //   //   }
    //   // ]
    // },
    {
      path: '/mySend',
      name: 'mySend',
      component: MySend
    },
    {
      path: '/mySupport',
      name: 'mySupport',
      component: MySupport
    },
    {
      path: '/myReview',
      name: 'myReview',
      component: MyReview
    }
  ]
})
