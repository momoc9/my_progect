import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/main.vue'
import MyDesktop from '../components/content/myDesktop.vue'
// import Hehe from '../components/hehe.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main/1',
      children: [
        {
          path: '/myDesktop',
          name: 'myDesktop',
          component: MyDesktop
        }
      ]
    },
    {
      path: '/main/:id/:content',
      component: Main
    }
  ]
})
