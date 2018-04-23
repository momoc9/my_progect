import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/page/index'
// import Content from '@/page/content'
// import JQ from '@/page/jq'
import Main from '../components/main.vue'
import Hehe from '../components/hehe.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main/1'
    },
    {
      path: '/main/:id',
      component: Main
    },
    {
      path: '/hehe',
      component: Hehe
    }
    // {
    //   path: '/content/:id',
    //   name: 'Content',
    //   component: Content
    // },
    // {
    //   path: '/jq',
    //   name: 'JQ',
    //   component: JQ
    // }
  ]
})
