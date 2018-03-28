import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import JQ from '@/page/jq'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    }
  ]
})
